import "../Styles/OverlayPanels.css";

function ProjectSelectorToggle({
  showProjectSelector,
  setShowProjectSelector,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showProjectSelector
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Project Selector"
      aria-expanded={showProjectSelector}
      onClick={() => {
        setShowProjectSelector(!showProjectSelector);
      }}
    >
      ☰
    </button>
  );
}

export default ProjectSelectorToggle;