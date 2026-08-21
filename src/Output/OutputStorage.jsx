import "../Styles/Panels.css";

function OutputStorage() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Output Storage"
    >
      <h2>Output Storage</h2>

      <p>
        Save outputs that should persist beyond the current project run, or
        reopen previously saved outputs for comparison and review.
      </p>

      <p>
        Storage may eventually include local files, project storage, databases,
        cloud object storage, or other destinations configured for the
        project.
      </p>

      <p>
        Outputs do not necessarily need to be persisted automatically. This
        allows temporary or unsatisfactory results to be reviewed without
        permanently storing every generated artifact.
      </p>
    </div>
  );
}

export default OutputStorage;