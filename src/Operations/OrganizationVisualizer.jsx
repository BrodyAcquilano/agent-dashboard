import "./OrganizationVisualizer.css";

function OrganizationVisualizer() {
  return (
    <div
      className="organization-visualizer"
      role="region"
      aria-label="Organization Visualizer"
    >
      <div className="organization-visualizer-placeholder">
        <h2>Organization Visualizer</h2>

        <p>
          The agent network will be displayed here, including agents,
          departments, hierarchy, delegation paths, and connections.
        </p>
      </div>
    </div>
  );
}

export default OrganizationVisualizer;