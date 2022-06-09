import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "./profile.styles.css";

const Profile = (props) => {
  return (
    <div
      className="profile"
    >
      <div
        className="profile-pic"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="profile-content">
      </div>
    </div>
  );
};
export default Profile;
