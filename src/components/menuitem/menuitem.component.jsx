import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "./menuitem.styles.css";

const MenuItem = (props) => {
  return (
    // <div
    //   className={`menu-item ${props.size}`}
    //   onClick={() => props.history.push(`${props.match.url}${props.title}`)}
    // >
    //   <div
    //     className="background-img"
    //     style={{
    //       backgroundImage: `url(${props.imageUrl})`,
    //     }}
    //   ></div>
    //   <div className="content">
    //     <h1 className="title">{props.title.toUpperCase()}</h1>
    //     <span className="subtitle">VIEW PROJECT</span>
    //   </div>
    // </div>
    <a
      className="menu-item"
      href={props.linkUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <p className="text">{props.language}</p>
        <span className="subtitle">VIEW PROJECT</span>
      </div>
    </a>
  );
};
export default MenuItem;
