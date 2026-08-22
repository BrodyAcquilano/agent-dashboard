import { useState } from "react";

import AnalyticsVisualizer from "./AnalyticsVisualizer.jsx";

import AnalyticsLibrary from "./AnalyticsLibrary.jsx";
import AnalyticsLibraryToggle from "./AnalyticsLibraryToggle.jsx";

import WidgetConfig from "./WidgetConfig.jsx";
import WidgetConfigToggle from "./WidgetConfigToggle.jsx";

import "../Styles/OverlayPanels.css";

function Analytics() {
  const [showAnalyticsLibrary, setShowAnalyticsLibrary] = useState(true);

  const [showWidgetConfig, setShowWidgetConfig] = useState(true);

  return (
    <>
      <AnalyticsVisualizer />

      <div
        className={`left-overlay-panel left-panel-wrapper ${
          showAnalyticsLibrary ? "" : "left-collapsed"
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
          showWidgetConfig ? "" : "right-collapsed"
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
