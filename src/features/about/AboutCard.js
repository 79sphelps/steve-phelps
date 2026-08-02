import React from "react";
import { ImPointRight } from "react-icons/im";

import {
  ABOUT_PARAGRAPH_TEXT_ARRAY,
  ABOUT_OTHER_ACTIVITIES_TEXT,
  ABOUT_ACTIVITIES_ARRAY,
} from "../../lib/about-data";

// import "./AboutCard.css";
import "./AboutCardV2.css";

const AboutCard = () => {
  return (
    <div className="about-card">
      <div className="about-card-body">
        <blockquote className="about-card-content">
          {ABOUT_PARAGRAPH_TEXT_ARRAY.map((item, idx) => (
            <p className="about-me-paragraph" key={idx}>
              {item}
            </p>
          ))}

          <div className="about-other-title">{ABOUT_OTHER_ACTIVITIES_TEXT}</div>

          <ul className="about-activities-list">
            {ABOUT_ACTIVITIES_ARRAY.map((item, idx) => (
              <li className="about-activity" key={idx}>
                <ImPointRight className="about-activity-icon" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutCard;
