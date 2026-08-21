import "../../Styles/Panels.css";

function ProjectSelector() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Project Selector"
    >
      <h2>Projects</h2>

      <p>
        Select an existing project to load its configuration, engine, agents,
        tools, organization, and project data.
      </p>

      <h2>New Project</h2>

      <p>
        Select an available engine to create a new project using that engine's
        supported workflows and configuration rules.
      </p>

      <p>
        Creating a project from an engine provides the project structure.
        Agents, departments, tools, tasks, and other project-specific
        configuration can then be added in the main Project Configuration
        workspace.
      </p>
    </div>
  );
}

export default ProjectSelector;