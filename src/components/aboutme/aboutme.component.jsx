import React from "react";
import "./aboutme.styles.scss";
import "../../custom.scss";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AboutMe = (props) => {
  return (
    <section id="aboutme" className="aboutme child">
      <h1 className="mt-5">Programming Since 13</h1>
      <p className="mt-5">
        I am a <span>Computer Science</span> and{" "}
        <span>Applied Math/Statistics</span> student at Stony Brook University
        expecting to graduate in <span>Fall 2023</span> and have been
        programming since the age of 13. My hobbies include <span>Biking</span>,{" "}
        <span>Tinkering</span> with Electronics, and playing{" "}
        <span>Video Games</span>. I am currently seeking a{" "}
        <span>Software Engineering Internship</span> in the NYC area.
      </p>
      <a href="#featuredprojects" className="mt-5">
        <Button variant="outline-primary" size="lg">
          View My Projects
        </Button>
      </a>
    </section>
  );
};

export default AboutMe;
