import { useState } from "react";

import OrganizationVisualizer from "../Operations/OrganizationVisualizer.jsx";

import AgentInfo from "../Operations/AgentInfo.jsx";
import AgentInfoToggle from "../Operations/AgentInfoToggle.jsx";

import AgentComms from "../Operations/AgentComms.jsx";
import AgentCommsToggle from "../Operations/AgentCommsToggle.jsx";

import "../Styles/OverlayPanels.css";

function Operations() {
  const [showAgentInfo, setShowAgentInfo] =
    useState(true);

  const [showAgentComms, setShowAgentComms] =
    useState(true);

  return (
    <>
      <OrganizationVisualizer />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showAgentInfo
            ? ""
            : "left-collapsed"
        }`}
      >
        <AgentInfo />
      </div>

      <AgentInfoToggle
        showAgentInfo={showAgentInfo}
        setShowAgentInfo={setShowAgentInfo}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showAgentComms
            ? ""
            : "right-collapsed"
        }`}
      >
        <AgentComms />
      </div>

      <AgentCommsToggle
        showAgentComms={showAgentComms}
        setShowAgentComms={setShowAgentComms}
      />
    </>
  );
}

export default Operations;