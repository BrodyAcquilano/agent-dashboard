import "../Styles/Panels.css";

function RoleTemplates() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Role Templates"
    >
      <h2>Role Templates</h2>

      <p>
        Load a previously saved agent role or configuration as the starting
        point for a new agent.
      </p>

      <p>
        Templates can preserve reusable configurations for recurring jobs such
        as researcher, developer, reviewer, coordinator, marketer, or other
        specialized roles.
      </p>

      <h2>Save Template</h2>

      <p>
        The current agent configuration can eventually be saved as a reusable
        role template independently of the active agent.
      </p>

      <p>
        This allows a useful configuration to survive even if the particular
        project agent that originally used it is later changed or deleted.
      </p>
    </div>
  );
}

export default RoleTemplates;