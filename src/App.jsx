import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router";

import Header from "./Workspace/Navigation/Header.jsx";
import Projects from "./Workspace/Projects/Projects.jsx";
import Preferences from "./Workspace/Preferences/Preferences.jsx";

import { useAllRuntime } from "./Runtime/index.js";
import { getEngine } from "./Engines/index.js";

import "./App.css";

function App() {
  const allRuntime =
    useAllRuntime();

  const global =
    allRuntime.global;

  const engineRuntime =
    global.engineKey
      ? allRuntime[global.engineKey]
      : {};

  const runtime = {
    ...global,
    ...engineRuntime,

    apis: {
      ...global.apis,
      ...(engineRuntime.apis || {}),
    },
  };

  const engine =
    runtime.engineKey
      ? getEngine(runtime.engineKey)
      : null;

  // ─────────────────────────────────────────────
  // 1. Load Projects + Initial Project
  // ─────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    async function loadInitialProject() {
      const {
        data: projectList,
      } =
        await global.apis.projectApi.getAll();

      if (cancelled) return;

      global.setProjects(projectList);

      if (projectList.length === 0) {
        console.log(
          "No projects found.",
        );

        return;
      }

      const {
        data: loadedProject,
      } =
        await global.apis.projectApi.get(
          projectList[0]._id,
        );

      if (
        cancelled ||
        !loadedProject
      ) {
        return;
      }

      global.setProject(
        loadedProject,
      );
    }

    loadInitialProject();

    return () => {
      cancelled = true;
    };
  }, [
    global.apis.projectApi,
    global.setProjects,
    global.setProject,
  ]);

  const pagesConfig =
    engine?.getPagesConfig?.() || [];

  return (
    <div className="app">
      <Header
        pagesConfig={pagesConfig}
      />

      <main className="main-layer">
        {engine?.AppAdapter && (
          <engine.AppAdapter
            runtime={runtime}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<Projects />}
          />

          {engine?.PagesAdapter?.({
            runtime,
          })}

          <Route
            path="/preferences"
            element={
              <Preferences />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;