import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

import PlaceCard from "../../components/PlaceCard/PlaceCard";

// place thumbs
import malibu from "../../assets/images/places/malibu.jpg";
import longBeach from "../../assets/images/places/long-beach.jpg";
import midway from "../../assets/images/places/midway.jpg";
import newPort from "../../assets/images/places/new-port.jpg";
import traveler from "../../assets/images/places/traveler.jpg";
import mountain from "../../assets/images/places/mountain.jpg";

export default function PlacesSection() {
  const placeData = [
    {
      thumbnail: malibu,
      price: "2,000,000",
      rating: "9,8",
      title: "Malibu Hotel",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
    {
      thumbnail: longBeach,
      price: "1,570,000",
      rating: "9",
      title: "Long Beach Hotel",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
    {
      thumbnail: midway,
      price: "1,000,000",
      rating: "8,8",
      title: "Midway Hotel",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
    {
      thumbnail: newPort,
      price: "850,000",
      rating: "8,8",
      title: "New Port Hotel",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
    {
      thumbnail: traveler,
      price: "700,000",
      rating: "7,9",
      title: "Traveler Homestay",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
    {
      thumbnail: mountain,
      price: "620,000",
      rating: "7,2",
      title: "Mountain Homestay",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna incididunt ut labore et.",
    },
  ];
  const renderPlaces = placeData.map((place, i) => {
    if (i === 0) {
      return (
        <Col md="4" key={i}>
          <Link to="/hotel">
            <PlaceCard
              thumbSrc={place.thumbnail}
              price={place.price}
              rating={place.rating}
              title={place.title}
              desc={place.desc}
            />
          </Link>
        </Col>
      );
    }

    return (
      <Col md="4" key={i}>
        <PlaceCard
          thumbSrc={place.thumbnail}
          price={place.price}
          rating={place.rating}
          title={place.title}
          desc={place.desc}
        />
      </Col>
    );
  });
  return (
    <div className="places-area">
      <Container>
        <Row>{renderPlaces}</Row>
      </Container>
    </div>
  );
}
