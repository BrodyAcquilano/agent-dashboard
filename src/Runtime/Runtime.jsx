import {
  useMemo,
  useState,
} from "react";

import { projectApi } from "../Api/projectApi.js";
import { modelsApi } from "../Api/modelsApi.js";

export function useRuntime() {
  const [
    projects,
    setProjects,
  ] = useState([]);

  const [
    project,
    setProject,
  ] = useState(null);

  const [
    models,
    setModels,
  ] = useState([]);

  const apis = useMemo(
    () => ({
      projectApi,
      modelsApi,
    }),
    [],
  );

  return {
    projects,
    setProjects,

    project,
    setProject,

    models,
    setModels,

    apis,
  };
}