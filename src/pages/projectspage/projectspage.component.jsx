import React from "react";
import "./projectspage.styles.css";

import ProjectsPageMenu from "../../components/projectspagemenu/projectspagemenu.component";

const ProjectsPage = (props) => {
  return (
    <div className="projectspage">
      <ProjectsPageMenu />
    </div>
  );
};

export default ProjectsPage;
