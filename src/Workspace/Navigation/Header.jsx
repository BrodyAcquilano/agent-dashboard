import { NavLink } from 'react-router'

import './Header.css'

function Header({ pagesConfig = [] }) {
  return (
    <header className="header">
      <div className="header-title">
        Agent Dashboard
      </div>

      <nav className="header-navigation">
        {pagesConfig.map(({ key, path, label }) => (
          <NavLink
            key={key}
            to={`/${path}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header