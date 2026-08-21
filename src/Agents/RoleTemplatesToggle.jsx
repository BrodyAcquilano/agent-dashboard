import "../Styles/OverlayPanels.css";

function RoleTemplatesToggle({
  showRoleTemplates,
  setShowRoleTemplates,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showRoleTemplates
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Role Templates"
      aria-expanded={showRoleTemplates}
      onClick={() => {
        setShowRoleTemplates(!showRoleTemplates);
      }}
    >
      ☰
    </button>
  );
}

export default RoleTemplatesToggle;