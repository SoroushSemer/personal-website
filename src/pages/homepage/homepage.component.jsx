import React from "react";
import "./homepage.styles.css";

import Profile from "../../components/";

class HomePage extends React.Component {
  contructor() {
    super();
    this.state = {
      imageUrl: "",
      text: "Hi, My name is Soroush Semerkant!",
    };
  }
  render() {
    return <div className="homepage"></div>;
  }
}

export default HomePage;
