import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

// assets
import checkmark from "../../assets/icons/check-mark.png";
import arrow from "../../assets/icons/arrow.png";

export default function BookingForm({roomReserve}) {
  return (
    <div className="booking-form">
      <Container>
        <Row>
          <Col md={{ span: "10", offset: "1" }}>
            <div className="booking-form-wrapper">
              <div className="title">
                <img src={checkmark} alt="icon" />
                <h2>Great Choice of Place</h2>
              </div>
              <form>
                <div className="payment-option">
                  <h4>Your Messages</h4>
                  <div className="input-box">
                    <label className="radio-container">
                    Pay later<br/>
                      <span><span>Risk free!</span> Free cancellation during Covid-19.</span>
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="input-box">
                  <label className="radio-container">
                  Pay Now
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
                  </div>
                </div>
                <div className="name-email">
                  <h4>Let us know who you are</h4>
                  <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" />
                  </div>
                  <div className="input-box">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div className="input-box">
                    <label>Phone Number</label>
                    <input type="tel" />
                  </div>
                </div>
                <div className="textarea">
                  <h4>Let us know who you are</h4>
                  <div className="input-box">
                    <label>Your Messages</label>
                    <textarea />
                  </div>
                </div>
                <button onClick={roomReserve}><img src={arrow} alt='icon'/> Next Page</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
