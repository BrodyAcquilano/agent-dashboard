import "../Styles/OverlayPanels.css";

function WidgetConfigToggle({
  showWidgetConfig,
  setShowWidgetConfig,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showWidgetConfig
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Widget Configuration"
      aria-expanded={showWidgetConfig}
      onClick={() => {
        setShowWidgetConfig(!showWidgetConfig);
      }}
    >
      ☰
    </button>
  );
}

export default WidgetConfigToggle;