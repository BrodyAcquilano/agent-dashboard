import "../Styles/OverlayPanels.css";

function MessageFiltersToggle({
  showMessageFilters,
  setShowMessageFilters,
}) {
  return (
    <button
      type="button"
      className={`left-side-toggle ${
        showMessageFilters
          ? ""
          : "left-collapsed-toggle"
      }`}
      aria-label="Toggle Message Filters"
      aria-expanded={showMessageFilters}
      onClick={() => {
        setShowMessageFilters(!showMessageFilters);
      }}
    >
      ☰
    </button>
  );
}

export default MessageFiltersToggle;