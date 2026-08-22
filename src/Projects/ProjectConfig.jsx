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
            different departments, agents, tools, tasks, data, and
            organizational structures.
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
          <h2>Allowed Models</h2>

          <p>
            Define which AI providers and models may be used when creating
            agents for this project.
          </p>

          <p>
            Agent templates can only be used to create project agents when
            their required model or provider is allowed by the project.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Agent Templates</h2>

          <p>
            Select reusable agent templates that are available when creating
            agents for this project.
          </p>

          <p>
            Templates provide starting configurations for common roles, but
            the actual agent created from a template belongs specifically to
            this project and is configured through the Agents workflow.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Tool Templates</h2>

          <p>
            Select reusable tool templates that are available when creating
            tools for this project.
          </p>

          <p>
            Tool templates provide reusable definitions and configuration
            patterns. Actual project tools can then be configured for the
            requirements of the current project.
          </p>
        </section>

        <section className="project-config-section">
          <h2>Agents & Organization</h2>

          <p>
            Agents created for the project are managed through the Agents
            workflow and belong specifically to this project.
          </p>

          <p>
            The project organization can reference those agents and define
            their departments, graph positions, parent and child
            relationships, reporting structure, communication edges, and
            other organizational relationships.
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
            that apply across the project.
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