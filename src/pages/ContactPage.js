import React from "react";
import { Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

import {
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

import ContactForm from "../features/contact/ContactForm";

import {
  HOME_PHONE,
  HOME_EMAIL,
  HOME_LINKEDIN,
} from "../lib/home-profile-data";

import CONTACT_IMG from "../assets/contact-img.svg";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <Page
      title="Get in Touch"
      subtitle="Whether you're looking for a Frontend Engineer, React consultant, or would simply like to connect, I'd love to hear from you."
    >
      {/* Contact Links */}

      <Section>
        <div className="contact-links">
          <a className="contact-link-item" href={`tel:${HOME_PHONE}`}>
            <AiOutlinePhone />

            <span>{HOME_PHONE}</span>
          </a>

          <a className="contact-link-item" href={`mailto:${HOME_EMAIL}`}>
            <AiOutlineMail />

            <span>{HOME_EMAIL}</span>
          </a>

          <a
            className="contact-link-item"
            href={HOME_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin />

            <span>LinkedIn Profile</span>
          </a>
        </div>
      </Section>

      {/* Contact Content */}

      <Section>
        <div className="contact-main-card">
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <TrackVisibility>
                {({ isVisible = true }) => (
                  <img
                    src={CONTACT_IMG}
                    alt="Contact"
                    className={`contact-image ${
                      isVisible ? "contact-image-visible" : ""
                    }`}
                  />
                )}
              </TrackVisibility>
            </Col>

            <Col lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </Section>
    </Page>
  );
};

export default ContactPage;
