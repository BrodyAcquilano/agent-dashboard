import { useState } from "react";

import AgentSetup from "../Agents/AgentSetup.jsx";

import AgentSelector from "../Agents/AgentSelector.jsx";
import AgentSelectorToggle from "../Agents/AgentSelectorToggle.jsx";

import RoleTemplates from "../Agents/RoleTemplates.jsx";
import RoleTemplatesToggle from "../Agents/RoleTemplatesToggle.jsx";

import "../Styles/OverlayPanels.css";

function Agents() {
  const [showAgentSelector, setShowAgentSelector] = useState(true);

  const [showRoleTemplates, setShowRoleTemplates] = useState(true);

  return (
    <>
      <AgentSetup />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showAgentSelector ? "" : "left-collapsed"
        }`}
      >
        <AgentSelector />
      </div>

      <AgentSelectorToggle
        showAgentSelector={showAgentSelector}
        setShowAgentSelector={setShowAgentSelector}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showRoleTemplates ? "" : "right-collapsed"
        }`}
      >
        <RoleTemplates />
      </div>

      <RoleTemplatesToggle
        showRoleTemplates={showRoleTemplates}
        setShowRoleTemplates={setShowRoleTemplates}
      />
    </>
  );
}

export default Agents;
