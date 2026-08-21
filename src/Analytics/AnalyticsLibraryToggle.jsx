import "../Styles/OverlayPanels.css";

function AnalyticsLibraryToggle({
  showAnalyticsLibrary,
  setShowAnalyticsLibrary,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showAnalyticsLibrary
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Analytics Library"
      aria-expanded={showAnalyticsLibrary}
      onClick={() => {
        setShowAnalyticsLibrary(!showAnalyticsLibrary);
      }}
    >
      ☰
    </button>
  );
}

export default AnalyticsLibraryToggle;