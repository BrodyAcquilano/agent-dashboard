import { useState } from "react";

import ToolConfig from "./ToolConfig.jsx";

import ToolSelector from "./ToolSelector.jsx";
import ToolSelectorToggle from "./ToolSelectorToggle.jsx";

import ToolTemplates from "./ToolTemplates.jsx";
import ToolTemplatesToggle from "./ToolTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Tools() {
  const [showToolSelector, setShowToolSelector] = useState(true);

  const [showToolTemplates, setShowToolTemplates] = useState(true);

  return (
    <>
      <ToolConfig />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showToolSelector ? "" : "left-collapsed"
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
          showToolTemplates ? "" : "right-collapsed"
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
