import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toogle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const toogleMenu = () => {
    setToggle(toogle === "" ? "on" : "");
    setMenu(menu === "" ? "show" : "");
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    localStorage.removeItem("loginId");
    localStorage.removeItem("AdminLogId");
    localStorage.removeItem("preffered_hours");
    localStorage.removeItem("workingHours");
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className={`navbar-toggler ${toogle}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toogleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapsed ${menu}`} id="navbarToggleExternalContent">
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 align-items-center`}>
            <li className="nav-item">
              <h4 className="m-0">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </h4>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
