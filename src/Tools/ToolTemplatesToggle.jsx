import "../Styles/OverlayPanels.css";

function ToolTemplatesToggle({
  showToolTemplates,
  setShowToolTemplates,
}) {
  return (
    <button
      type="button"
      className={`right-side-toggle ${
        showToolTemplates
          ? ""
          : "right-collapsed-toggle"
      }`}
      aria-label="Toggle Tool Templates"
      aria-expanded={showToolTemplates}
      onClick={() => {
        setShowToolTemplates(!showToolTemplates);
      }}
    >
      ☰
    </button>
  );
}

export default ToolTemplatesToggle;