import { useMemo } from "react";

import { modelsApi } from "../Api/modelsApi.js";

/*
import { agentsApi } from "../Api/agentsApi.js";
import { toolsApi } from "../Api/toolsApi.js";
import { commandsApi } from "../Api/commandsApi.js";
import { analyticsApi } from "../Api/analyticsApi.js";
*/ 

export function useGeneralRuntime({
  project,
}) {
  const isActive =
    project?.engineKey === "general";

  const engineApi = useMemo(
    () => ({
      modelsApi,
    }),
    [],
  );

  /*
    const engineApi = useMemo(
    () => ({
      modelsApi,
      agentsApi,
      toolsApi,
      commandsApi,
      analyticsApi,
    }),
    [],
  );
   */

  const apis = useMemo(
    () => ({
      engineApi,
    }),
    [engineApi],
  );

  return {
    isActive,

    apis,
  };
}