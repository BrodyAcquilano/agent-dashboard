import "../Styles/Panels.css";

function ToolSelector() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Tool Selector"
    >
      <h2>Project Tools</h2>

      <p>
        Select an existing tool belonging to the active project to view or
        modify its configuration.
      </p>

      <p>
        Tools may eventually be organized by type, service, department,
        purpose, or another project-defined grouping.
      </p>

      <h2>Add Tool</h2>

      <p>
        Create a new tool from scratch by selecting its type and configuring
        it in the main Tool Configuration workspace.
      </p>

      <h2>Manage Tools</h2>

      <p>
        Project tools can eventually be renamed, reorganized, duplicated, or
        deleted from this panel.
      </p>
    </div>
  );
}

export default ToolSelector;