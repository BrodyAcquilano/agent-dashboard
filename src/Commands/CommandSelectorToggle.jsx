import "../Styles/OverlayPanels.css";

function CommandSelectorToggle({
  showCommandSelector,
  setShowCommandSelector,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showCommandSelector
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Command Selector"
      aria-expanded={showCommandSelector}
      onClick={() => {
        setShowCommandSelector(!showCommandSelector);
      }}
    >
      ☰
    </button>
  );
}

export default CommandSelectorToggle;