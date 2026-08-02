import React from "react";
import { Row, Col } from "react-bootstrap";

import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

import Aboutcard from "../features/about/AboutCard";
import TechnologyStack from "../features/about/TechnologyStack.js";
import Skills from "../features/about/Skills";

import { ABOUT_ME_HEADING } from "../lib/about-data";

import LAPTOP_IMG from "../assets/about.png";

// import "./AboutPage.css";
import "./AboutPageV2.css";

const AboutPage = () => {
  return (
    <Page
      pageClassName="about-section"
      containerClassName="about-container"
      title={ABOUT_ME_HEADING}
      subtitle="Frontend engineer building scalable React applications, AI-powered SaaS products, and polished user experiences."
      headerClassName="about-page-header"
    >
      {/* =====================================
          MAIN ABOUT LAYOUT
      ===================================== */}

      <Section className="about-main-section">
        <Row className="about-layout-row g-5 align-items-start">
          {/* ================================
              LEFT STORY COLUMN
          ================================= */}

          <Col lg={7} className="about-story-column">
            {/* <div className="about-story-card"> */}
            <Aboutcard />
            {/* </div> */}
          </Col>

          {/* ================================
              RIGHT PROFILE COLUMN
          ================================= */}

          <Col lg={5} className="about-profile-column">
            {/* Profile Image */}

            {/* <div className="about-image-card"> */}
            <div className="about-image-wrapper">
              <img
                src={LAPTOP_IMG}
                alt="About"
                className="img-fluid about-image"
              />
            </div>

            {/* Technology Snapshot */}

            {/* <div className="about-sidebar-card"> */}
            <div className="about-sidebar">
              <h3>Technology Stack</h3>

              <TechnologyStack />
            </div>
          </Col>
        </Row>
      </Section>

      {/* =====================================
          EXPERTISE / SKILLS ROW
      ===================================== */}

      <Section
        title="Engineering Expertise"
        subtitle="Core capabilities across frontend architecture, AI development, backend services, and modern product engineering."
        className="about-skills-section"
      >
        <div className="about-skills-container">
          <Skills />
        </div>
      </Section>
    </Page>
  );
};

export default AboutPage;
