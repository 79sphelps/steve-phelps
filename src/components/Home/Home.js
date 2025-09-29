import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

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
                I'm a full stack (frontend-focused) developer based in Happy Valley, OR. My focus is
                on building modern high-performance React/Next.js applications.
              </h3>
              {/* <h3 className="heading-subtext">
                I'm passionate about cutting-edge, beautiful interfaces, and
                intuitively implemented UX.
              </h3> */}
              <h3 className="heading-subtext">
                I'm passionate about optimization, performance, AI, architecture, state management patterns, and component design patterns, in addition to intuitively implemented UX.
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
