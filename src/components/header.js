import * as React from "react";
import { Link } from "gatsby";

import "./header.css";

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg fixed-top ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Amanda Lynn Media
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/page-2.js"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`
              }}
            >
              Page 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
