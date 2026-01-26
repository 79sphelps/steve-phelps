import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlurText from "../ReactBitsComponents/BlurText";
import laptopImg from "../../Assets/about.png";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import Toolstack from "./Toolstack";
import Skills from "./Skills";
import { ABOUT_ME_HEADING, ABOUT_TECH_STACK_TEXT } from "./about-data";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* <Row style={{ justifyContent: "center", padding: "10px" }}> */}
        <Row >
          {/* <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          > */}
          <Col style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <BlurText
                text={ ABOUT_ME_HEADING }
                delay={200}
                animateBy="words"
                direction="top"
                className="text-5xl mb-8 text-blue-800 justify-center"
              />
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <BlurText
            text={ ABOUT_TECH_STACK_TEXT }
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl mb-8 text-blue-800 justify-center"
          />
        </h1>
        <Techstack />
        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}
        <Skills />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
