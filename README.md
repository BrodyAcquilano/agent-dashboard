# Agent Dashboard

Agent Dashboard is a local-first React application for creating, configuring, organizing, operating, and monitoring teams of software agents.

The application is intended to act as a central **control, communication, and visualization layer** between a user and agents running through AI providers, external services, local programs, databases, and other tools.

Rather than treating every agent as an isolated chat window, Agent Dashboard models agents as members of an organized project.

Agents can be assigned:

* roles
* departments
* parent and child relationships
* tasks
* priorities
* models and AI providers
* prompts and instructions
* tools
* resources
* permissions
* budgets
* usage restrictions
* communication rules

The dashboard then provides interfaces for viewing how those agents are organized, configuring them, communicating with them, monitoring their work, and reviewing what they produce.

---

# Core Concept

The central object in Agent Dashboard is the **agent**, not the tool.

An agent represents an intelligent worker or decision-making node in a project organization.

A tool represents a capability that an agent may use.

For example:

```text
Marketing Agent
│
├── Web Search Tool
├── Instagram Tool
├── Image Generation Tool
└── Email Tool
```

The Email Tool might connect to a service such as Resend.

That does not make Resend or the email function an agent.

It remains a tool used by an agent.

This keeps the application focused on organizing intelligent actors rather than becoming a generic procedural workflow editor.

---

# Agent Organization

Agents can be organized hierarchically.

For example:

```text
Project Coordinator
│
├── Development
│   ├── Frontend Agent
│   ├── Backend Agent
│   └── Infrastructure Agent
│
├── Marketing
│   ├── Research Agent
│   └── Content Agent
│
├── Finance
│   └── Finance Agent
│
└── Research
    └── Technology Research Agent
```

An agent may have:

* a department
* a role within that department
* a parent agent
* permitted child agents
* assigned responsibilities
* workload limits
* priorities
* communication permissions

The Operations workflow will visualize these relationships as a network rather than only displaying agents in a list.

---

# Application Navigation

Agent Dashboard contains both workspace-level pages and engine-level workflows.

The current navigation order is:

* Home
* Operations
* Communications
* Output
* Agents
* Tools
* Analytics
* Preferences

**Projects** is the workspace-level Landing page and is mounted at the root route `/`. It provides a stable default route that can load even before an engine-specific project workflow is available. In the future, this is the main project selection and project launch screen.

**Preferences** is also workspace-level. It remains available independently of the active project or engine and is intended for dashboard-level or user-level preferences.

The Header is a workspace-level navigation component. It renders the Home and Preferences links statically and receives the active engine's `pagesConfig` to generate the links between them dynamically. This keeps engine routing and Header navigation synchronized while still allowing workspace pages to exist outside the engine.

---

# Current Workflows

The General engine currently defines six project-level workflows. Their order reflects the normal project lifecycle: Operations is the live organizational view, Communications shows work in progress, and Output contains completed deliverables. Setup, Tools, and Analytics support the configuration and monitoring of that work.

## Operations

Operations is the primary live project overview.

It will display the project's agent organization as a visual network showing agents, departments, parent-child relationships, delegation paths, and other connections.

Selecting an agent will eventually expose information such as:

* identity
* role
* status
* model
* provider
* current task
* parameters
* assigned tools
* permissions
* usage
* telemetry
* agent-specific logs

The Operations workflow is intended to use a large viewport with contextual panels that can appear over or beside the visualization instead of permanently dividing the screen into fixed columns.

This allows the organizational network to remain the dominant interface while detailed controls are available when needed.

---

## Communications

Communications provides a project-wide view of agent activity and messaging.

This may include:

* project logs
* agent progress updates
* requests between agents
* warnings
* errors
* delegation events
* status changes
* user instructions
* important project messages

The Communications workflow may also include a command interface.

Possible commands could eventually allow a user to:

```text
call AgentName
pause AgentName
resume AgentName
stop AgentName
status AgentName
assign AgentName <task>
```

The exact command language has not yet been defined.

Communications is intended to show activity and coordination rather than completed project artifacts.

---

## Output

Output contains completed project deliverables.

Examples include:

* reports
* research documents
* articles
* emails
* source code
* datasets
* spreadsheets
* images
* generated documents
* 3D models
* architectural outputs
* summaries
* analysis results
* exported files

Output is distinct from Communications.

Communications shows what agents are saying or doing while work progresses.

Output shows the actual product produced by that work.

Different engines may eventually use completely different Output workflows.

A legal project might emphasize evidence, sources, arguments, and legal summaries.

An architecture project might emphasize BIM data, drawings, models, code reviews, and renderings.

A software project might emphasize source code, documentation, builds, test results, and deployment artifacts.

---

## Agents

Agents is where agents are created and configured.

Agent configuration may eventually include:

* agent name
* description
* department
* organizational role
* parent agent
* allowed children
* AI provider
* model
* provider credentials
* prompts
* system instructions
* available parameters
* permissions
* resources
* assigned tools
* task definitions
* priorities
* budgets
* usage limits
* delegation limits
* communication rules

Different AI providers may expose different models, parameters, authentication systems, capabilities, and restrictions.

The Agents workflow will therefore need to adapt as provider integrations are implemented.

The dashboard does not assume that every provider works identically.

---

## Tools

Tools defines reusable capabilities that agents may be assigned through Setup.

A tool may connect to an external service.

Examples include:

```text
Instagram API
Resend
GitHub
MongoDB
Web Search
Cloud Storage
Rendering Services
GIS Services
Revit Integrations
```

A tool may also be completely local.

Examples include:

```text
Python scripts
File conversion
Local analysis programs
Database utilities
PDF generation
Git commands
Data processing functions
```

Tool definitions may include:

* credentials
* permissions
* allowed operations
* usage limits
* file-size limits
* rate limits
* allowed agents
* allowed data
* service-specific configuration

Agent limits and tool limits are separate concepts.

For example, an agent may be limited to using a particular tool once per hour while the tool itself may impose a maximum file size or API request limit.

The Tools workflow defines capabilities.

The Setup workflow assigns those capabilities to agents.

---

## Analytics

Analytics will eventually provide project-level monitoring and measurement.

Possible areas include:

* token usage
* model usage
* API usage
* tool usage
* project cost
* agent budgets
* agent workload
* task completion
* execution time
* errors
* retry rates
* performance
* availability
* telemetry

Analytics is currently a lower-priority workflow and may later be divided into more specialized workflows such as Performance, Budgets, Usage, or Audit.

---

# Workspace-Level Features

Not every page belongs to an engine.

The Workspace layer contains application-level UI and routes that should remain available independently of the active project engine.

The current Workspace contains:

```text
Workspace/
├── Navigation/
│   └── Header
├── Projects/
│   └── Projects
└── Preferences/
    └── Preferences
```

**Projects** is the default React Router page at `/`. It provides a stable entry point before or outside engine-specific workflows and is the project selection and launch interface.

**Header** is the workspace-level navigation component. It displays workspace links such as Home and Preferences directly, while engine-specific links are generated from the active engine's `pagesConfig`.

**Preferences** is a workspace-level page for dashboard or user preferences rather than a General-engine workflow. It should remain available regardless of which engine is active.

Additional workspace-level features may eventually include:

* project selection
* account management
* authentication
* global application settings
* project management

Workspace-level routes are intentionally separate from engine routes so an engine can change without removing the application's stable navigation and entry points.

---

# Projects and Engines

Projects and engines solve different problems.

A **project** contains a specific collection of agents, configuration, tools, data, tasks, outputs, and other project-specific information.

An **engine** defines how a category of project behaves inside the application.

Multiple projects can use the same engine.

For example:

```text
Project: Company Website
Engine: General

Project: Ecommerce Store
Engine: General

Project: Research Project
Engine: General
```

Each project could contain entirely different agents and data while using the same application workflows and components.

If a project category eventually requires substantially different workflows or behavior, another engine can be introduced.

For example:

```text
General Engine
Legal Engine
Architecture Engine
Urban Planning Engine
```

A Legal engine might expose specialized evidence, citation, argument, and review workflows.

An Architecture engine could expose workflows built around BIM, Revit, building-code analysis, GIS, rendering, or Unreal Engine.

The engine architecture allows these differences without filling the core application with project-type conditionals.

---

# Project Execution Model

Agent Dashboard is currently designed around **controlled project sessions**, not permanently running autonomous agents.

A project stores the definitions needed to construct a team: agents, relationships, tasks, prompts, tools, permissions, limits, and other project-specific configuration. Stored configuration is inert until the project is opened and its team is started.

Conceptually:

```text
Open Project
    ↓
Load Agent Configuration
    ↓
Start Project Team
    ↓
Operations
    ↓
Communications / Progress
    ↓
Completed Output
    ↓
Close or Switch Project
    ↓
Stop Project Team
```

Agents are not intended to continue running indefinitely after their project is closed or replaced. Switching projects should shut down the active team's work so agents do not continue making API requests, consuming tokens, invoking tools, or accumulating costs in the background.

A future version may support multiple active projects, scheduled work, or explicit background services, but those capabilities should be opt-in rather than automatic.

This gives the dashboard a clear control boundary: a project may exist in storage without being active, and opening a project activates the team configured for that project.

---

# When a New Engine Is Needed

The General engine is intentionally broad. Most agentic projects can use the same basic workflows:

```text
Operations
Communications
Output
Agents
Tools
Analytics
```

Different projects do not require different engines simply because they contain different agents, departments, tasks, data, prompts, or tools. Two projects can use the same General engine while storing completely different teams and project data.

A new engine becomes useful when the **application behavior itself** needs to change. Examples include:

* an Output workflow that requires fundamentally different components or artifact handling
* a Agents workflow with specialized configuration constraints for a provider or domain
* different workflow availability or routing
* specialized validation
* a substantially different Operations visualization
* engine-specific app-level components
* behavior required by a particular AI platform or project domain

For example, an architecture-oriented engine might eventually require specialized Revit, BIM, GIS, building-code, model, or rendering interfaces. A legal engine might require specialized evidence, authority, citation, argument, review, and document-output components.

The practical distinction is:

```text
Different team, tasks, tools, or data
→ usually a different project

Different application workflows or behavior
→ potentially a different engine
```

This keeps the General engine useful for most projects while allowing specialized engines only when they provide a real architectural benefit.

---

# Example Project Types

The dashboard is intended to support many different agent organizations.

## Software Development

Possible agents:

```text
Coordinator
Frontend Developer
Backend Developer
Infrastructure Agent
Security Agent
Research Agent
Marketing Agent
Finance Agent
Database Librarian
```

The database librarian might inspect project data, identify inconsistencies, organize records, and provide information to other agents.

The infrastructure agent could assist with systems such as Render, Vercel, Cloudflare, MongoDB, and deployment configuration.

---

## Research and News

Possible workflow:

```text
Collector Agent
↓
Source Verification Agent
↓
Analysis Agent
↓
Summary Agent
↓
Report
```

Tools might retrieve news articles, social-media trends, public datasets, or research material.

---

## Legal Research

Possible agents:

```text
Law Research Agent
Evidence Agent
Argument Agent
Review Agent
Summary Agent
```

One agent could retrieve laws and authorities.

Another could organize project evidence from a controlled database.

Another could construct logical arguments.

A reviewing agent could check reasoning or source coverage.

A final agent could generate a summary or report.

Any high-stakes legal use would still require qualified human review.

---

## Architecture and Urban Planning

Possible agents:

```text
Project Coordinator
Building Code Agent
BIM / Revit Agent
Urban Planning Agent
GIS Agent
Rendering Agent
Research Agent
```

Tools could eventually interact with:

```text
Revit
GIS software
Building-code databases
Unreal Engine
Rendering services
Project databases
Environmental datasets
```

---

## Business Operations

Possible departments include:

```text
Inventory
Marketing
Finance
Customer Communications
Research
Operations
Reporting
```

Agents could monitor inventory, generate reports, analyze business information, prepare marketing material, or use tools to send authorized communications.

---

# Architecture

Agent Dashboard uses an engine-based React architecture.

The major frontend layers are:

```text
App
│
├── Workspace
├── Runtime
├── Engines
├── Workflows
└── Components
```

---

## Runtime

Runtime stores React state, functions, references, computed values, APIs, and other application behavior.

There is a Global Runtime containing cross-engine state.

Each engine may also have its own runtime containing state specific to that engine.

All engine runtimes are instantiated through a stable hook structure.

The active project's `engineKey` determines which engine runtime is merged with the global runtime.

Conceptually:

```text
Global Runtime
      +
Selected Engine Runtime
      ↓
Combined Runtime
```

This combined runtime is passed into engine adapters.

---

## Engine

Each engine defines:

```text
engine.js
PagesAdapter.jsx
AppAdapter.jsx
```

The engine is selected by the active project's `engineKey`.

The General engine is currently the only implemented engine.

Additional engines can be added later without restructuring the core application.

---

## Pages Adapter

The Pages Adapter defines the project-level workflows available for an engine.

It determines:

* which routes exist
* which workflow components are rendered
* which navigation links appear
* which runtime values are passed into each workflow

The Header receives the same page configuration, keeping engine navigation synchronized with engine routing.

---

## App Adapter

The App Adapter is an optional extension point for engine-specific components that must exist above individual workflows.

This is useful when a major component needs to persist across several workflow routes.

Most components in Agent Dashboard are currently expected to belong to specific workflows, so the General engine may require little or no App Adapter functionality.

---

## Workflows

Workflow files represent major application screens.

Currently:

```text
Operations
Communications
Output
Agents
Tools
Analytics
```

Each workflow can compose whatever components it requires.

There is generally no need for another adapter below the Pages Adapter simply to change a page's components.

If an engine requires a fundamentally different screen, its Pages Adapter can mount a different workflow directly.

---

## Components

Components may be organized according to what best matches the application.

Agent Dashboard currently organizes many components by workflow because the pages correspond closely to separate functions.

For example:

```text
Operations/
Agents/
Output/
```

Another application using the same engine architecture might instead organize components by reusable function:

```text
Forms/
Filters/
Extensions/
```

The architecture does not require one specific component-folder strategy.

---

# Local-First Design

The current goal is to keep Agent Dashboard easy to run locally.

The intended early workflow is:

```text
Clone repository
↓
npm install
↓
run local application
↓
configure local project
↓
connect your own services and agents
```

There are currently no user accounts and no requirement for a hosted deployment.

Projects are intended to run only while actively opened or explicitly started. Closing or switching the active project should stop its agents by default, keeping local operation predictable and preventing unintended background API usage.

This makes the project easier to modify, experiment with, and distribute as an open-source application.

---

# Data and Backend

The repository currently contains a minimal local `Data` directory containing a placeholder project definition.

The default project only needs enough information to select its engine.

Example:

```json
{
  "name": "Default Project",
  "engineKey": "general"
}
```

This is not intended to become the final persistence system.

Agent definitions, tool definitions, project configuration, outputs, usage records, and other persistent data will likely require a database.

MongoDB is currently the likely persistence layer.

A small local server can provide secure access between the browser and MongoDB or external APIs.

Conceptually:

```text
React Dashboard
      ↓
Local Server
      ↓
MongoDB
      ↓
External AI / Tool APIs
```

The dashboard itself is primarily responsible for:

* managing metadata
* collecting user input
* displaying project state
* routing requests
* visualizing agents
* coordinating communication
* displaying results

Most AI inference can occur remotely through provider APIs.

That means running the dashboard locally should not necessarily require heavy local computing resources.

---

# Hosting

The current plan is local-first.

A hosted deployment is not required.

If the application eventually benefits from remote access or additional server infrastructure, a deployment could later use systems such as:

```text
Vercel frontend
Render backend
MongoDB database
```

That decision is intentionally deferred.

The architecture should allow the same frontend to communicate with either a local server or a hosted backend.

---

# AI Providers

Agent Dashboard is intended to support multiple AI providers rather than being tied to one service.

Possible providers may have different:

* authentication systems
* model lists
* parameters
* APIs
* billing models
* context limits
* tool capabilities
* agent features

Provider integrations will therefore be added and tested individually.

The dashboard will provide a common organizational model while allowing provider-specific configuration where required.

---

# Permissions and Guardrails

Agents should not automatically receive unrestricted access to every tool or other agent.

Configuration may eventually control:

```text
Which tools an agent can use
Which operations a tool permits
Which resources an agent can read
Which resources an agent can modify
Which agents can communicate
Which agents can delegate work
Who can request work from whom
Maximum work or delegation depth
Token limits
Request limits
Tool-use limits
Time limits
Budget limits
Priority rules
```

These controls are important both for safety and predictable costs.

---

# Development Status

Agent Dashboard is currently in early development.

The engine/runtime/application shell is established.

The initial General engine provides placeholder workflows for:

```text
Operations
Communications
Output
Agents
Tools
Analytics
```

The next development stage is the Operations interface, beginning with a full-screen agent-network viewport and contextual information panels.

Backend services, MongoDB persistence, AI provider integrations, tool integrations, and agent execution will be added incrementally after the core user interface and data structures are established.

---

# Running Locally

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

---

# Guiding Principle

Agent Dashboard is not intended to replace the AI providers, APIs, databases, or programs that agents use.

It is the layer that organizes them.

```text
User
 ↓
Agent Dashboard
 ↓
Agent Organization
 ↓
Agents
 ↓
Tools and Services
 ↓
Outputs
```

The dashboard provides the structure required to understand, configure, direct, and monitor that organization from one interface.
