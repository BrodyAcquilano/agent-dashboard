import "../Styles/Panels.css";

function AgentComms() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Agent Communications"
    >
      <h2>Agent Communications</h2>

      <p>
        View communications, requests, status messages, telemetry, and recent
        activity associated with the selected agent.
      </p>
    </div>
  );
}

export default AgentComms;