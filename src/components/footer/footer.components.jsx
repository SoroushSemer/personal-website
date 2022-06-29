import React from "react";
import "./footer.styles.css";
import "../../custom.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { auth } from "../../firebase/firebase.utils";

import { Nav, Navbar, Container } from "react-bootstrap";

const Footer = (props) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" }}
      >
        <code>
          © 2022 Copyright:
          <a href="https://soroush.pro/"> soroush.pro</a>
        </code>
      </div>
    </footer>
  );
};

export default Footer;
