import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/ui/Particle";
import BlurText from "../components/ui/ReactBitsComponents/BlurText";
// import laptopImg from "../../Assets/about.png";
// import Github from "./Github";
import Techstack from "../features/about/Techstack";
import Aboutcard from "../features/about/AboutCard";
// import Toolstack from "./Toolstack";
import Skills from "../features/about/Skills";
import { ABOUT_ME_HEADING, ABOUT_TECH_STACK_TEXT } from "../lib/about-data";

const LAPTOP_IMG = "./public/assets/about.png";


const AboutPage = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          <BlurText
            text={ ABOUT_ME_HEADING }
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl mb-8 text-blue-800 justify-center"
          />
        </h1>
        <Row>
          <Col style={{ textAlign: 'left' }}>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={LAPTOP_IMG} alt="about" className="img-fluid" />
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
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack /> */}
        <Skills />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default AboutPage;
