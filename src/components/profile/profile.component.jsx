import React from "react";
import "../../index.scss";
import "./profile.styles.scss";

import { Link } from "react-router-dom";

import { Container, Stack, Button, Image } from "react-bootstrap";

const Profile = (props) => {
  return (
    <section className="profile">
      {/* <Link className="profile-content" to="/about">
        <div
          className="profile-pic"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        ></div>
        <h1 className="profile-text">{props.text}</h1>
      </Link>
      <Link className="profile-position" to="/about">
        <h2 className="position-text">{props.position}</h2>
      </Link>

      <Link className="outlined-button" to="/about">
        <span>LEARN ABOUT ME</span>
      </Link> */}

      <Container className="d-md-flex justify-content-start h-100">
        {/* <Row md="auto" className="justify-content-center mt-5">
          <Link className="profile-content" to="/about">
            <div
              className="profile-pic"
              style={{
                backgroundImage: `url(${props.imageUrl})`,
              }}
            ></div>
            <h1 className="profile-text">{props.text}</h1>
          </Link>
        </Row>
        <Row xs={4} className="justify-content-center mt-5">
          <Link to="/about">
            <Button variant="outline-secondary" size="lg">
              {props.position}
            </Button>
          </Link>
        </Row>
        <Row xs={4} className="justify-content-center mt-5">
          <Link to="/about">
            <Button variant="outline-primary" size="lg">
              Learn About Me
            </Button>
          </Link>
        </Row> */}
        <Stack className="align-items-center justify-content-center">
          <a className="profile-content w-auto mb-4" href="#aboutme">
            <div
              className="profile-pic"
              style={{
                backgroundImage: `url(${props.imageUrl})`,
              }}
            ></div>
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
