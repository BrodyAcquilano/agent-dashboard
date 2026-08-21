import { useState } from "react";

import CommandBuilder from "../Commands/CommandBuilder.jsx";

import CommandSelector from "../Commands/CommandSelector.jsx";
import CommandSelectorToggle from "../Commands/CommandSelectorToggle.jsx";

import CommandTemplates from "../Commands/CommandTemplates.jsx";
import CommandTemplatesToggle from "../Commands/CommandTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Commands() {
  const [
    showCommandSelector,
    setShowCommandSelector,
  ] = useState(true);

  const [
    showCommandTemplates,
    setShowCommandTemplates,
  ] = useState(true);

  return (
    <>
      <CommandBuilder />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showCommandSelector
            ? ""
            : "left-collapsed"
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
          showCommandTemplates
            ? ""
            : "right-collapsed"
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