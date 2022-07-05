import React, { useEffect, useState } from "react";
import "./projectpage.styles.scss";
import "../../custom.scss";
import { useParams } from "react-router-dom";

import { getProject } from "../../utils/firebase/firebase.utils";

import { Card, Carousel, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = (props) => {
  const params = useParams();
  const [project, setProject] = useState([]);
  //   console.log(params);
  useEffect(() => {
    const getProjectMap = async () => {
      const projectMap = await getProject(parseInt(params.id));
      console.log(projectMap);
      setProject(projectMap);
    };
    getProjectMap();
  }, []);

  return (
    <div className="projectpage">
      <Card bg="" className="">
        <Card.Header as="h1" className="text-primary text-center">
          {project.title}
        </Card.Header>
        <Row xs={1} xl={2} className="px-5 py-3">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={project.imageUrl} />
                <Carousel.Caption className="text-secondary">
                  First Image
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={project.imageUrl} />
                <Carousel.Caption>Second Image</Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Text>{}</Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Text className="text-white">
              <h3 className="text-secondary">Description:</h3>
              <p>{project.description}</p>
              <h5 className="text-secondary">
                The goal of this project was to gain an understanding of:
              </h5>
              {/* <ul>
                {project.goals.map((goal) => {
                  return <li>{goal}</li>;
                })}
              </ul> */}
            </Card.Text>
          </Col>
        </Row>
        <Card.Footer>
          <Row>
            <Col className="text-start d-flex align-items-center">
              <code className="text-start">
                Created:{" "}
                {/* {new Date(project.date["seconds"] * 1000).toLocaleString()} */}
              </code>
            </Col>
            <Col className="text-end">
              <a
                href={project.githubLink}
                className="project-link text-primary px-3"
              >
                <FontAwesomeIcon className="project-link" icon={faGithub} />
              </a>
              <a
                href={project.linkUrl}
                className="project-link text-primary px-3"
              >
                <FontAwesomeIcon
                  className="project-link"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProjectPage;
