import "./OutputViewport.css";

function OutputViewport() {
  return (
    <div
      className="output-viewport"
      role="region"
      aria-label="Output Workspace"
    >
      <div className="output-canvas">
        <div className="output-placeholder">
          <h2>Output Workspace</h2>

          <p>
            Project outputs will appear here as movable windows containing
            reports, documents, images, code, data, models, and other
            generated artifacts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OutputViewport;