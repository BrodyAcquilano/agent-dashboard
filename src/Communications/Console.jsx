import "./Console.css";

const EXAMPLE_COMMANDS = [
  "> status project",
  "Project status: running",
  "",
  "> status ResearchAgent",
  "ResearchAgent status: active",
  "",
  "> message Coordinator Review current progress",
  "Command accepted.",
];

function Console() {
  return (
    <div
      className="communications-console"
      role="region"
      aria-label="Command Console"
    >
      <div className="communications-console-header">
        <h2>Console</h2>
      </div>

      <div className="communications-console-content">
        <p className="communications-console-description">
          Project commands and instructions can be entered here to control
          agents, assign work, request status information, pause or stop
          operations, and perform other supported project actions.
        </p>

        <div className="example-console-lines">
          {EXAMPLE_COMMANDS.map((line, index) => (
            <div
              className="example-console-line"
              key={index}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Console;