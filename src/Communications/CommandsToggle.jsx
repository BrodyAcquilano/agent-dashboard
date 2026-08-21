import "../Styles/OverlayPanels.css";

function CommandsToggle({
  showCommands,
  setShowCommands,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showCommands
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Commands Panel"
      aria-expanded={showCommands}
      onClick={() => {
        setShowCommands(!showCommands);
      }}
    >
      ☰
    </button>
  );
}

export default CommandsToggle;