import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './styles.scss'

import ServiceCard from "../../components/ServiceCard/ServiceCard";

// service thumbs
import car from "../../assets/images/service/car.jpg";
import flight from "../../assets/images/service/flight.jpg";
import city from "../../assets/images/service/city.jpg";

export default function ServiceSection() {
  const serviceData = [
    {
      thumbnail: car,
      title: "Car Rental",
      desc:
        "We have the best car just for you. Call in today to book a car, and we will make sure it will be at your place as soon as you are arrived. ",
    },{
      thumbnail: flight,
      title: "Flight Transportation",
      desc:
        "Book an airport transfer and your driver will meet you in the arrivals area. Please call us so we can get your flight information in details. ",
    },{
      thumbnail: city,
      title: "City Tours",
      desc:
        "Whether you are a sight-seeker, a city lover, or the adventurer, we will create an unforgettable experience for you in the new place.",
    }
  ];
  const renderServices = serviceData.map((service, i) => (
    <Col md="4" key={i}>
      <ServiceCard
      thumbSrc={service.thumbnail}
      title={service.title}
      desc={service.desc} />
    </Col>
  ));
  return (
    <div className="service-area">
      <Container>
        <Row>{renderServices}</Row>
      </Container>
    </div>
  );
}
