import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text style={{ textAlign: "justify" }}> */}
        <Card.Text style={{ textAlign: "left", marginBottom: "20px" }}>
          {props.description}
        </Card.Text>

        {props.ghLink ? (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <div className="flex flex-row items-center">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </div>
          </Button>
        ) : null}

        {/* {"\n"}
        {"\n"} */}

        {!props.isBlog && props.demoLink ? (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <div className="flex flex-row items-center">
              <CgWebsite /> &nbsp;
              {"Demo"}
            </div>
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
