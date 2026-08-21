import "../Styles/OverlayPanels.css";

function CommandTemplatesToggle({
  showCommandTemplates,
  setShowCommandTemplates,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showCommandTemplates
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Command Templates"
      aria-expanded={showCommandTemplates}
      onClick={() => {
        setShowCommandTemplates(!showCommandTemplates);
      }}
    >
      ☰
    </button>
  );
}

export default CommandTemplatesToggle;