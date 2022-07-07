import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Spinner,
  Carousel,
} from "react-bootstrap";
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
      projects: null,
    };
  }
  componentDidMount() {
    const getProjectMap = async () => {
      const projectMap = await getProjects();
      console.log(projectMap);
      this.setState({ projects: projectMap });
    };
    getProjectMap();
  }
  render() {
    return (
      <section id="featuredprojects" className="featuredprojects child">
        <Container fluid="lg" className="mt-5">
          <Row className="mt-5">
            <h1>Featured Projects</h1>
          </Row>
          <Row className="d-none d-lg-flex my-5 justify-content-evenly">
            {this.state.projects != null ? (
              Object.keys(this.state.projects)
                .filter((a) => this.state.projects[a].featured)
                .map((title) => {
                  return (
                    <Col xs={12} md={6} lg={4} key={title}>
                      <MenuItem title={title} {...this.state.projects[title]} />
                    </Col>
                  );
                })
            ) : (
              <Spinner animation="border" variant="primary" />
            )}
          </Row>
          <Row className="d-flex d-lg-none my-5 justify-content-evenly">
            <Carousel className="project-carousel">
              {this.state.projects != null ? (
                Object.keys(this.state.projects)
                  .filter((a) => this.state.projects[a].featured)
                  .map((title) => {
                    return (
                      <Carousel.Item xs={12} md={6} lg={4} key={title}>
                        <MenuItem
                          title={title}
                          {...this.state.projects[title]}
                        />
                      </Carousel.Item>
                    );
                  })
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </Carousel>
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
