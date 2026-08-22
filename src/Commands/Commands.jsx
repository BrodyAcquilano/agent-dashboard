import { useState } from "react";

import CommandBuilder from "./CommandBuilder.jsx";

import CommandSelector from "./CommandSelector.jsx";
import CommandSelectorToggle from "./CommandSelectorToggle.jsx";

import CommandTemplates from "./CommandTemplates.jsx";
import CommandTemplatesToggle from "./CommandTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Commands() {
  const [showCommandSelector, setShowCommandSelector] = useState(true);

  const [showCommandTemplates, setShowCommandTemplates] = useState(true);

  return (
    <>
      <CommandBuilder />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showCommandSelector ? "" : "left-collapsed"
        }`}
      >
        <CommandSelector />
      </div>

      <CommandSelectorToggle
        showCommandSelector={showCommandSelector}
        setShowCommandSelector={setShowCommandSelector}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showCommandTemplates ? "" : "right-collapsed"
        }`}
      >
        <CommandTemplates />
      </div>

      <CommandTemplatesToggle
        showCommandTemplates={showCommandTemplates}
        setShowCommandTemplates={setShowCommandTemplates}
      />
    </>
  );
}

export default Commands;
