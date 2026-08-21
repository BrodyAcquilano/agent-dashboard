import "../Styles/Panels.css";

function MessageFilters() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Message Filters"
    >
      <h2>Message Filters</h2>

      <p>
        Filter the project Message Board by communication type, priority,
        status, source, or other message properties.
      </p>

      <p>
        Message types may include progress updates, completed subtasks,
        agent-to-agent communications, requests, successful actions, errors,
        usage updates, budget warnings, and system status messages.
      </p>
    </div>
  );
}

export default MessageFilters;