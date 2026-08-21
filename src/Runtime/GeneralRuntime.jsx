export function useGeneralRuntime({ project }) {
  const isActive = project?.engineKey === 'general'

  return {
    isActive,
  }
}