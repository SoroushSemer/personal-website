import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../../custom.scss";
import "../../index.scss";
import "../../custom.scss";
import "./featuredprojectmenu.styles.css";

import MenuItem from "../menuitem/menuitem.component";
import { Link } from "react-router-dom";

const projectsJSON = require("../../assets/projects.json");

import { getProjects } from "../../utils/firebase/firebase.utils";

class FeaturedProjectMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: {},
    };
  }
  componentDidMount() {
    const getProjectMap = async () => {
      const projectMap = await getProjects(this.state.language, false);
      console.log(projectMap);
      this.setState({ projects: projectMap });
    };
    getProjectMap();
  }
  render() {
    return (
      <section id="featuredprojects" className="featuredprojects">
        <Container fluid="lg">
          <Row>
            <h1>Featured Projects</h1>
          </Row>
          <Row className="d-flex my-5 justify-content-evenly">
            {Object.keys(this.state.projects)
              .filter((a) => this.state.projects[a].featured)
              .map((title) => {
                return (
                  <Col xs={12} md={6} lg={4} key={title}>
                    <MenuItem title={title} {...this.state.projects[title]} />
                  </Col>
                );
              })}
          </Row>
          <Row>
            <Link to="/projects">
              <Button variant="outline-primary" size="lg" className="mb-5">
                <span>More Projects</span>
              </Button>
            </Link>
          </Row>
        </Container>
      </section>
    );
  }
}
export default FeaturedProjectMenu;
