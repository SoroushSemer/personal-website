import React from "react";
import "./experiencepage.styles.css";
import "../../custom.scss";

import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "../../components/menuitem/menuitem.component";

const experienceJSON = require("../../assets/experience.json");

const ExperiencePage = (props) => {
  return (
    <div className="experiencepage">
      <h1>My Experience</h1>
      <Container fluid>
        <Row>
          {experienceJSON.experience.map((experience) => {
            return (
              <div>
                <hr className="text-secondary"></hr>
                <Row>
                  <Col>
                    <h3 className="text-primary">{experience.title}</h3>
                  </Col>
                  <Col className="text-end">
                    {" "}
                    <p className="text-secondary">
                      {experience["start-date"]} - {experience["end-date"]}
                    </p>
                  </Col>
                </Row>

                <p className="text-secondary">{experience.position}</p>

                <ul>
                  {experience.achievements.map((achievement) => {
                    return <li>{achievement}</li>;
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
