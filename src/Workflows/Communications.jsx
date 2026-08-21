import { useState } from "react";

import MessageBoard from "../Communications/MessageBoard.jsx";
import MessageFilters from "../Communications/MessageFilters.jsx";
import MessageFiltersToggle from "../Communications/MessageFiltersToggle.jsx";

import Console from "../Communications/Console.jsx";
import Commands from "../Communications/Commands.jsx";
import CommandsToggle from "../Communications/CommandsToggle.jsx";

import "../Styles/OverlayPanels.css";

function Communications() {
  const [
    showMessageFilters,
    setShowMessageFilters,
  ] = useState(true);

  const [
    showCommands,
    setShowCommands,
  ] = useState(true);

  return (
    <>
      <MessageBoard />

      <Console />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showMessageFilters
            ? ""
            : "left-collapsed"
        }`}
      >
        <MessageFilters />
      </div>

      <MessageFiltersToggle
        showMessageFilters={showMessageFilters}
        setShowMessageFilters={setShowMessageFilters}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showCommands
            ? ""
            : "right-collapsed"
        }`}
      >
        <Commands />
      </div>

      <CommandsToggle
        showCommands={showCommands}
        setShowCommands={setShowCommands}
      />
    </>
  );
}

export default Communications;