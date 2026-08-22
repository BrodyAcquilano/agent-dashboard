import "../Styles/OverlayPanels.css";

function ProjectTemplatesToggle({
  showProjectTemplates,
  setShowProjectTemplates,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showProjectTemplates
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Project Templates"
      aria-expanded={showProjectTemplates}
      onClick={() => {
        setShowProjectTemplates(!showProjectTemplates);
      }}
    >
      ☰
    </button>
  );
}

export default ProjectTemplatesToggle;