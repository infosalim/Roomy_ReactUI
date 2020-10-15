import React, { useState } from "react";
import DatePicker from "react-datepicker";

import RoomyBtn from '../../components/Button/Button';

import "./styles.scss";

// assets
import locationIcon from '../../assets/icons/location.png';

export default function BookingCard() {
  const [startDate, setStartDate] = useState(new Date());
  let [adultInputValue, setadultInputValue] = useState(2);
  let [childInputValue, setChildInputValue] = useState(0);

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  const adultChange = event => {
    if(event.target.value > -1){
      setadultInputValue(event.target.value);
    }
  }
  const childChange = event => {
    if(event.target.value > -1){
      setChildInputValue(event.target.value);
    }
  }

  const incrementAdult = (e) => {
    e.preventDefault();
    const valueInc = ++adultInputValue;
    if(valueInc > 0){
        setadultInputValue(valueInc);
    }
  }
  const decrementAdult = (e) => {
    e.preventDefault();
    const valueDec = --adultInputValue;
    if(valueDec > 0){
      setadultInputValue(valueDec);
  }
  }
  const incrementChild = (e) => {
    e.preventDefault();
    const valueInc = ++childInputValue;
    if(valueInc > -1){
      setChildInputValue(valueInc);
    }
  }
  const decrementChild = (e) => {
    e.preventDefault();
    const valueDec = --childInputValue;
    if(valueDec > -1){
      setChildInputValue(valueDec);
    }
  }

  return (
    <div className="booking-card">
      <div className="card-title">
        <h4>Start booking a place</h4>
        <p>Find a place that suits your needs, it’s easy</p>
      </div>
      <form>
        <div className="input-box location">
          <img src={locationIcon} alt='icons' />
          <label>Places</label>
          <input type="text" placeholder="Enter place name or city" />
        </div>
        <div className="small-date-wrapper">
          <div className="input-box calender">
            <label>Check in</label>
            <DatePicker
              selected={startDate}
              dateFormat="d, MMMM, yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="input-box calender">
            <label>Check out</label>
            <DatePicker
              selected={tomorrow}
              dateFormat="d, MMMM, yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='person-counter'>
              <div className="input-box">
                <label>Adult</label>
                <button className='decrement' onClick={decrementAdult}>-</button>
                <input type="number" value={adultInputValue} onChange={adultChange} />
                <button className='increment' onClick={incrementAdult}>+</button>
              </div>
              <div className="input-box">
                <label>Children</label>
                <button className='decrement' onClick={decrementChild}>-</button>
                <input type="number" value={childInputValue} onChange={childChange} />
                <button className='increment' onClick={incrementChild}>+</button>
              </div>
          </div>
          <div className="radio-content-wrapper">
            <div className="input-box">
              <label className="radio-container">
              Spa
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="input-box">
              <label className="radio-container">
              Restaurant
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="input-box">
              <label className="radio-container">
              Pool
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <RoomyBtn linkTo='/search' caption='Search Place' btnType='large' />
        </div>
      </form>
    </div>
  );
}
