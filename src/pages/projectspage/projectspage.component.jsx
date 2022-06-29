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
        style={{ color: "white", maxWidth: "1500px" }}
        className="text-center mt-5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        exercitationem commodi consectetur repellendus hic ex aliquid repellat
        voluptates iusto corporis labore minima quo, numquam cupiditate
        blanditiis minus amet, culpa eos. Placeat enim quasi, fugiat fugit ipsum
        perferendis voluptate recusandae ducimus magni repudiandae.
      </p>
      <ProjectsPageMenu />
    </div>
  );
};

export default ProjectsPage;
