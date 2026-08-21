import "../Styles/Panels.css";

function CommandTemplates() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Command Templates"
    >
      <h2>Command Templates</h2>

      <p>
        Load a reusable command template as the starting point for a new
        project-specific command.
      </p>

      <p>
        Templates can preserve commonly used scopes, parameters, timing,
        priority rules, permissions, restrictions, and other command
        configuration.
      </p>

      <h2>Save Template</h2>

      <p>
        Save the current command definition as a reusable template for other
        compatible projects.
      </p>

      <p>
        Templates still depend on the target engine supporting the base action
        required by the command.
      </p>
    </div>
  );
}

export default CommandTemplates;