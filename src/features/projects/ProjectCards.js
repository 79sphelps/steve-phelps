import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

// Example:
// import AI_CHAT_DEMO from "../../Assets/ai-chat-demo.mov";

const ProjectCards = (props) => {
  const { imgPath, title, role, description, scope, tech, ghLink, isBlog, demoLink, demoVideo } = props;

  // NEW
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  console.log('demoVideo: ', demoVideo);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={imgPath} alt="card-img" />

        <Card.Body>
          <Card.Title>{title}</Card.Title>

          {role && (
            <Card.Text style={{ textAlign: "left", marginBottom: "20px" }}>
              <b>Role</b>: {role}
            </Card.Text>
          )}

          <Card.Text style={{ textAlign: "left", marginBottom: "20px" }}>
            <b>Description</b>: {description}
          </Card.Text>

          {scope && (
            <Card.Text style={{ textAlign: "left", marginBottom: "20px" }}>
              <b>Scope</b>: {scope}
            </Card.Text>
          )}

          {tech && (
            <Card.Text style={{ textAlign: "left", marginBottom: "20px" }}>
              <b>Tech</b>: {tech}
            </Card.Text>
          )}

          {ghLink ? (
            <Button variant="primary" href={ghLink} target="_blank">
              <div className="flex flex-row items-center">
                <BsGithub /> &nbsp;
                {isBlog ? "Blog" : "GitHub"}
              </div>
            </Button>
          ) : null}

          {!isBlog && demoLink ? (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <div className="flex flex-row items-center">
                <CgWebsite /> &nbsp;
                {"Demo"}
              </div>
            </Button>
          ) : null}

          

          {/* NEW VIDEO BUTTON */}
          {demoVideo && (
            <Button
              variant="primary"
              onClick={() => setIsVideoOpen(true)}
              style={{ marginLeft: "10px" }}
            >
              <div className="flex flex-row items-center">
                <FaPlay /> &nbsp;
                {"Video"}
              </div>
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* NEW TAILWIND MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-5xl rounded-xl bg-black shadow-2xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-sm font-bold text-black hover:bg-gray-200"
            >
              ✕
            </button>

            {/* VIDEO */}
            <video
              className="w-full rounded-xl"
              controls
              autoPlay
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCards;