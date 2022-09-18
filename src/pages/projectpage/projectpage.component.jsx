import React, { useEffect, useState } from "react";
import "./projectpage.styles.scss";
import "../../custom.scss";
import { useParams } from "react-router-dom";

import { getProject } from "../../utils/firebase/firebase.utils";

import { Card, Carousel, Row, Col, Spinner } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = (props) => {
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // console.log(params.id);
    const getProjects = async () => {
      const exp = await getProject(parseInt(params.id));
      setProject(exp);
    };
    getProjects();
  }, []);

  // console.log(project);

  return (
    <div className="projectpage text-white">
      {project != null ? (
        <Card bg="" className="">
          <Card.Header as="h1" className="text-primary text-center">
            {project.title}
          </Card.Header>
          <Row xs={1} xl={2} className="px-5 py-3">
            <Col>
              {project.imageUrl.length > 1 ? (
                <Carousel variant="dark">
                  {project.imageUrl.map((image, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img className="d-block w-100" src={image} />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              ) : (
                <img src={project.imageUrl[0]} className="carousel one-img" />
              )}

              <Card.Body>
                <Card.Text>{}</Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <h3 className="text-secondary">Description:</h3>
              <p>{project.description}</p>
              <h5 className="text-secondary">
                The goal of this project was to gain an understanding of:
              </h5>
              <ul>
                {project.goals.map((goal, index) => {
                  return <li key={index}>{goal}</li>;
                })}
              </ul>
              <h5 className="text-secondary">Technologies Used:</h5>
              <ul>
                {project.language.map((language, index) => {
                  return <li key={index}>{language}</li>;
                })}
              </ul>
            </Col>
          </Row>
          <Card.Footer>
            <Row>
              <Col className="text-start d-flex align-items-center">
                <code className="text-start">
                  Created:{" "}
                  {new Date(project.date["seconds"] * 1000).toLocaleString()}
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
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default ProjectPage;
