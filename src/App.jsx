import { Navigate, Route, Routes } from 'react-router'

import Header from './Workspace/Navigation/Header.jsx'

import Team from './Workflows/Team.jsx'
import Setup from './Workflows/Setup.jsx'
import Output from './Workflows/Output.jsx'
import Preferences from './Workflows/Preferences.jsx'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-layer">
        <Routes>
          <Route path="/" element={<Navigate to="/team" replace />} />

          <Route path="/team" element={<Team />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/output" element={<Output />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
