import { useState } from "react";
import { NavLink } from "react-router";

import "./Header.css";

function Header({ pagesConfig = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-title">
        Agent Dashboard
      </div>

      <button
        type="button"
        className="header-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="header-navigation"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <nav
        id="header-navigation"
        className={`header-navigation ${menuOpen ? "open" : ""}`}
        aria-label="Navigation"
      >
        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          Projects
        </NavLink>

        {pagesConfig.map(({ key, path, label }) => (
          <NavLink
            key={key}
            to={`/${path}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}

        <NavLink
          to="/preferences"
          onClick={closeMenu}
        >
          Preferences
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;