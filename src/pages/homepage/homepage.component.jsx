import React from "react";
import "./homepage.styles.css";

import Profile from "../../components/profile/profile.component";
import FeaturedProjectMenu from "../../components/featuredprojectmenu/featuredprojectmenu.component";
import AboutMe from "../../components/aboutme/aboutme.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFlvCd1z9Zahw/profile-displayphoto-shrink_400_400/0/1623016518415?e=1660176000&v=beta&t=Cc6vdHSZwkpfRgsb80SWQRhmHE1lmFZRGH32Yi1Qbts",
      text: "Hi, I'm Soroush",
      position: "Diligent Self-Taught Programmer.",
    };
  }
  render() {
    return (
      <div className="homepage">
        <Profile
          imageUrl={this.state.imageUrl}
          text={this.state.text}
          position={this.state.position}
          className="child"
        />
        <AboutMe className="child" />
        <FeaturedProjectMenu className="child" />
      </div>
    );
  }
}

export default HomePage;
