import React from "react";
import "./styles.scss";

export default function RoomCard({thumbSrc, vnd, title, beds, buttonHandler}) {
  return (
    <div className="room-card">
      <div className="room-thumb">
        <img src={thumbSrc} alt="thumb" />
        <div className="thumb-content">
          <p>vnd</p>
          <p>{vnd}</p>
        </div>
      </div>
      <div className="room-content">
        <h4>{title}</h4>
        <p className="wifi">Free Wi-Fi </p>
        <p>{beds}</p>
        <p>Shower and bathtub</p>
      </div>
      <button onClick={buttonHandler}>Reserve Now</button>
    </div>
  );
}
