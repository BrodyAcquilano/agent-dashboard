import "../Styles/Panels.css";

function Commands() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Available Commands"
    >
      <h2>Commands</h2>

      <p>
        View commands available to the current project and engine, including
        commands for communicating with agents, assigning work, checking
        status, and controlling active operations.
      </p>

      <p>
        A future command-building workflow may allow project-specific commands
        to be created from supported base commands and command rules instead
        of requiring every possible command to be built into this panel.
      </p>
    </div>
  );
}

export default Commands;