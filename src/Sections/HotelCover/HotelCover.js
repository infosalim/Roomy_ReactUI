import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './styles.scss';

import hotelCover from "../../assets/images/banner/hotel-cover.jpg";
import locationIcon from '../../assets/icons/location.png';

export default function HotelCover() {
  return (
    <div className="contact-area">
      <Container>
        <Row>
            <Col md="12">
            <img src={hotelCover} alt="cover" />
            <div className="contact-details">
              <h2>Malibu Hotel</h2>
              <p>
                35-37-39-41 Ton That Thiep street, Ben Nghe Ward, District 1, Ho
                Chi Minh City, 700000, Vietnam
              </p>
              <p>
                  <img src={locationIcon} alt='icon' />  1.3 km to City centre
              </p>
              <p>1.4 km to Ben Thanh Market</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
