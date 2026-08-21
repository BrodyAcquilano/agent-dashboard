import "../Styles/Panels.css";

function AgentSelector() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Agent Selector"
    >
      <h2>Agents</h2>

      <p>
        Select an existing agent from the active project to view or modify its
        configuration.
      </p>

      <h2>Models</h2>

      <p>
        Select an available model or agent provider to begin creating a new
        agent from scratch.
      </p>

      <p>
        The selected model determines which provider-specific setup fields,
        parameters, credentials, capabilities, and limits are available in the
        main Setup area.
      </p>
    </div>
  );
}

export default AgentSelector;