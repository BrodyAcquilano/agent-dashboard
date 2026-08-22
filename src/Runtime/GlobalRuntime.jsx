import {
  useMemo,
  useState,
} from "react";

import { projectApi } from "../Api/projectApi.js";

export function useGlobalRuntime() {
  const [
    projects,
    setProjects,
  ] = useState([]);

  const [
    project,
    setProject,
  ] = useState(null);

  const engineKey =
    project?.engineKey ?? null;

  const apis = useMemo(
    () => ({
      projectApi,
    }),
    [],
  );

  return {
    projects,
    setProjects,

    project,
    setProject,

    engineKey,

    apis,
  };
}