import "./AgentSetup.css";

function AgentSetup() {
  return (
    <div
      className="agent-setup"
      role="region"
      aria-label="Agent Setup"
    >
      <div className="agent-setup-content">
        <section className="agent-setup-section">
          <h2>Identity</h2>

          <p>
            Define the agent name, description, agent subtype, and other basic
            identifying information.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Model & Provider</h2>

          <p>
            Select the AI provider and model used by this agent. The selected
            model can determine which configuration fields, credentials,
            parameters, limits, and capabilities are available.
          </p>

          <p>
            Provider-specific credentials such as API keys can also be
            configured here when required.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Organization</h2>

          <p>
            Assign the agent to a project department and define its position
            within the existing agent organization.
          </p>

          <p>
            This may include its role, parent agent, agents it supervises,
            reporting relationships, and the part of the project network in
            which it operates.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Task & Prompt</h2>

          <p>
            Describe the work this agent is responsible for and provide any
            model-specific prompt or instructions required to perform that
            work.
          </p>

          <p>
            Some configuration may eventually be converted into generated
            system instructions automatically. Tools, permissions,
            organizational relationships, and limits do not necessarily need
            to be written manually into every prompt if the selected provider
            supports passing those controls separately.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Tools</h2>

          <p>
            Assign tools that have already been defined for the project in the
            Tools workflow.
          </p>

          <p>
            Agent-specific limits can also be applied here. For example, an
            agent could be allowed to call a particular tool once per hour,
            make a limited number of requests, or consume only a specified
            amount of usage through that tool.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Permissions & Communication</h2>

          <p>
            Define which agents this agent can communicate with, who it can
            request work from, who can request work from it, and who it reports
            to.
          </p>

          <p>
            Permissions may also control whether the agent can delegate work,
            modify project state, invoke particular operations, or communicate
            outside its department.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Resources & Output</h2>

          <p>
            Define which project resources and output files the agent can
            access.
          </p>

          <p>
            Access may eventually distinguish between read-only resources,
            writable resources, files the agent may create, and output
            destinations it is permitted to modify.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Usage Limits & Guardrails</h2>

          <p>
            Configure limits for model usage, requests, tokens, tool calls,
            execution time, budget, delegation, workload, and other resources.
          </p>

          <p>
            Available limits may vary by model, provider, tool, and project.
            Guardrails should prevent agents from continuing to consume
            resources beyond the limits assigned to them.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Priorities</h2>

          <p>
            Define how this agent prioritizes competing responsibilities,
            requests, subtasks, and instructions when several pieces of work
            are available at the same time.
          </p>
        </section>

        <section className="agent-setup-section">
          <h2>Save Agent</h2>

          <p>
            The completed configuration will eventually be validated and saved
            as an agent belonging to the active project.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AgentSetup;