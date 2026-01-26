import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Particle from "../Particle";
import BlurText from "../ReactBitsComponents/BlurText";
import ProjectCard from "./ProjectCards";
import {
  PROJECTS_ARY,
  PROJECTS_HEADING_TEXT,
  PROJECTS_HEADING_SUBTEXT,
  PROJECTS_TOAST_TEXT,
} from "./project-data";
// import ToastMessage from "./ToastMessage";

const Projects = () => {
  useEffect(() => {
    // toast.info();
    toast(PROJECTS_TOAST_TEXT);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <ToastContainer
        position="top-center"
        style={{ top: '230px'}}
        autoClose={30000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
      {/* <ToastMessage /> */}
      <Container>
        <h1 className="project-heading">
          <BlurText
            text={PROJECTS_HEADING_TEXT}
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl mb-8 text-blue-800 justify-center"
          />
        </h1>
        <p style={{ color: "white" }}>{PROJECTS_HEADING_SUBTEXT}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS_ARY.map((item, idx) => (
            <Col lg={4} md={6} sm={12} className="project-card" key={idx}>
              <ProjectCard
                imgPath={item.imgPath}
                isBlog={item.isBlog}
                title={item.title}
                role={item.role}
                scope={item.scope}
                tech={item.tech}
                description={item.description}
                demoLink={item.demoLink}
                ghLink={item.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
