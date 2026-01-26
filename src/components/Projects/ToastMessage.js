import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { Row, Col } from "react-bootstrap";
import { PROJECTS_TOAST_TEXT } from "./project-data";
function ToastMessage() {
  const [show, setShow] = useState(true);

  return (
    <Row>
      <Col xs={6}>
        <Toast
          position="top-center"
          bg="primary"
          onClose={() => setShow(false)}
          show={show}
          delay={30000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Render.com Server Data Delay</strong>
            <small>(About 30 - 40 seconds expected)</small>
          </Toast.Header>
          <Toast.Body>{PROJECTS_TOAST_TEXT}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastMessage;
