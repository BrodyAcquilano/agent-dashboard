import "../Styles/OverlayPanels.css";

function AgentInfoToggle({
  showAgentInfo,
  setShowAgentInfo,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showAgentInfo
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Agent Information Panel"
      aria-expanded={showAgentInfo}
      onClick={() => {
        setShowAgentInfo(!showAgentInfo);
      }}
    >
      ☰
    </button>
  );
}

export default AgentInfoToggle;