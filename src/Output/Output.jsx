import { useState } from "react";

import OutputViewport from "../Output/OutputViewport.jsx";

import OutputFiles from "../Output/OutputFiles.jsx";
import OutputFilesToggle from "../Output/OutputFilesToggle.jsx";

import OutputStorage from "../Output/OutputStorage.jsx";
import OutputStorageToggle from "../Output/OutputStorageToggle.jsx";

import "../Styles/OverlayPanels.css";

function Output() {
  const [
    showOutputFiles,
    setShowOutputFiles,
  ] = useState(true);

  const [
    showOutputStorage,
    setShowOutputStorage,
  ] = useState(true);

  return (
    <>
      <OutputViewport />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showOutputFiles
            ? ""
            : "left-collapsed"
        }`}
      >
        <OutputFiles />
      </div>

      <OutputFilesToggle
        showOutputFiles={showOutputFiles}
        setShowOutputFiles={setShowOutputFiles}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showOutputStorage
            ? ""
            : "right-collapsed"
        }`}
      >
        <OutputStorage />
      </div>

      <OutputStorageToggle
        showOutputStorage={showOutputStorage}
        setShowOutputStorage={setShowOutputStorage}
      />
    </>
  );
}

export default Output;