import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

import RotatingText from "../components/ui/ReactBitsComponents/RotatingText";

import {
  HOME_NAME,
  HOME_GREETING,
  HOME_GREETING_MSG,
  HOME_PROFILE_HEADING_0,
  HOME_PROFILE_HEADING_1,
  HOME_PROFILE_HEADING_2,
  HOME_PROFILE_HEADING_3,
  HOME_EMAIL,
  HOME_PHONE,
  HOME_CITY,
  HOME_STATE,
  HOME_HOW_I_WORK_TEXT,
  PROFESSIONAL_SUBTITLE,
} from "../lib/home-profile-data";

import {
  ABOUT_CORE_FOCUS_AREAS_TEXT,
  ABOUT_CORE_FOCUS_ARY,
} from "../lib/about-data";

import HOME_LOGO_IMG from "../assets/home-main.svg";

import HomeSnapshot from "../features/home/HomeSnapshot";

import "./HomePage.css";

const HomePage = () => {
  return (
    <Page pageClassName="home-page" containerClassName="home-container">
      <Row className="align-items-center gy-5 home-hero-row">
        {/* LEFT SIDE */}

        <Col lg={7} xl={7} className="home-header">
          <Section className="hero-card">
            <div className="hero-introduction">
              <h1 className="heading-name">
                {HOME_GREETING}

                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h2 className="hero-name">
                {HOME_GREETING_MSG}
                <strong className="main-name"> {HOME_NAME}</strong>.
              </h2>

              <p className="hero-title">{PROFESSIONAL_SUBTITLE}</p>
            </div>

            <div className="hero-summary">
              <p>{HOME_PROFILE_HEADING_0}</p>

              <p>{HOME_PROFILE_HEADING_1}</p>

              <p>{HOME_PROFILE_HEADING_2}</p>

              <p>{HOME_PROFILE_HEADING_3}</p>

              <p className="hero-work-style">{HOME_HOW_I_WORK_TEXT}</p>
            </div>
          </Section>
        </Col>

        {/* RIGHT SIDE */}

        <Col lg={5} xl={5} className="home-right-hero-img">
          <Section className="hero-image-wrapper">
            <img
              src={HOME_LOGO_IMG}
              alt="Steve Phelps"
              className="img-fluid hero-image"
            />
          </Section>

          {/* Focus */}

          <div className="hero-focus-card">
            <div className="hero-focus-title">
              {ABOUT_CORE_FOCUS_AREAS_TEXT}
            </div>

            <div className="hero-rotating-wrapper">
              <RotatingText
                texts={ABOUT_CORE_FOCUS_ARY}
                mainClassName="hero-rotating-text"
                rotationInterval={5000}
              />
            </div>
          </div>

          {/* Contact */}

          <div className="hero-contact-card">
            <div className="hero-contact-title">Contact</div>

            <div className="hero-contact-item">
              <AiOutlinePhone className="home-contact-info-icon" />

              <span>{HOME_PHONE}</span>
            </div>

            <div className="hero-contact-item">
              <AiOutlineMail className="home-contact-info-icon" />

              <span>{HOME_EMAIL}</span>
            </div>

            <div className="hero-contact-item">
              <span className="hero-contact-label">City</span>

              <span>{HOME_CITY}</span>
            </div>

            <div className="hero-contact-item">
              <span className="hero-contact-label">State</span>

              <span>{HOME_STATE}</span>
            </div>
          </div>
        </Col>
      </Row>

      <HomeSnapshot />
    </Page>
  );
};

export default HomePage;
