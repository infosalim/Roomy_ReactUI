import React, { useState } from "react";

import Banner from "../../components/Banner/Banner";
import HotelCover from "../../Sections/HotelCover/HotelCover";
import Review from "../../Sections/Review/Review";
import Rooms from "../../Sections/Rooms/Rooms";
import BookingForm from "../../Sections/BookingForm/BookingForm";

import hotelBg from "../../assets/images/banner/hotel.jpg";

export default function Hotel() {
  const [roomReserve, setRoomReserve] = useState(true);

  const roomReserveHandler = (e) => {
    e.preventDefault();
    const reserveStatus = roomReserve;
    setRoomReserve(!reserveStatus);
    console.log(reserveStatus);
  };

  const renderRoomReserve = roomReserve ? <Rooms roomReserve={roomReserveHandler} /> : <BookingForm roomReserve={roomReserveHandler}/>;

  return (
    <React.Fragment>
      <Banner bgImage={hotelBg}>
        <h1>Your Best Experience Starts Here</h1>
      </Banner>
      <HotelCover />
      <Review />
      {renderRoomReserve}
    </React.Fragment>
  );
}
