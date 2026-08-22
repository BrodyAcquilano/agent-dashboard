import { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router";

import Header from "./Navigation/Header.jsx";

import Projects from "./Projects/Projects.jsx";
import Preferences from "./Preferences/Preferences.jsx";

import Operations from "./Operations/Operations.jsx";
import Communications from "./Communications/Communications.jsx";
import Output from "./Output/Output.jsx";
import Agents from "./Agents/Agents.jsx";
import Tools from "./Tools/Tools.jsx";
import Commands from "./Commands/Commands.jsx";
import Analytics from "./Analytics/Analytics.jsx";

import { useRuntime } from "./Runtime/Runtime.jsx";

import "./App.css";

function App() {
  const runtime = useRuntime();

  // ─────────────────────────────────────────────
  // Load Initial Application Data
  // ─────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    async function loadInitialData() {
      // ─────────────────────────────
      // Lightweight Projects + Models
      // ─────────────────────────────

      const [projectResponse, modelResponse] = await Promise.all([
        runtime.apis.projectApi.getAll(),
        runtime.apis.modelsApi.getAll(),
      ]);

      if (cancelled) return;

      const projectList = projectResponse.data || [];

      const modelList = modelResponse.data || [];

      runtime.setProjects(projectList);

      runtime.setModels(modelList);

      if (modelList.length === 0) {
        console.log(modelResponse.message || "No models found.");
      }

      if (projectList.length === 0) {
        console.log(projectResponse.message || "No projects found.");

        return;
      }

      // ─────────────────────────────
      // Full Initial Project
      // ─────────────────────────────

      const { data: loadedProject } = await runtime.apis.projectApi.get(
        projectList[0]._id,
      );

      if (cancelled) return;

      if (!loadedProject) {
        console.log("Failed to load project.");

        return;
      }

      runtime.setProject(loadedProject);
    }

    loadInitialData();

    return () => {
      cancelled = true;
    };
  }, [
    runtime.apis.projectApi,
    runtime.apis.modelsApi,
    runtime.setProjects,
    runtime.setModels,
    runtime.setProject,
  ]);

  return (
    <div className="app">
      <Header />

      <main className="main-layer">
        <Routes>
          <Route path="/" element={<Projects />} />

          <Route path="/operations" element={<Operations />} />

          <Route path="/communications" element={<Communications />} />

          <Route path="/output" element={<Output />} />

          <Route path="/agents" element={<Agents />} />

          <Route path="/tools" element={<Tools />} />

          <Route path="/commands" element={<Commands />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/preferences" element={<Preferences />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
