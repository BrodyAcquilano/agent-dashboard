import "../Styles/Panels.css";

function CommandSelector() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Command Selector"
    >
      <h2>Project Commands</h2>

      <p>
        Select an existing project command to view, modify, duplicate, or
        delete its configuration.
      </p>

      <h2>Base Commands</h2>

      <p>
        Create a new project command from an action supported by the current
        engine.
      </p>

      <p>
        Common base actions may include start, stop, pause, resume, status,
        messaging, task assignment, parameter changes, and other controlled
        runtime operations.
      </p>
    </div>
  );
}

export default CommandSelector;