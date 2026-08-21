import { useGlobalRuntime } from './GlobalRuntime.jsx'
import { useGeneralRuntime } from './GeneralRuntime.jsx'

export function useAllRuntime() {
  const global = useGlobalRuntime()

  const general = useGeneralRuntime({
    project: global.project,
  })

  return {
    global,
    general,
  }
}