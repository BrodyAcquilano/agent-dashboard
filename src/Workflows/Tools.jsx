import { useState } from "react";

import ToolConfig from "../Tools/ToolConfig.jsx";

import ToolSelector from "../Tools/ToolSelector.jsx";
import ToolSelectorToggle from "../Tools/ToolSelectorToggle.jsx";

import ToolTemplates from "../Tools/ToolTemplates.jsx";
import ToolTemplatesToggle from "../Tools/ToolTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Tools() {
  const [
    showToolSelector,
    setShowToolSelector,
  ] = useState(true);

  const [
    showToolTemplates,
    setShowToolTemplates,
  ] = useState(true);

  return (
    <>
      <ToolConfig />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showToolSelector
            ? ""
            : "left-collapsed"
        }`}
      >
        <ToolSelector />
      </div>

      <ToolSelectorToggle
        showToolSelector={showToolSelector}
        setShowToolSelector={setShowToolSelector}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showToolTemplates
            ? ""
            : "right-collapsed"
        }`}
      >
        <ToolTemplates />
      </div>

      <ToolTemplatesToggle
        showToolTemplates={showToolTemplates}
        setShowToolTemplates={setShowToolTemplates}
      />
    </>
  );
}

export default Tools;