import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

export default function SectionTitle({ title, desc, ...props }) {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: "8", offset: "2" }}>
          <div className="section-title" style={props.styles}>
            <h2>{title}</h2>
            <p style={props.para}>{desc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
