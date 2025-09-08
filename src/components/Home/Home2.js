import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/my_photo-min.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself!
            </h1>
            <p className="home-about-body">
              I am a senior frontend developer with 10+ years of experience in software. I have worked with modern JavaScript frontend frameworks extensively over the last 8 years, spending several years with React.js using Redux/RTK/TanStack Query, hooks, and Bootstrap/MaterialUI/Tailwind CSS for UI development. Most recently, my focus has been on working with AI tools and integrating GitHub Copilot into my development workflow. I am adept at building responsive and high-quality web applications. My backend experience has primarily been in implementing services and API endpoints with Node.js and Express, but I do have microservice development experience with AWS as well. My background also includes C++, Java, and Python, and I have much experience with algorithms and data structures too. Other experience includes agile delivery methods, Git, cloud application architecture, remote work culture, and collaborating with distributed teams communicating via Slack and Zoom. 
              <br />
              {/* <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">frontend technologies</b> and building
                applications with{" "}
                <b className="purple">React.js, Next.js, and Tailwind CSS</b>
              </i>
              <br /> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                style={{ borderRadius: "12px", width: "200px" }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/79sphelps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/steve-phelps-1614192b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stevenlphelps/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
