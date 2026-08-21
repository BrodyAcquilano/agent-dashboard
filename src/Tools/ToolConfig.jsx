import "./ToolConfig.css";

function ToolConfig() {
  return (
    <div
      className="tool-config"
      role="region"
      aria-label="Tool Configuration"
    >
      <div className="tool-config-content">
        <section className="tool-config-section">
          <h2>Tool Identity</h2>

          <p>
            Define the tool name, description, purpose, and other basic
            identifying information.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Tool Type</h2>

          <p>
            Select the general type of tool being configured.
          </p>

          <p>
            Initial tool types may include external API services, local
            scripts, local programs, data utilities, file-processing tools,
            and other capabilities that agents can invoke.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Subtype & Service</h2>

          <p>
            Select a more specific subtype based on the chosen tool type.
          </p>

          <p>
            API tools may eventually select from predefined service
            definitions, while scripts or local programs may specify a runtime
            or file type such as Python, JavaScript, or another supported
            executable format.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Connection & Authentication</h2>

          <p>
            Configure the information required to access an external service,
            such as provider configuration, endpoints, authentication
            credentials, or API keys.
          </p>

          <p>
            Fields in this section can eventually change dynamically depending
            on the selected service or tool subtype.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Local Script or Program</h2>

          <p>
            Local tools may define the script or program being used, its file
            type, runtime requirements, expected arguments, and the supported
            method for invoking it.
          </p>

          <p>
            The exact configuration will depend on the type of local tool and
            can be expanded as real integrations are added.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Inputs</h2>

          <p>
            Define the data, files, parameters, messages, or other inputs the
            tool expects.
          </p>

          <p>
            Input definitions may eventually include required fields, accepted
            file types, maximum sizes, schemas, or other validation rules.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Outputs</h2>

          <p>
            Define what the tool returns or produces, such as text, structured
            data, files, images, reports, status information, or other
            artifacts.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Usage Limits</h2>

          <p>
            Configure tool-level restrictions such as request limits, rate
            limits, execution time, file-size limits, data-size limits, or
            other service-specific quotas.
          </p>

          <p>
            These limits describe the tool itself. Individual agents may later
            receive stricter limits when the tool is assigned to them.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Permissions & Operations</h2>

          <p>
            Define which operations the tool is allowed to perform and which
            project resources it may access.
          </p>

          <p>
            Permissions may distinguish between reading, writing, creating,
            modifying, deleting, sending, uploading, downloading, or other
            supported operations.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Compatibility</h2>

          <p>
            Define which departments, roles, agent types, models, or other
            project configurations are appropriate for this tool.
          </p>

          <p>
            Compatibility rules can help prevent a tool from being assigned
            to agents that do not meet its requirements.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Execution Rules</h2>

          <p>
            Define rules governing how the tool can be invoked, including
            execution conditions, time limits, concurrency, retries, and other
            behavior required by the tool or service.
          </p>
        </section>

        <section className="tool-config-section">
          <h2>Save Tool</h2>

          <p>
            The completed configuration will eventually be validated and saved
            as a tool belonging to the active project.
          </p>
        </section>
      </div>
    </div>
  );
}

export default ToolConfig;