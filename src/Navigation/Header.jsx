import { useState } from "react";
import { NavLink } from "react-router";

import "./Header.css";

function Header() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

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
        onClick={() =>
          setMenuOpen(
            (prev) => !prev,
          )
        }
      >
        ☰
      </button>

      <nav
        id="header-navigation"
        className={`header-navigation ${
          menuOpen ? "open" : ""
        }`}
        aria-label="Navigation"
      >
        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          Projects
        </NavLink>

        <NavLink
          to="/operations"
          onClick={closeMenu}
        >
          Operations
        </NavLink>

        <NavLink
          to="/communications"
          onClick={closeMenu}
        >
          Communications
        </NavLink>

        <NavLink
          to="/output"
          onClick={closeMenu}
        >
          Output
        </NavLink>

        <NavLink
          to="/agents"
          onClick={closeMenu}
        >
          Agents
        </NavLink>

        <NavLink
          to="/tools"
          onClick={closeMenu}
        >
          Tools
        </NavLink>

        <NavLink
          to="/commands"
          onClick={closeMenu}
        >
          Commands
        </NavLink>

        <NavLink
          to="/analytics"
          onClick={closeMenu}
        >
          Analytics
        </NavLink>

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