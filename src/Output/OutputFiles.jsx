import "../Styles/Panels.css";

function OutputFiles() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Output Files"
    >
      <h2>Output Files</h2>

      <p>
        Browse outputs generated during the current project run and choose
        which reports, documents, images, code files, datasets, models, or
        other artifacts are displayed in the Output Workspace.
      </p>

      <p>
        Outputs opened from this panel can eventually appear as movable
        windows that can be arranged together on the workspace.
      </p>
    </div>
  );
}

export default OutputFiles;