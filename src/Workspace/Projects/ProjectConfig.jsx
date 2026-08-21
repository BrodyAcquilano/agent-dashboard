import "./ProjectConfig.css";

function ProjectConfig() {
  return (
    <div
      className="project-config"
      role="region"
      aria-label="Project Configuration"
    >
      <div className="project-config-content">
        <section className="project-config-section">
          <h2>Project Identity</h2>

          <p>
            Define the project name, description, purpose, and other basic
            project information.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Engine</h2>

          <p>
            Select the engine that determines which workflows, runtime
            behavior, adapters, and engine-specific components are available
            to the project.
          </p>

          <p>
            Projects using the same engine can still contain completely
            different agents, tools, departments, data, and tasks.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Purpose & Task</h2>

          <p>
            Describe the overall purpose of the project and the work the agent
            organization is expected to perform when the project is started.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Departments</h2>

          <p>
            Define the organizational departments available to agents in this
            project.
          </p>

          <p>
            Examples could include Development, Research, Marketing, Finance,
            Infrastructure, Security, or other project-specific divisions.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Agents & Organization</h2>

          <p>
            Select reusable agents that are available to the project and
            assign them project-specific organizational positions.
          </p>

          <p>
            Project assignments may define department, parent and child
            relationships, graph position, reporting structure, communication
            edges, responsibilities, and project-specific constraints.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Tools</h2>

          <p>
            Select which reusable tools are available within this project and
            define any project-level restrictions or configuration.
          </p>

          <p>
            An agent can only use tools that are both permitted by the project
            and assigned to that agent.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Inputs</h2>

          <p>
            Define the types of files, data, messages, resources, or other
            inputs that the project can accept.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Outputs</h2>

          <p>
            Define the types of artifacts the project is expected to produce,
            such as reports, documents, images, code, datasets, models, or
            other files.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Analytics</h2>

          <p>
            Select which measurements and analytics should be tracked for the
            project, such as usage, budget, task completion, agent workload,
            tool activity, execution time, or errors.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Execution & Guardrails</h2>

          <p>
            Define project-level execution rules, budgets, usage limits,
            concurrency restrictions, shutdown behavior, and other guardrails
            that apply across the agent organization.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Save Project</h2>

          <p>
            The completed project configuration will eventually be validated
            and saved before the project is loaded for active operation.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ProjectConfig;