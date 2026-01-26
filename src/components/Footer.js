import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { OWNERSHIP_TEXT, FOOTER_LINKS_ARY } from "./footer-data";

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{ OWNERSHIP_TEXT }</h3>
        </Col>
        {/* <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SP</h3>
        </Col> */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            { FOOTER_LINKS_ARY.map((item, idx) => (
              <li className="social-icons" key={idx}>
                <a
                  href={ item.url }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  { item.icon }
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
