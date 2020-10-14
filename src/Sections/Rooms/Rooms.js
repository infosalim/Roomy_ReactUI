import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

import RoomCard from "../../components/RoomCard/RoomCard";

// assets
import single from '../../assets/images/rooms/single.jpg';
import double from '../../assets/images/rooms/double.jpg';
import family from '../../assets/images/rooms/family.jpg';
import delux from '../../assets/images/rooms/delux.jpg';
import studio from '../../assets/images/rooms/studio.jpg';
import deluxStudio from '../../assets/images/rooms/delux-studio.jpg';

export default function Rooms({ roomReserve }) {
  const roomData = [
    {
      thumbSrc: single,
      vnd: "2,000,000",
      title: "Single Room",
      beds: "1 queen bed"
    },{
      thumbSrc: double,
      vnd: "2,500,000",
      title: "Double Room",
      beds: "2 queen beds"
    },{
      thumbSrc: family,
      vnd: "3,000,000",
      title: "Family Room",
      beds: "1 king bed, 2 single beds"
    },{
      thumbSrc: delux,
      vnd: "3,700,000",
      title: "Deluxe Room",
      beds: "Bed choices, queen bed"
    },{
      thumbSrc: studio,
      vnd: "4,000,000",
      title: "Studio",
      beds: "Bed choices, queen bed"
    },{
      thumbSrc: deluxStudio,
      vnd: "4,300,000",
      title: "Deluxe Studio (Twin)",
      beds: "Bed choices, queen bed"
    },
  ];

  const renderRooms = roomData.map((room, i) => (
    <Col md="4" key={i}>
      <RoomCard
        thumbSrc={room.thumbSrc}
        vnd={room.vnd}
        title={room.title}
        beds={room.beds}
        buttonHandler={roomReserve}
      />
    </Col>
  ));

  return (
    <div className="room-area">
      <Container>
        <Row>
          <Col md="12">
            <h2>Select Your Room</h2>
          </Col>
          {renderRooms}
        </Row>
      </Container>
    </div>
  );
}
