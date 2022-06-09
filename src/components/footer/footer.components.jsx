import React from "react";
import "./footer.styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { auth } from "../../firebase/firebase.utils";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="socials">
        <a href="https://github.com/SoroushSemer" className="social-container">
          {/* <MyLogo className="logo" /> */}
          {/* <img src={MyLogo} alt="logo" className="logo" /> */}
          <FontAwesomeIcon className="social" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/soroush-semerkant/"
          className="social-container"
        >
          {/* <MyLogo className="logo" /> */}
          {/* <img src={MyLogo} alt="logo" className="logo" /> */}
          <FontAwesomeIcon className="social" icon={faLinkedin} />
        </a>
        <a
          href="https://app.joinhandshake.com/stu/users/26889479"
          className="social-container"
        >
          {/* <MyLogo className="logo" /> */}
          {/* <img src={MyLogo} alt="logo" className="logo" /> */}
          <FontAwesomeIcon className="social" icon={faHandshake} />
        </a>
        <a href="mailto:soroushsemer@gmail.com" className="social-container">
          {/* <MyLogo className="logo" /> */}
          {/* <img src={MyLogo} alt="logo" className="logo" /> */}
          <FontAwesomeIcon className="social" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
