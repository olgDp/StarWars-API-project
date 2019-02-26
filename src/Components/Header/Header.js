import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ location }) => {
  return (
    <section className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {location.pathname === "/" ? (
          <span className="navbar-brand">STAR WARS API PROJECT</span>
        ) : (
          <Link to="/" className="navbar-brand">
            STAR WARS API PROJECT
          </Link>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/people/" className="nav-link">
                People <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets/" className="nav-link">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/starships/" className="nav-link">
                Starships
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/secretpage" className="nav-link">
                Secret page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
