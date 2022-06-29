import React from "react";
import "../../custom.scss";
import "./socials.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { auth } from "../../firebase/firebase.utils";

import { Nav, Navbar, Container } from "react-bootstrap";

const Socials = (props) => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant=""
        fixed="bottom"
        expand="xs"
        className="socials w-10"
      >
        <Container fluid className="justify-content-start">
          <Nav>
            <Nav.Item className="text-center px-2">
              <Nav.Link href="https://github.com/SoroushSemer">
                <FontAwesomeIcon className="social" icon={faGithub} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center px-2">
              <Nav.Link href="https://www.linkedin.com/in/soroush-semerkant/">
                <FontAwesomeIcon className="social" icon={faLinkedin} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center px-2">
              <Nav.Link href="https://app.joinhandshake.com/stu/users/26889479">
                <FontAwesomeIcon className="social" icon={faHandshake} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text-center px-2">
              <Nav.Link href="mailto:soroushsemer@gmail.com">
                <FontAwesomeIcon className="social" icon={faEnvelope} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="dark" fixed="bottom" expand="xs" className="created-in-bar">
        <Container fluid className="justify-content-end">
          <code className="created-in text-primary">
            Created using FERN Stack
          </code>
        </Container>
      </Navbar>
    </div>
  );
};

export default Socials;
