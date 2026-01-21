import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import contactImg from "../../Assets/contact-img.svg";

import BlurText from "../ReactBitsComponents/BlurText";

const ContactForm = () => {
  let initialContactData = {
    user_name: "",
    email: "",
    message: "",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [contactData, setContactData] = useState(initialContactData);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  const handleInputChange = (v) => {
    v.preventDefault(); // prevent a browser reload/refresh
    const { name, value } = v.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <section className="contact" id="contact">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            {/* <h1>Get in Touch</h1> */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <BlurText
                text="Get in Touch"
                delay={200}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-5xl mb-8 text-blue-800 justify-center"
              />
            </h1>

            <div style={{ display: "inline" }}>
              <b className="purple">PHONE: </b>503-462-2135
            </div>
            <div style={{ display: "inline" }}>
              <b className="purple">EMAIL: </b>
              <a href="mailto:79sphelps@gmail.com">79sphelps&#64;gmail.com</a>
            </div>

            <Col size={12} md={6}>
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
              <form onSubmit={sendEmail}>
                {/* <label>Name</label> */}
                {/* <input type="text" name="user_name" /> */}

                <Col size={12} sm={12} className="px-1">
                  <input
                    type="text"
                    name="user_name"
                    value={contactData.user_name}
                    placeholder="Name"
                    onChange={(e) => handleInputChange(e)}
                  />
                  {/* {formErrorObject.firstNameError && (
                            <FormError msg={formErrors["firstName"].error} />
                          )} */}
                </Col>

                {/* <label>Email</label>
                    <input type="email" name="user_email" /> */}

                <Col size={12} sm={12} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={contactData.email}
                    placeholder="Email Address"
                    onChange={(e) => handleInputChange(e)}
                  />
                  {/* {formErrorObject.emailError && (
                            <FormError msg={formErrors["email"].error} />
                          )} */}
                </Col>

                {/* <label>Message</label>
                    <textarea name="message" /> */}

                <textarea
                  rows="6"
                  name="message"
                  value={contactData.message}
                  placeholder="Message"
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
                {/* {formDetails.message.length < 25 && <div>({25 - formDetails.message.length} characters still needed)</div>}
                          {formErrorObject.messageError && (
                            <FormError msg={formErrors["message"].error} />
                          )} */}

                <input type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};
export default ContactForm;
