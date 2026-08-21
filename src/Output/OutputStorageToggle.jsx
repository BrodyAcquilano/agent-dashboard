import "../Styles/OverlayPanels.css";

function OutputStorageToggle({
  showOutputStorage,
  setShowOutputStorage,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showOutputStorage
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Output Storage"
      aria-expanded={showOutputStorage}
      onClick={() => {
        setShowOutputStorage(!showOutputStorage);
      }}
    >
      ☰
    </button>
  );
}

export default OutputStorageToggle;