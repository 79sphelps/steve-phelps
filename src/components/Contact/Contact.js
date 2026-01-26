import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import TrackVisibility from "react-on-screen";
import {
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import "./Contact.css";
import contactImg from "../../Assets/contact-img.svg";
import BlurText from "../ReactBitsComponents/BlurText";
import ContactForm from "./ContactForm";
import { HOME_PHONE, HOME_EMAIL, HOME_LINKEDIN } from "../Home/home-profile-data";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container fluid className="contact-section">
        {/* <Particle /> */}
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <BlurText
                text="Get in Touch"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-5xl mb-8 text-blue-800 justify-center"
              />
            </h1>
            <div className='contact-info'>
              <AiOutlinePhone className='contact-info-icon'/>
              <b className="blue">-</b>
              {HOME_PHONE}
            </div>
            <div className='contact-info'>
              <AiOutlineMail className='contact-info-icon' />
              <b className="blue">-</b>
              <a href={`mailto:${HOME_EMAIL}`}>{HOME_EMAIL}</a>
            </div>
            <div className='contact-info'>
              <AiOutlineLinkedin className='contact-info-icon' />
              <b className="blue">-</b>
              <a href={HOME_LINKEDIN}>Go to LinkedIn Profile</a>
            </div>
            <Col
              size={12}
              md={6}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <TrackVisibility>
                {({ isVisible = true }) => (
                  <img
                    //   className={
                    // isVisible ? "animate__animated animate__zoomIn" : ""
                    //   }
                    src={contactImg}
                    alt="Contact Me"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col
              //   md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;
