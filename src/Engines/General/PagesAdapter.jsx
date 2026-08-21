import { Route } from 'react-router'

import Team from '../../Workflows/Team.jsx'
import Setup from '../../Workflows/Setup.jsx'
import Output from '../../Workflows/Output.jsx'
import Preferences from '../../Workflows/Preferences.jsx'

export function getPagesConfig() {
  return [
    {
      key: 'team',
      path: 'team',
      label: 'Team',
    },
    {
      key: 'setup',
      path: 'setup',
      label: 'Setup',
    },
    {
      key: 'output',
      path: 'output',
      label: 'Output',
    },
    {
      key: 'preferences',
      path: 'preferences',
      label: 'Preferences',
    },
  ]
}

export function PagesAdapter({runtime}) {
  return (
    <>
      <Route
        path="/team"
        element={<Team />}
      />

      <Route
        path="/setup"
        element={<Setup />}
      />

      <Route
        path="/output"
        element={<Output />}
      />

      <Route
        path="/preferences"
        element={<Preferences />}
      />
    </>
  )
}