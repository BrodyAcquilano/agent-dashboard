import { useState } from "react";

import ProjectConfig from "./ProjectConfig.jsx";

import ProjectSelector from "./ProjectSelector.jsx";
import ProjectSelectorToggle from "./ProjectSelectorToggle.jsx";

import ProjectTemplates from "./ProjectTemplates.jsx";
import ProjectTemplatesToggle from "./ProjectTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Projects() {
  const [
    showProjectSelector,
    setShowProjectSelector,
  ] = useState(true);

  const [
    showProjectTemplates,
    setShowProjectTemplates,
  ] = useState(true);

  return (
    <>
      <ProjectConfig />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showProjectSelector
            ? ""
            : "left-collapsed"
        }`}
      >
        <ProjectSelector />
      </div>

      <ProjectSelectorToggle
        showProjectSelector={showProjectSelector}
        setShowProjectSelector={setShowProjectSelector}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showProjectTemplates
            ? ""
            : "right-collapsed"
        }`}
      >
        <ProjectTemplates />
      </div>

      <ProjectTemplatesToggle
        showProjectTemplates={showProjectTemplates}
        setShowProjectTemplates={setShowProjectTemplates}
      />
    </>
  );
}

export default Projects;