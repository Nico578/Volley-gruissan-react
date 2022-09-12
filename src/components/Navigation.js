import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <img src="./logo.png" alt="logo du club" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Accueil
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <div
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Les équipes
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/nationale3" className="dropdown-item">
                      Nationale III
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/prenationale" className="dropdown-item">
                      Prénationale
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/regionale" className="dropdown-item">
                      Régionale
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/partenaires" className="nav-link">
                  Partenaires
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
