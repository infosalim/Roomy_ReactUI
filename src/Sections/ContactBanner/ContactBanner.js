import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

export default function ContactBanner() {
  return (
    <div className="contact-banner">
      <Container>
        <Row>
          <Col md={{ span: "10", offset: "1" }}>
            <h1>
              IF YOU HAVE ANY SPECIAL REQUEST, DON’T HESITATE TO CALL US AT:
              0700-79 79 79
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
