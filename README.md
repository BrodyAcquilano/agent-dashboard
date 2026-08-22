# Agent Dashboard

Agent Dashboard is a local-first React application for creating, configuring, organizing, operating, and monitoring teams of software agents.

The application acts as a **control, communication, and visualization layer** between a user and agents running through AI providers, external services, local programs, databases, and other tools.

Rather than treating every agent as an isolated chat window, Agent Dashboard models agents as members of an organized project.

Agents can be assigned:

- roles
- departments
- parent and child relationships
- tasks
- priorities
- AI models and providers
- prompts and instructions
- tools
- resources
- permissions
- budgets
- usage restrictions
- communication rules

The dashboard provides interfaces for configuring agents, viewing how they are organized, communicating with them, monitoring their work, reviewing their output, and analyzing project activity.

---

# Core Concept

The central object in Agent Dashboard is the **agent**, not the tool.

An agent represents an intelligent worker or decision-making node inside a project organization.

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

The Email Tool might connect to an external email service, but the service itself is not an agent.

This keeps Agent Dashboard focused on organizing intelligent actors rather than becoming a generic procedural workflow editor.

---

# Projects

A project defines the environment in which a team of agents operates.

Projects may define:

- name and description
- project purpose
- departments
- allowed AI models
- available tools
- project agents
- organizational relationships
- input types
- output types
- analytics configuration
- execution rules
- budgets
- guardrails

Live agents are project-specific.

A project can contain many agents with different tasks, models, tools, relationships, permissions, and limits.

Tools may also be configured for a particular project and then made available to compatible agents and tasks.

Projects are the main organizational boundary of Agent Dashboard.

---

# Agent Organization

Agents can be arranged into departments and hierarchical relationships.

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

- a department
- a role
- a parent agent
- permitted child agents
- assigned responsibilities
- priorities
- workload limits
- communication permissions
- tools and resources
- project-specific constraints

The Operations page is intended to visualize these relationships as a network rather than only displaying agents in a list.

MongoDB `_id` values are used as the primary identity for stored projects, models, agents, and tools.

Names remain display information and do not need to be globally unique.

---

# Application Pages

Agent Dashboard currently contains the following pages:

```text
Projects
Operations
Communications
Output
Agents
Tools
Commands
Analytics
Preferences
```

Each page lives with its related components inside its own source directory.

For example:

```text
src/
├── Projects/
├── Operations/
├── Communications/
├── Output/
├── Agents/
├── Tools/
├── Commands/
├── Analytics/
├── Preferences/
├── Navigation/
├── Runtime/
└── Api/
```

Routes are defined directly by the application.

There is no dynamic page or application switching layer.

---

# Projects Page

Projects is mounted at `/`.

It acts as the main project selection, creation, configuration, and launch interface.

The page will eventually allow users to:

- browse existing projects
- create projects
- select allowed models
- configure departments
- define project inputs and outputs
- configure execution rules
- open an existing project
- manage project-level tools
- add agents
- start or stop project activity

Projects are loaded from MongoDB through the local backend.

A lightweight project list is used for selection, while a full project document can be fetched when needed.

---

# Operations

Operations is the live organizational view of the active project.

It is intended to display:

- agents
- departments
- hierarchy
- delegation paths
- relationships
- status
- project organization

through an interactive visual network.

Selecting an agent can expose information such as:

- identity
- role
- department
- model
- provider
- tasks
- status
- tools
- permissions
- limits
- usage
- agent-specific communications

The organization visualization remains the primary interface while contextual panels can be opened or hidden as needed.

---

# Communications

Communications provides a project-wide view of important agent activity.

Messages may include:

- progress updates
- completed subtasks
- requests
- agent-to-agent communication
- successful actions
- errors
- usage updates
- budget warnings
- status changes
- stopped operations
- important system events

Communications is intended for meaningful project activity rather than every internal log generated by every agent.

The page also contains a command console that can eventually be used to send supported instructions to the active project.

---

# Output

Output provides a visual workspace for project artifacts.

Outputs may include:

- reports
- documents
- PDF files
- source code
- datasets
- spreadsheets
- images
- generated files
- analysis results
- other project artifacts

The Output page is intended to behave like a large two-dimensional workspace where output windows can be opened, arranged, moved, and reviewed together.

Different file types can eventually open in different output windows.

For example:

```text
PDF
→ PDF viewer window

Markdown
→ text / Markdown window

Image
→ image viewer window

Dataset
→ data viewer window
```

Outputs do not necessarily need to be permanently saved.

A generated result can be reviewed, discarded, regenerated, or saved when the user decides it is useful.

Output is distinct from Communications:

```text
Communications
→ what the project is reporting while work happens

Output
→ what the project actually produced
```

---

# Agents

Agents is where project agents are created and configured.

Agent configuration may include:

- identity
- model and provider
- department
- organizational position
- tasks
- prompts
- tools
- permissions
- communication rules
- inputs and outputs
- usage limits
- priorities
- guardrails

Different models and providers may expose different parameters, capabilities, limits, and authentication requirements.

The selected model can therefore influence which configuration fields are available for an agent.

## Agent Tools and Task Tools

An agent can have a set of tools that it is permitted to use.

Individual tasks can then use a subset of those tools.

Conceptually:

```text
Agent
│
├── Available Tools
│   ├── Web Search
│   └── Code Interpreter
│
└── Tasks
    │
    ├── Research Topic
    │   └── Web Search
    │
    └── Create PDF
        └── Code Interpreter
```

This separates:

```text
Agent tool access
→ what the agent is allowed to use

Task tool assignment
→ what a particular task actually uses
```

Agents may contain multiple tasks that execute sequentially.

Each task may define:

- task name
- description
- prompt template
- inputs
- outputs
- tools
- parameters
- model parameters
- execution order

The output of one task can become the input of another.

For example:

```text
Research Request
      ↓
Task 1: Research Topic
      ↓
Markdown Research Report
      ↓
Task 2: Create PDF
      ↓
Styled PDF Report
```

---

# Tools

Tools define capabilities that project agents can use.

A tool may connect to an external API or service, such as:

```text
GitHub
MongoDB
Email services
Cloud storage
Web services
Data APIs
```

A tool may also represent hosted or local functionality:

```text
Web search
Code interpreter
Python scripts
JavaScript programs
File conversion
Data processing
Database utilities
Local analysis programs
Document generation
```

Tool configuration may include:

- name and purpose
- type and subtype
- service or runtime
- connection requirements
- inputs
- outputs
- permissions
- supported operations
- rate limits
- execution limits
- file-size limits
- compatibility rules

Credentials and secrets should not be stored directly in repository JSON files.

Sensitive credentials should remain server-controlled, such as through environment variables or another protected credential system.

Agents should request capabilities through the application rather than receiving unrestricted raw credentials.

---

# Commands

Commands provides a builder for controlled project actions.

The application defines which base actions are actually supported.

Configured commands can then expose those actions to a project in a controlled way.

Possible base actions may include:

```text
start
stop
pause
resume
status
setTask
setParameter
sendMessage
addTool
removeTool
setInput
setOutput
```

Commands can define:

- scope
- target
- input parameters
- timing
- priority
- permissions
- runtime changes
- restrictions
- response behavior

Commands are intended for controlled runtime actions against an already valid project.

Structural changes such as rebuilding departments or organizational hierarchy should remain part of project or agent configuration rather than being silently performed through runtime commands.

Configured project commands can later be invoked through the Communications console.

---

# Analytics

Analytics provides a visual workspace for measuring project activity and results.

Possible analytics include:

- model usage
- token usage
- API usage
- tool usage
- project cost
- budgets
- task completion
- execution time
- error rates
- workload
- efficiency
- validation results
- accuracy

Analytics widgets are React components implemented in the application source code.

Projects can configure which available widgets should be displayed and which project data or outputs they should consume.

Conceptually:

```text
Project Data / Output
        ↓
Analytics Widget
        ↓
Calculation / Analysis
        ↓
Dashboard Visualization
```

Widget parameters can control both presentation and how calculations are performed.

Output and Analytics serve different purposes:

```text
Output
→ project artifacts

Analytics
→ components that calculate, interpret, or visualize project data
```

---

# Preferences

Preferences contains application-level settings.

These settings are independent of any individual project and remain available from the main navigation.

---

# Runtime Architecture

Agent Dashboard uses a single application runtime.

The Runtime layer exists to keep application state and API references organized without placing large amounts of state-management code directly inside `App.jsx`.

Conceptually:

```text
App
 ↓
Runtime
 ├── projects
 ├── active project
 ├── models
 ├── agents
 ├── tools
 ├── commands
 └── APIs
```

The runtime may expose state such as:

```text
projects
project
models
agents
tools
commands
analytics
```

and API helpers such as:

```text
projectApi
modelsApi
agentsApi
toolsApi
commandsApi
analyticsApi
```

Only the state and APIs currently needed by the application are implemented.

The runtime is not intended to dynamically construct different applications.

It is simply the shared application state and API layer.

Pages receive the specific runtime data or functions they need as the application is developed.

---

# Application Structure

The frontend is organized around application pages and shared infrastructure.

A simplified structure is:

```text
src/
├── Api/
├── Runtime/
├── Navigation/
│
├── Projects/
├── Operations/
├── Communications/
├── Output/
├── Agents/
├── Tools/
├── Commands/
├── Analytics/
├── Preferences/
│
├── Styles/
├── App.jsx
├── App.css
└── main.jsx
```

Each major page can contain:

- its page component
- page-specific child components
- toggles
- panels
- visualizers
- page-specific CSS

Shared code should only be moved into common folders when it is genuinely reused.

This keeps related code close together and avoids unnecessary architectural layers.

---

# Structured Agent Configuration

Agent Dashboard is intended to use structured data rather than relying entirely on large unstructured prompt files.

MongoDB documents can define things such as:

```text
Agent identity
Model
Tasks
Department
Tools
Permissions
Limits
Inputs
Outputs
Relationships
Parameters
```

Prompt templates can then use structured configuration to construct the final instructions supplied to an AI model.

Conceptually:

```text
Prompt Template
      +
Structured Agent Configuration
      ↓
Live Agent Prompt
```

This allows agent configuration to behave more like a set of defined properties than a collection of unrelated handwritten prompts.

Prompt templates can remain readable files while values such as limits, tools, task parameters, and model settings remain structured data.

For example:

```text
Prompts/
└── Research/
    ├── webResearch.md
    └── pdfReport.md
```

The exact prompt-building system will evolve as real provider integrations are added.

---

# Models

A model definition is not an agent.

Model definitions describe how an AI model can be used by the application.

A model may define:

- provider
- platform
- provider model identifier
- supported capabilities
- required credential configuration
- available API parameters
- parameter constraints
- context limits
- output limits
- supported input types
- supported output types
- usage restrictions
- suggested roles

Models are application-supported definitions rather than arbitrary user-created AI models.

They can be added or updated during development as supported providers and deployments are configured.

The model definition determines which options can be exposed when configuring an agent.

The agent then adds its project-specific:

- identity
- purpose
- tasks
- tools
- permissions
- relationships
- limits

## Model Identity

MongoDB provides the database identity:

```text
model._id
→ MongoDB ObjectId
```

A provider may also have its own model identifier:

```text
providerModelId
→ identifier expected by the AI provider
```

Agent references use the MongoDB model ID:

```text
agent.model.modelId
→ references model._id
```

This keeps database identity separate from provider-specific identifiers.

---

# Project Creation

Models are expected to exist before users configure projects and agents.

The intended project-building order is:

```text
1. Models already exist
        ↓
2. User creates Project
        ↓
   MongoDB creates project._id
        ↓
3. User creates Tools for that project
        ↓
   MongoDB creates tool._id values
        ↓
4. User creates Agent
        ↓
   selects existing model._id
   selects existing tool._id values
   uses existing project._id
        ↓
5. Agent is added
        ↓
6. Project stores agent._id
        ↓
7. Organization graph stores agent._id
```

This allows relationships to use real MongoDB ObjectIds rather than depending on user-visible names or manually generated unique keys.

Names remain primarily for display.

---

# Project Execution

Stored project configuration is inert until the project is opened and started.

Conceptually:

```text
Load Project
    ↓
Load Project Agents and Resources
    ↓
Start Project Team
    ↓
Operations
    ↓
Communications
    ↓
Output / Analytics
    ↓
Stop or Switch Project
```

Agents should not continue making API calls or consuming resources indefinitely after their project is stopped or replaced.

Scheduled work, background services, or multiple simultaneously active projects may be added later, but they should be explicit features rather than default behavior.

---

# Local-First Architecture

Agent Dashboard is currently designed to run primarily on the user's own device.

The application consists of:

```text
React / Vite Frontend
        ↓
Local Express Server
        ↓
MongoDB
        ↓
AI Providers / External Tools
```

The **frontend** renders the dashboard and user interfaces in the browser.

The **local server** manages database access, application API routes, credentials, and communication with services that should not be accessed directly from browser code.

**MongoDB** stores structured application data such as:

- projects
- models
- agents
- tools
- commands
- analytics configuration

External AI providers and services perform the compute-intensive work required by agents.

This allows the dashboard itself to remain relatively lightweight.

---

# API Structure

Frontend API helpers live in `src/Api`.

For example:

```text
src/Api/
├── axios.js
├── projectApi.js
└── modelsApi.js
```

Additional APIs can be added as their corresponding application features are implemented:

```text
agentsApi.js
toolsApi.js
commandsApi.js
analyticsApi.js
```

Resource APIs use a consistent CRUD vocabulary where appropriate:

```text
getAll()
get()
add()
update()
remove()
```

List routes can return lightweight documents for browsing and selection.

For example:

```text
projectApi.getAll()
→ lightweight project list

projectApi.get(_id)
→ complete project document
```

and:

```text
modelsApi.getAll()
→ lightweight model list

modelsApi.get(_id)
→ complete model definition
```

This avoids loading large documents until they are actually needed.

---

# Data and Database Setup

The repository contains a `Data` directory used to provide default development data.

Current data categories include:

```text
Data/
├── Projects/
├── Models/
├── Agents/
├── Tools/
├── Commands/
└── Analytics/
```

These JSON files are not the application's permanent runtime storage.

They provide structured starter data that can be inserted into MongoDB when setting up the repository.

The setup process maps folders to MongoDB collections:

```text
Data/Projects  → projects
Data/Models    → models
Data/Agents    → agents
Data/Tools     → tools
Data/Commands  → commands
Data/Analytics → analytics
```

The starter dataset currently provides a small research project containing:

- one project
- one supported AI model
- one research agent
- a Web Search tool
- a Code Interpreter tool

The research agent contains two sequential tasks:

```text
Research Request (.md)
        ↓
Research Task
        ↓
Markdown Research Report
        ↓
PDF Creation Task
        ↓
Styled PDF Report
```

This provides real structured data for developing and testing the application before all creation interfaces are complete.

---

# Bootstrap IDs

The starter JSON files initially use temporary bootstrap keys because MongoDB `_id` values do not exist before documents are inserted.

For example:

```text
projectKey
modelKey
agentKey
toolKey
```

These temporary keys are only used during initial database setup.

The setup process is:

```text
Data JSON
    ↓
npm run populate-db
    ↓
MongoDB creates _id values
    ↓
npm run backfill-ids
    ↓
References are replaced with MongoDB ObjectIds
    ↓
Temporary entity keys are removed
    ↓
Starter Research Project ready
```

After bootstrap, MongoDB `_id` values become the real identifiers.

Normal projects, agents, and tools created later through the application will receive MongoDB IDs during creation and therefore will not require the bootstrap backfill process.

Internal keys such as task, input, and output identifiers may still be used inside documents to connect parts of a task sequence.

These are different from database entity identity.

---

# Server

The local Express server lives in the `Server` directory.

Its responsibilities include or will include:

- connecting to MongoDB
- exposing application API routes
- reading and writing project data
- managing model data
- managing agent data
- managing tools
- managing commands
- managing analytics configuration
- communicating with AI providers
- controlling access to external services
- handling generated files
- supporting project execution

The frontend communicates with the backend through `/api` routes.

During local development, Vite proxies `/api` requests to the Express server.

The server is intentionally lightweight and can grow as real agent integrations are implemented.

---

# Credentials and Secrets

Secrets should not be stored in repository JSON files.

Sensitive values such as:

- MongoDB credentials
- AI provider API keys
- external service keys
- private service credentials

should remain under server control.

During local development these can be supplied using environment variables.

For example:

```env
MONGO_URI=...
DB_NAME=...
AZURE_OPENAI_BASE_URL=...
AZURE_OPENAI_API_KEY=...
AZURE_OPENAI_DEPLOYMENT_NAME=...
```

Agent and model documents may describe which credentials or connections they require without storing the secret values themselves.

Agents should interact with protected services through authorized server functionality rather than being given unrestricted access to raw credentials.

---

# Permissions and Guardrails

Agents should not automatically receive unrestricted access to every tool, resource, or other agent.

Configuration may eventually control:

- which tools an agent can use
- which tools individual tasks can use
- which operations a tool permits
- which resources an agent can read
- which resources an agent can modify
- which agents can communicate
- which agents can delegate work
- who can request work from whom
- token limits
- request limits
- tool-use limits
- execution limits
- budget limits
- priority rules

These controls are important for predictable behavior, resource usage, and cost.

---

# Example Uses

Agent Dashboard is intended to support many different kinds of agent organizations.

Possible uses include:

- software development
- research and news analysis
- business operations
- data analysis
- architecture
- urban planning
- document processing
- technical research
- reporting and monitoring
- database maintenance
- infrastructure management
- content production

Different projects can use different combinations of:

- agents
- models
- departments
- tools
- tasks
- inputs
- outputs
- commands
- analytics

without changing the core application architecture.

If a substantially different application is needed, the repository can be cloned and adapted rather than requiring one running application to dynamically transform itself into several unrelated systems.

---

# Development Status

Agent Dashboard is in active early development.

The application currently has:

- React and Vite frontend
- static application routing
- page-based source organization
- shared application runtime
- Projects page
- Operations layout
- Communications layout
- Output workspace layout
- Agents configuration layout
- Tools configuration layout
- Commands configuration layout
- Analytics workspace layout
- Preferences page
- local Express backend
- MongoDB connectivity
- database population script
- MongoDB ID backfill script
- project API foundations
- model API foundations
- starter research project data
- starter model definition
- starter research agent
- Web Search tool definition
- Code Interpreter tool definition

Development is intentionally incremental.

The next stages involve bringing the existing pages to life using real database data, completing project and tool creation interfaces, building agent configuration, and connecting the first live AI provider integration.

---

# Running Locally

## Requirements

Install:

- [Node.js](https://nodejs.org/)
- access to a MongoDB database

MongoDB Atlas can be used if a local MongoDB installation is not available.

Agent Dashboard uses MongoDB for structured project, model, agent, tool, command, and analytics data.

The repository includes starter JSON data and setup scripts that create a working development project in a fresh database.

## 1. Clone the Repository

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd agent-dashboard
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure MongoDB

Create a MongoDB database and obtain its connection URI.

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_uri
DB_NAME=your_database_name
PORT=3000
```

`PORT` defines the local Express backend port.

Do not commit `.env`, database credentials, API keys, or other secrets to the repository.

## 4. Populate the Database

Run:

```bash
npm run populate-db
```

This reads the starter JSON files inside `Data/` and inserts them into their corresponding MongoDB collections.

For example:

```text
Data/Projects  → projects
Data/Models    → models
Data/Agents    → agents
Data/Tools     → tools
Data/Commands  → commands
Data/Analytics → analytics
```

The starter files use temporary bootstrap keys because MongoDB `_id` values do not exist until the documents have been inserted.

## 5. Backfill MongoDB IDs

After population completes, run:

```bash
npm run backfill-ids
```

This resolves the temporary relationships between the starter documents, replaces their bootstrap references with real MongoDB ObjectIds, and removes the temporary entity keys.

Conceptually:

```text
Data JSON
    ↓
npm run populate-db
    ↓
MongoDB creates _id values
    ↓
npm run backfill-ids
    ↓
Project, Model, Agent, and Tool references use MongoDB IDs
    ↓
Starter Research Project ready
```

The included starter data provides a small web-research project with a configured model, research agent, Web Search tool, and Code Interpreter tool.

It exists primarily to provide real structured data for developing and testing the dashboard.

The bootstrap scripts are intended for initializing a fresh development database.

Projects, agents, and tools created later through the application will already have MongoDB IDs available and will not require this backfill process.

## 6. Start the Backend

In one terminal:

```bash
npm run server
```

The Express server connects to MongoDB and exposes the local application API.

By default:

```text
http://localhost:3000
```

## 7. Start the Frontend

In another terminal:

```bash
npm run dev
```

Vite starts the React development application.

The frontend uses the local `/api` proxy to communicate with the Express backend.

## Other Commands

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

---

# Hosting

Agent Dashboard is currently local-first and does not require a hosted deployment.

The architecture can later support a hosted frontend and backend if remote access becomes useful.

A possible deployment could use:

```text
Vercel
→ frontend

Render
→ backend

MongoDB
→ database
```

Hosting decisions are intentionally secondary to building and testing the application locally.

---

# Guiding Principle

Agent Dashboard is not intended to replace the AI providers, APIs, databases, or programs used by agents.

It is the layer that organizes and controls them.

```text
User
 ↓
Agent Dashboard
 ↓
Project
 ↓
Agent Organization
 ↓
Agents
 ↓
Tasks
 ↓
Tools and Services
 ↓
Outputs and Analytics
```

The goal is to provide a structured interface for understanding, configuring, directing, and monitoring a team of software agents from one place.