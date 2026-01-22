import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import RotatingText from "../ReactBitsComponents/RotatingText";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}
              <h1 className="heading-name">
                Welcome.
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h3 className="heading-subtext">
                My name is<strong className="main-name"> Steve Phelps</strong>.
                {/* I'm a full stack (frontend-focused) developer based in Happy Valley, OR. My focus is
                on building modern high-performance React/Next.js applications. */}
              </h3>
              <h3 className="heading-subtext">
                I build scalable, high-quality web applications that turn
                complex requirements into reliable, intuitive user experiences.
              </h3>
              <h3 className="heading-subtext">
                With 10+ years of experience working across consumer and
                enterprise platforms—including Nike, Workday, and fintech
                products—I specialize in React, TypeScript, and frontend
                architecture for mission-critical systems. I’m comfortable
                owning features end-to-end, collaborating closely with product
                and design, and delivering software that holds up under
                real-world usage.
              </h3>
              <h3 className="heading-subtext">
                I focus on clarity, performance, and maintainability—building
                software teams and users can trust.
              </h3>
              {/* <h3 className="heading-subtext">
                I'm passionate about cutting-edge, beautiful interfaces, and
                intuitively implemented UX.
              </h3> */}
              {/* <h3 className="heading-subtext">
                I'm passionate about optimization, performance, AI, architecture, state management patterns, and component design patterns, in addition to intuitively implemented UX.
              </h3> */}

              <h3 className="heading-subtext" style={{ marginTop: "10px" }}>
                I'm passionate about...
                <RotatingText
                  texts={[
                    "Optimization,",
                    "Performance,",
                    "AI integration,",
                    "App Architecture,",
                    "State Management,",
                    "Component Design,",
                    "Intuitive UX",
                  ]}
                  mainClassName="mt-1 px-2 sm:px-2 md:px-3 bg-blue-800 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  // rotationInterval={2000}
                  rotationInterval={3000}
                />
              </h3>

              {/* <h3 className="heading-subtext">
                I thrive at the intersection of web development and creative problem-solving, and I'm ready to deliver impactful, scalable solutions using modern frameworks like React.js, Next.js, and Node.js.
              </h3> */}
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                {/* <h2><b>Steve Phelps</b></h2>
                <h4 class="font-yellow">Full Stack JavaScript Developer</h4> */}
                {/* <ul class="information margin-tb-30"> */}
                <br />
                <br />
                <br />
                {/* <ul style={{ fontSize: "1.5rem" }}> */}
                {/* <ul style={{ fontSize: "20px" }}> */}
                <ul className="home-contact-text">
                  <li>
                    <b className="purple">PHONE: </b>503-462-2135
                  </li>
                  <li>
                    <b className="purple">EMAIL: </b>79sphelps&#64;gmail.com
                  </li>
                  <li>
                    <b className="purple">CITY: </b>Happy Valley
                  </li>
                  <li>
                    <b className="purple">STATE: </b>Oregon
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
