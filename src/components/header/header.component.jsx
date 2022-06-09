import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "./header.styles.css";

import MyLogo from "../../assets/personal logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { auth } from "../../firebase/firebase.utils";
const Header = (props) => {
  const [isNavExp, setNavExp] = useState(false);
  return (
    <nav className="header">
      <Link
        to="/"
        className="logo-container"
        onClick={() => {
          setNavExp(false);
        }}
      >
        {/* <MyLogo className="logo" /> */}
        <img src={MyLogo} alt="logo" className="logo" />
        <div className="logo-title">SFS</div>
      </Link>

      {/* <div className="links">
        <Link className="option" to="/about">
          ABOUT ME
        </Link>
        <Link className="option" to="/projects">
          PROJECTS
        </Link>
        <Link className="option" to="/contact">
          CONTACTS
        </Link>
      </div> */}
      <button
        className="hamburger"
        onClick={() => {
          setNavExp(!isNavExp);
        }}
      >
        <FontAwesomeIcon icon={faBars} color="rgb(0,214,255)" />
      </button>
      <div
        className={isNavExp ? "nav-menu expanded" : "nav-menu"}
        onClick={() => {
          setNavExp(false);
        }}
      >
        <ul>
          <li>
            <Link className="option" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="option" to="/about">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link className="option" to="/projects">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="option" to="/documents">
              DOCUMENTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
