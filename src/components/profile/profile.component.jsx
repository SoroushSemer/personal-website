import React from "react";
import "../../index.scss";
import "./profile.styles.scss";

import { Link } from "react-router-dom";

import { Container, Stack, Button, Image } from "react-bootstrap";

const Profile = (props) => {
  return (
    <section className="profile child">
      <Container className="d-md-flex justify-content-start h-100 mt-5">
        <Stack className="align-items-center justify-content-center mt-5">
          <a className="profile-content w-auto mb-4" href="#aboutme">
            <img
              className="profile-pic"
              src="profile_pic.jfif"
              onError={(event) => (event.target.style.display = "none")}
            />
            <h1 className="profile-text justify-content-center">
              {props.text}
            </h1>
          </a>

          <Link to="/experience" className="position-text secondary my-5">
            {props.position}
          </Link>
          <a href="#aboutme" className="mt-5">
            <Button variant="outline-primary" size="lg">
              Learn About Me
            </Button>
          </a>

          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </Stack>
      </Container>
    </section>
  );
};
export default Profile;
