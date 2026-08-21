import "../Styles/OverlayPanels.css";

function AgentCommsToggle({
  showAgentComms,
  setShowAgentComms,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showAgentComms
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Agent Communications Panel"
      aria-expanded={showAgentComms}
      onClick={() => {
        setShowAgentComms(!showAgentComms);
      }}
    >
      ☰
    </button>
  );
}

export default AgentCommsToggle;