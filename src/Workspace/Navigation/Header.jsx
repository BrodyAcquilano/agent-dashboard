import { NavLink } from 'react-router'

import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        Agent Dashboard
      </div>

      <nav className="header-navigation">
        <NavLink to="/team">
          Team
        </NavLink>

        <NavLink to="/setup">
          Setup
        </NavLink>

        <NavLink to="/output">
          Output
        </NavLink>

        <NavLink to="/preferences">
          Preferences
        </NavLink>
      </nav>
    </header>
  )
}

export default Header