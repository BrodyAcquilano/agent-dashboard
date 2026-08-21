import "../Styles/OverlayPanels.css";

function ToolSelectorToggle({
  showToolSelector,
  setShowToolSelector,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showToolSelector
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Tool Selector"
      aria-expanded={showToolSelector}
      onClick={() => {
        setShowToolSelector(!showToolSelector);
      }}
    >
      ☰
    </button>
  );
}

export default ToolSelectorToggle;