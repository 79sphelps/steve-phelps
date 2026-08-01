import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import "./ProjectCard.css";

const ProjectCard = ({
  imgPath,
  title,
  role,
  description,
  scope,
  tech,
  ghLink,
  isBlog,
  demoLink,
  demoVideo,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <div className="project-image-wrapper">
          <Card.Img variant="top" src={imgPath} alt={title} />
        </div>

        <Card.Body className="project-card-body">
          <Card.Title className="project-card-title">{title}</Card.Title>

          {role && (
            <Card.Text className="project-card-text">
              <strong>Role:</strong> {role}
            </Card.Text>
          )}

          <Card.Text className="project-card-text">
            <strong>Description:</strong> {description}
          </Card.Text>

          {scope && (
            <Card.Text className="project-card-text">
              <strong>Scope:</strong> {scope}
            </Card.Text>
          )}

          {tech && (
            <Card.Text className="project-card-text">
              <strong>Tech:</strong> {tech}
            </Card.Text>
          )}

          <div className="project-buttons">
            {ghLink && (
              <Button className="project-button" href={ghLink} target="_blank">
                <BsGithub />

                <span>{isBlog ? "Blog" : "GitHub"}</span>
              </Button>
            )}

            {!isBlog && demoLink && (
              <Button
                className="project-button"
                href={demoLink}
                target="_blank"
              >
                <CgWebsite />

                <span>Demo</span>
              </Button>
            )}

            {demoVideo && (
              <Button
                className="project-button"
                onClick={() => setIsVideoOpen(true)}
              >
                <FaPlay />

                <span>Video</span>
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {isVideoOpen && (
        <div className="project-video-overlay">
          <div className="project-video-modal">
            <button
              className="project-video-close"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕
            </button>

            <video className="project-video" controls autoPlay>
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
