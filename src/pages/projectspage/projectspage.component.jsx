import React from "react";
import "./projectspage.styles.css";
import "../../custom.scss";

import ProjectsPageMenu from "../../components/projectspagemenu/projectspagemenu.component";

const ProjectsPage = (props) => {
  return (
    <div className="projectspage">
      <h1 style={{ color: "white" }} className="text-center">
        My Projects
      </h1>
      <p
        style={{ color: "#ffc800", maxWidth: "1000px" }}
        className="text-center mt-5 "
      >
        I always aim to complete at least one project during my breaks from
        school. This is a database of all projects I have completed in and out
        of school in subjects ranging from robotics to web development.
      </p>
      <ProjectsPageMenu />
    </div>
  );
};

export default ProjectsPage;
