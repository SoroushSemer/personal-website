import React, { useEffect } from "react";
import "./experiencepage.styles.css";
import "../../custom.scss";

import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "../../components/menuitem/menuitem.component";
import { getExperience } from "../../utils/firebase/firebase.utils";

const experienceJSON = require("../../assets/experience.json");

const ExperiencePage = (props) => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const getExperiences = async () => {
      const exp = await getExperience();
      setExperience(exp);
    };
    getExperiences();
    console.log(experience);
  }, []);

  return (
    <div className="experiencepage">
      <h1>My Experience</h1>
      <Container fluid>
        <Row>
          {experience.map((exp) => {
            return (
              <div key={exp.title}>
                <hr className="text-secondary"></hr>
                <Row>
                  <Col>
                    <h3 className="text-primary">{exp.title}</h3>
                  </Col>
                  <Col className="text-end">
                    {" "}
                    <p className="text-secondary">
                      {exp.start} - {exp.end}
                    </p>
                  </Col>
                </Row>

                <p className="text-secondary">
                  {exp.position}{" "}
                  <span className="text-white font-weight-light">
                    {" "}
                    - {exp.description}
                  </span>
                </p>

                <ul>
                  {exp.achievements.map((achievement) => {
                    return <li key={achievement}>{achievement}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ExperiencePage;
