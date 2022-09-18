import React from "react";
import "./homepage.styles.css";

import Profile from "../../components/profile/profile.component";
import FeaturedProjectMenu from "../../components/featuredprojectmenu/featuredprojectmenu.component";
import AboutMe from "../../components/aboutme/aboutme.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hi, I'm Soroush",
      position: "Diligent Enthusiastic Programmer.",
    };
  }
  render() {
    return (
      <div className="homepage">
        <Profile text={this.state.text} position={this.state.position} />
        <AboutMe />
        <FeaturedProjectMenu />
      </div>
    );
  }
}

export default HomePage;
