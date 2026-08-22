import { connectDB } from "../../Server/db.js";

async function backfillIds() {
  const db = await connectDB();

  const projects =
    db.collection("projects");

  const models =
    db.collection("models");

  const agents =
    db.collection("agents");

  const tools =
    db.collection("tools");

  // ─────────────────────────────────────────────
  // Find Starter Documents
  // ─────────────────────────────────────────────

  const project =
    await projects.findOne({
      projectKey:
        "default-research-project",
    });

  const model =
    await models.findOne({
      modelKey:
        "azure-gpt-5.6-terra",
    });

  const agent =
    await agents.findOne({
      agentKey:
        "research-agent",
    });

  const webSearch =
    await tools.findOne({
      toolKey:
        "web-search",
    });

  const codeInterpreter =
    await tools.findOne({
      toolKey:
        "code-interpreter",
    });

  if (
    !project ||
    !model ||
    !agent ||
    !webSearch ||
    !codeInterpreter
  ) {
    throw new Error(
      "Required starter documents were not found.",
    );
  }

  const toolMap = new Map([
    [
      "web-search",
      webSearch,
    ],
    [
      "code-interpreter",
      codeInterpreter,
    ],
  ]);

  // ─────────────────────────────────────────────
  // Agent Tool References
  // ─────────────────────────────────────────────

  const agentToolRefs =
    (agent.toolRefs || []).map(
      (toolRef) => {
        const tool =
          toolMap.get(
            toolRef.toolKey,
          );

        if (!tool) {
          throw new Error(
            `Tool not found: ${toolRef.toolKey}`,
          );
        }

        return {
          toolId: tool._id,
          toolName:
            toolRef.toolName ||
            tool.toolName,
        };
      },
    );

  // ─────────────────────────────────────────────
  // Task Tool References
  // ─────────────────────────────────────────────

  const tasks =
    (agent.tasks || []).map(
      (task) => ({
        ...task,

        toolRefs:
          (
            task.toolRefs || []
          ).map((toolRef) => {
            const tool =
              toolMap.get(
                toolRef.toolKey,
              );

            if (!tool) {
              throw new Error(
                `Tool not found: ${toolRef.toolKey}`,
              );
            }

            const {
              toolKey,
              ...rest
            } = toolRef;

            return {
              ...rest,

              toolId:
                tool._id,

              toolName:
                toolRef.toolName ||
                tool.toolName,
            };
          }),
      }),
    );

  // ─────────────────────────────────────────────
  // Update Agent
  // ─────────────────────────────────────────────

  await agents.updateOne(
    {
      _id: agent._id,
    },
    {
      $set: {
        project: {
          projectId:
            project._id,

          projectName:
            agent.project
              ?.projectName ||
            project.projectName,
        },

        model: {
          modelId:
            model._id,

          modelName:
            agent.model
              ?.modelName ||
            model.modelName,
        },

        toolRefs:
          agentToolRefs,

        tasks,
      },

      $unset: {
        agentKey: "",
      },
    },
  );

  // ─────────────────────────────────────────────
  // Update Project
  // ─────────────────────────────────────────────

  const nodes =
    (
      project
        .organizationGraph
        ?.nodes || []
    ).map((node) => {
      const {
        agentKey,
        ...rest
      } = node;

      if (
        agentKey ===
        "research-agent"
      ) {
        return {
          ...rest,

          agentId:
            agent._id,
        };
      }

      return rest;
    });

  await projects.updateOne(
    {
      _id: project._id,
    },
    {
      $set: {
        modelRefs: [
          {
            modelId:
              model._id,

            modelName:
              model.modelName,
          },
        ],

        agentRefs: [
          {
            agentId:
              agent._id,

            agentName:
              agent.agentName,
          },
        ],

        toolRefs: [
          {
            toolId:
              webSearch._id,

            toolName:
              webSearch.toolName,
          },
          {
            toolId:
              codeInterpreter._id,

            toolName:
              codeInterpreter.toolName,
          },
        ],

        "organizationGraph.nodes":
          nodes,
      },

      $unset: {
        projectKey: "",
      },
    },
  );

  // ─────────────────────────────────────────────
  // Remove Model Bootstrap Key
  // ─────────────────────────────────────────────

  await models.updateOne(
    {
      _id: model._id,
    },
    {
      $unset: {
        modelKey: "",
      },
    },
  );

  // ─────────────────────────────────────────────
  // Remove Tool Bootstrap Keys
  // ─────────────────────────────────────────────

  await tools.updateMany(
    {
      _id: {
        $in: [
          webSearch._id,
          codeInterpreter._id,
        ],
      },
    },
    {
      $unset: {
        toolKey: "",
      },
    },
  );

  console.log(
    "Database IDs backfilled.",
  );

  process.exit(0);
}

backfillIds().catch((err) => {
  console.error(
    "ID backfill failed:",
    err,
  );

  process.exit(1);
});