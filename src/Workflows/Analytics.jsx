import { useState } from "react";

import AnalyticsVisualizer from "../Analytics/AnalyticsVisualizer.jsx";

import AnalyticsLibrary from "../Analytics/AnalyticsLibrary.jsx";
import AnalyticsLibraryToggle from "../Analytics/AnalyticsLibraryToggle.jsx";

import WidgetConfig from "../Analytics/WidgetConfig.jsx";
import WidgetConfigToggle from "../Analytics/WidgetConfigToggle.jsx";

import "../Styles/OverlayPanels.css";

function Analytics() {
  const [
    showAnalyticsLibrary,
    setShowAnalyticsLibrary,
  ] = useState(true);

  const [
    showWidgetConfig,
    setShowWidgetConfig,
  ] = useState(true);

  return (
    <>
      <AnalyticsVisualizer />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showAnalyticsLibrary
            ? ""
            : "left-collapsed"
        }`}
      >
        <AnalyticsLibrary />
      </div>

      <AnalyticsLibraryToggle
        showAnalyticsLibrary={showAnalyticsLibrary}
        setShowAnalyticsLibrary={setShowAnalyticsLibrary}
      />

      <div
        className={`right-overlay-panel right-panel-wrapper ${
          showWidgetConfig
            ? ""
            : "right-collapsed"
        }`}
      >
        <WidgetConfig />
      </div>

      <WidgetConfigToggle
        showWidgetConfig={showWidgetConfig}
        setShowWidgetConfig={setShowWidgetConfig}
      />
    </>
  );
}

export default Analytics;