import "../Styles/Panels.css";

function WidgetConfig() {
  return (
    <div
      className="panel"
      role="region"
      aria-label="Widget Configuration"
    >
      <h2>Widget Configuration</h2>

      <p>
        Select a widget in the Analytics Workspace to configure its data,
        calculations, appearance, constraints, and other supported
        parameters.
      </p>

      <h2>Input Data</h2>

      <p>
        Choose which compatible project records, output files, telemetry, or
        other data sources should be supplied to the selected widget.
      </p>

      <h2>Calculation Parameters</h2>

      <p>
        Configure widget-specific analysis rules such as time ranges,
        aggregation methods, thresholds, comparison groups, formulas, units,
        accuracy requirements, or other calculation settings.
      </p>

      <h2>Display</h2>

      <p>
        Configure supported presentation options such as labels, grouping,
        scale, layout, visible fields, or other visual settings exposed by the
        widget.
      </p>

      <h2>Constraints</h2>

      <p>
        Some widgets may expose limits or validation rules that control which
        data is included or how calculations are performed.
      </p>

      <p>
        Available configuration is defined by the widget component rather than
        being assumed to be the same for every analytics widget.
      </p>
    </div>
  );
}

export default WidgetConfig;