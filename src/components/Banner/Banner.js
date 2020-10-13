import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

export default function Banner(props) {
  return (
    <div className='banner' style={{backgroundImage:`url(${props.bgImage})`}}>
      <Container>
        <Row>
          <Col md="12">
            <div className="banner-content">{props.children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
