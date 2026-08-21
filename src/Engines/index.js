import { GeneralEngine } from './General/engine.js'

const ENGINE_REGISTRY = {
  general: GeneralEngine,
}

export function getEngine(engineKey) {
  return ENGINE_REGISTRY[engineKey] ?? null
}

export function getEngineList() {
  return Object.values(ENGINE_REGISTRY).map((engine) => ({
    key: engine.key,
    label: engine.label,
  }))
}