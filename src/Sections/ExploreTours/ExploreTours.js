import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './styles.scss'

import ServiceCard from "../../components/ServiceCard/ServiceCard";

// service thumbs
import saigon from "../../assets/images/service/sai-gon.jpg";
import huetour from "../../assets/images/service/hue-tour.jpg";
import hoirtour from "../../assets/images/service/hoi-tour.jpg";

export default function ExploreTours() {
  const serviceData = [
    {
      thumbnail: saigon,
      title: "Sai Gon Tour",
      desc:
        "Visit two major attractions of southern Vietnam—one historical, one natural, both cultural—on this full-day tour to Ho Chi Minh city.",
    },{
      thumbnail: huetour,
      title: "Hue Tour",
      desc:
        "A lot of things to experience. These experiences are best for tours in Hue: Hue city tour with private english speaking driver: see royal tombs and so much more.",
    },{
      thumbnail: hoirtour,
      title: "Hoi An Tour",
      desc:
        "Visit world’s heritage site, Cu Lao Cham with water activity and forest hiking. Along with marine wonders promising water activities & exotic sceneries in the province.",
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
    <div className="explore-tour-area">
      <Container>
        <Row>{renderServices}</Row>
      </Container>
    </div>
  );
}
