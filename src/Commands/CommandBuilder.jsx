import "./CommandBuilder.css";

function CommandBuilder() {
  return (
    <div
      className="command-builder"
      role="region"
      aria-label="Command Builder"
    >
      <div className="command-builder-content">
        <section className="command-builder-section">
          <h2>Command Identity</h2>

          <p>
            Define the command name, description, purpose, and the way it
            should appear in the project's available command list.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Base Action</h2>

          <p>
            Select the engine-supported action that this command performs.
          </p>

          <p>
            Base actions represent functionality implemented by the
            application or engine, such as starting agents, stopping work,
            assigning tasks, changing supported parameters, requesting status,
            or sending messages.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Scope</h2>

          <p>
            Define what level of the project this command can target.
          </p>

          <p>
            A command may apply to the entire project, a department, one
            specific agent, or another engine-supported target type.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Target</h2>

          <p>
            Define how the target is selected when the command is executed.
          </p>

          <p>
            Some commands may have a fixed target while others may expose an
            agent, department, or project target as an input parameter.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Input Parameters</h2>

          <p>
            Define the values required when the command is invoked.
          </p>

          <p>
            Inputs may include agent names, tasks, messages, files, values,
            limits, priorities, output types, confidence thresholds, or other
            parameters supported by the selected base action.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Timing</h2>

          <p>
            Define when the command should take effect.
          </p>

          <p>
            Supported timing may eventually include immediate execution,
            execution after the current task completes, queued execution, or
            other engine-supported scheduling behavior.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Priority</h2>

          <p>
            Define how the command should be prioritized relative to existing
            work.
          </p>

          <p>
            Priority rules can determine whether a command interrupts current
            work, waits behind an active task, or enters a project's normal
            work queue.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Runtime Changes</h2>

          <p>
            Define which supported runtime properties the command is permitted
            to change.
          </p>

          <p>
            Commands may modify task assignments, parameters, inputs, output
            requirements, supported tools, thresholds, or other runtime-safe
            configuration exposed by the engine.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Restrictions</h2>

          <p>
            Define constraints that determine when the command can be used and
            which targets are valid.
          </p>

          <p>
            Commands should not perform structural changes that would rewrite
            the project's organizational graph, reporting hierarchy,
            departments, or other relationships requiring full project
            validation.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Permissions</h2>

          <p>
            Define which users, agents, departments, or project roles are
            allowed to invoke the command.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Response & Status</h2>

          <p>
            Define what confirmation, status update, error, or other response
            should be returned to the Communications workflow after the
            command is executed.
          </p>
        </section>

        <section className="command-builder-section">
          <h2>Save Command</h2>

          <p>
            The completed definition will eventually be validated and saved
            as a command available to the active project.
          </p>
        </section>
      </div>
    </div>
  );
}

export default CommandBuilder;