import { Route } from "react-router";

import Operations from "../../Workflows/Operations.jsx";
import Communications from "../../Workflows/Communications.jsx";
import Output from "../../Workflows/Output.jsx";
import Agents from "../../Workflows/Agents.jsx";
import Tools from "../../Workflows/Tools.jsx";
import Commands from "../../Workflows/Commands.jsx";
import Analytics from "../../Workflows/Analytics.jsx";

export function getPagesConfig() {
  return [
    {
      key: "operations",
      path: "operations",
      label: "Operations",
    },
    {
      key: "communications",
      path: "communications",
      label: "Communications",
    },
    {
      key: "output",
      path: "output",
      label: "Output",
    },
    {
      key: "agents",
      path: "agents",
      label: "Agents",
    },
    {
      key: "tools",
      path: "tools",
      label: "Tools",
    },
    {
      key: "commands",
      path: "commands",
      label: "Commands",
    },
    {
      key: "analytics",
      path: "analytics",
      label: "Analytics",
    },
  ];
}

export function PagesAdapter({ runtime }) {
  if (!runtime) return null;

  return (
    <>
      <Route path="/operations" element={<Operations />} />

      <Route path="/communications" element={<Communications />} />

      <Route path="/output" element={<Output />} />

      <Route path="/agents" element={<Agents />} />

      <Route path="/tools" element={<Tools />} />

      <Route path="/commands" element={<Commands />} />

      <Route path="/analytics" element={<Analytics />} />
    </>
  );
}