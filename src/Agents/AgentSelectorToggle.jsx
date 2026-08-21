import "../Styles/OverlayPanels.css";

function AgentSelectorToggle({
  showAgentSelector,
  setShowAgentSelector,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showAgentSelector
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Agent Selector"
      aria-expanded={showAgentSelector}
      onClick={() => {
        setShowAgentSelector(!showAgentSelector);
      }}
    >
      ☰
    </button>
  );
}

export default AgentSelectorToggle;