//props are properties and they are like arguments
//rfc -->   this is a rfc example
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  //states
  const [isDarkMode, setThemeValue] = useState(false);

  //dark mode button click
  const toggleTheme = () => {
    setThemeValue(!isDarkMode);
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          isDarkMode ? "dark" : "light"
        } bg-${isDarkMode ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.headerTitle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-light" onClick={toggleTheme}>
                {isDarkMode ? "Dark Mode Navbar" : "Light Mode Navbar"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
Header.prototype = { headerTitle: PropTypes.string.isRequired };
Header.defaultProps = { headerTitle: "Header Title" };
