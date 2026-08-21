import "../Styles/OverlayPanels.css";

function OutputFilesToggle({
  showOutputFiles,
  setShowOutputFiles,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showOutputFiles
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Output Files"
      aria-expanded={showOutputFiles}
      onClick={() => {
        setShowOutputFiles(!showOutputFiles);
      }}
    >
      ☰
    </button>
  );
}

export default OutputFilesToggle;