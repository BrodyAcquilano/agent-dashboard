import "../Styles/Panels.css";

function ToolTemplates() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Tool Templates"
    >
      <h2>Tool Templates</h2>

      <p>
        Load a reusable tool template as the starting point for a new
        project-specific tool.
      </p>

      <p>
        Templates may preserve common service definitions, input and output
        structures, permission rules, limits, runtime requirements, and other
        reusable configuration.
      </p>

      <h2>Save Template</h2>

      <p>
        Save the current tool configuration as a reusable template for use in
        other projects.
      </p>

      <p>
        Sensitive project-specific credentials should not need to become part
        of a reusable template.
      </p>
    </div>
  );
}

export default ToolTemplates;