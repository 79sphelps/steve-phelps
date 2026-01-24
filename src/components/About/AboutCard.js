import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ABOUT_PARAGRAPH_TEXT_ARRAY, ABOUT_OTHER_ACTIVITIES_TEXT, ABOUT_ACTIVITIES_ARRAY } from './about-info';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          { ABOUT_PARAGRAPH_TEXT_ARRAY.map((item, idx) => (
            <div className="about-me-paragraph" key={idx}>
              { item }
            </div>
          ))}
          <div style={{ textAlign: "left" }}>
            { ABOUT_OTHER_ACTIVITIES_TEXT }
          </div>
          <ul>
            { ABOUT_ACTIVITIES_ARRAY.map((item, idx) => (
              <li className="about-activity">
                <div className="flex flex-row items-center">
                  <ImPointRight className="mr-3" /> { item }
                </div>
              </li>
            ))}
          </ul>
          {/* <footer className="blockquote-footer">Steve Phelps</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
