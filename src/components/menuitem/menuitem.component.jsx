import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "../../custom.scss";
import "./menuitem.styles.css";
import { Link } from "react-router-dom";

import { Card, Button, Col, Container } from "react-bootstrap";

import { getImageRef } from "../../utils/firebase/firebase.utils";

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
    // <a
    //   className="menu-item"
    //   href={props.linkUrl}
    //   target="_blank"
    //   rel="noreferrer"
    // >
    //   <div
    //     className="background-img"
    //     style={{
    //       backgroundImage: `url(${props.imageUrl})`,
    //     }}
    //   ></div>
    //   <div className="content">
    //     <h1 className="title">{props.title.toUpperCase()}</h1>
    //     <p className="text">{props.language}</p>
    //     <span className="subtitle">VIEW PROJECT</span>
    //   </div>
    // </a>

    // <Link className="menu-item" to={`/projects/${props.number}`}>
    //   <div
    //     className="background-img"
    //     style={{
    //       backgroundImage: `url(${props.imageUrl})`,
    //     }}
    //   ></div>
    //   <div className="content">
    //     <h1 className="title">{props.title.toUpperCase()}</h1>
    //     <p className="text">{props.language}</p>
    //     <span className="subtitle">VIEW PROJECT</span>
    //   </div>
    // </Link>
    <Link
      to={`/projects/${props.id}`}
      className="d-flex flex-wrap justify-content-center"
    >
      <Card
        style={{
          minWidth: "300px",
          maxWidth: "80%",
          width: "30rem",
          height: "30rem",
          background: "gray",
          border: "2px solid white",
        }}
        className="text-center menu-item"
      >
        <Card.Img src={props.imageUrl} className="h-100 background-img" />
        <Card.ImgOverlay className="d-flex align-items-center">
          <Container
            fluid
            style={{
              maxWidth: "20rem",
              maxHeight: "25rem",
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid black",
              color: "black",
            }}
            className="p-3 align-items-center justify-content-center content"
          >
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text className="text">
              {props.language.map((lang) => {
                return lang + " ";
              })}
            </Card.Text>
            <Button variant="primary" className="subtitle">
              View Project
            </Button>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};
export default MenuItem;
