import React, { useEffect } from "react";
import "../../custom.scss";
import "./projectspagemenu.styles.css";

import MenuItem from "../menuitem/menuitem.component";

import { Row, Col, Container, Button } from "react-bootstrap";

import { getProjects } from "../../utils/firebase/firebase.utils";

const projectsJSON = require("../../assets/projects.json");

class ProjectsPageMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "",
      projects: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.getProjectMap = this.getProjectMap.bind(this);
    this.getProjectMap();
  }
  getProjectMap = async () => {
    const projectMap = await getProjects(this.state.language, false);
    console.log(projectMap);
    this.setState({ projects: projectMap });
  };
  handleClick = (lang) => {
    if (this.state.language != lang) {
      this.setState({ language: lang });
      this.getProjectMap();
    } else {
      this.setState({ language: "" });
      this.getProjectMap();
    }
  };

  render() {
    return (
      <Container
        fluid
        className="d-flex flex-wrap align-items-center justify-content-center mt-5"
      >
        <Row
          className="w-100 mb-5 align-items-center"
          style={{ color: "white", maxWidth: "1000px" }}
        >
          {projectsJSON.languages.map((language) => {
            return (
              <Col className="mb-3">
                <Button
                  variant={
                    this.state.language == language
                      ? "primary"
                      : "outline-primary"
                  }
                  onClick={() => this.handleClick(language)}
                >
                  {language}
                </Button>
              </Col>
            );
          })}
          <Col className="mb-3">
            <Button
              variant={
                this.state.language != "" ? "secondary" : "outline-secondary"
              }
              onClick={() => this.handleClick("")}
            >
              Clear Filter
            </Button>
          </Col>
        </Row>
        <Row
          style={{ maxWidth: "2000px" }}
          className="w-100 justify-content-center"
        >
          {
            Object.keys(this.state.projects)
              .filter((project) =>
                this.state.language
                  ? this.state.projects[project].language.includes(
                      this.state.language
                    )
                  : true
              )
              .map((title) => {
                return (
                  <Col xs={12} md={6} lg={4} xxl={3} className="mb-4 ">
                    <MenuItem
                      key={title}
                      title={title}
                      {...this.state.projects[title]}
                    />
                  </Col>
                );
              })

            // .sort((a, b) => (new Date(a.date) - new Date(b.date)) * -1)
          }
        </Row>
      </Container>
    );
  }
}
export default ProjectsPageMenu;
