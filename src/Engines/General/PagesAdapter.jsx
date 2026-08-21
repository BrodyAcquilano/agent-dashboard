import { Route } from "react-router";

import Operations from "../../Workflows/Operations.jsx";
import Communications from "../../Workflows/Communications.jsx";
import Output from "../../Workflows/Output.jsx";
import Setup from "../../Workflows/Setup.jsx";
import Tools from "../../Workflows/Tools.jsx";
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
      key: "setup",
      path: "setup",
      label: "Setup",
    },
    {
      key: "tools",
      path: "tools",
      label: "Tools",
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

      <Route path="/setup" element={<Setup />} />

      <Route path="/tools" element={<Tools />} />

      <Route path="/analytics" element={<Analytics />} />
    </>
  );
}