import "../../Styles/Panels.css";

function ProjectTemplates() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Project Templates"
    >
      <h2>Project Templates</h2>

      <p>
        Load a reusable project configuration as the starting point for a new
        project.
      </p>

      <p>
        Templates may preserve commonly reused departments, organizational
        structures, allowed tools, agent roles, input and output types,
        analytics settings, and project guardrails.
      </p>

      <h2>Save Template</h2>

      <p>
        Save the current project structure as a reusable template without
        requiring future projects to reuse the same project data or outputs.
      </p>
    </div>
  );
}

export default ProjectTemplates;