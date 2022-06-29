import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import "./header.styles.css";

import MyLogo from "../../assets/personal logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { auth } from "../../firebase/firebase.utils";

import { Nav, Navbar, Container } from "react-bootstrap";
import "../../custom.scss";

const Header = (props) => {
  const [isNavExp, setNavExp] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="p-3">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            src={MyLogo}
            alt="logo"
            className="logo"
            width="50"
            height="50"
          />{" "}
          Soroush Semerkant
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end flex-grow-1 pe-3 w-100">
            <Link to="/" className="nav-link mx-2">
              Home
            </Link>
            <Link to="/experience" className="nav-link mx-2">
              Experience
            </Link>
            <Link to="/projects" className="nav-link mx-2">
              Projects
            </Link>
            <Nav.Link
              href="/Soroush Semerkant Resume.pdf"
              download
              className="mx-2"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
