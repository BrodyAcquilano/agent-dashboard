import "../Styles/Panels.css";

function AnalyticsLibrary() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Analytics Library"
    >
      <h2>Widgets</h2>

      <p>
        Select analytics widgets supported by the current engine and enabled
        for this project.
      </p>

      <p>
        Widgets are built React components included in the application source
        code. Engines determine which widget components they support, and
        projects determine which of those widgets are available for use.
      </p>

      <h2>Data & Files</h2>

      <p>
        Select compatible project data, output files, usage records, telemetry,
        or other generated information that can be supplied to analytics
        widgets.
      </p>

      <p>
        Different widgets may accept different input types. A widget should
        only be connected to data or files that match the inputs it supports.
      </p>
    </div>
  );
}

export default AnalyticsLibrary;