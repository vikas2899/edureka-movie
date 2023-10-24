import React, { useState } from 'react';
import './Ticket.css';

function Ticket() {
  const showTimings = ['9:00 AM', '11:30 AM', '4:15 PM', '10:30 PM'];
  const noOfSeats = ['1', '2', '3', '4'];
  const getDateTime = () => {
    return new Date().toDateString();
  };

  const [activeTimeIndex, setActiveTime] = useState(0);
  const [seatsIndex, setSeats] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  if (showFinal) {
    return (
      <div className='ticket__container'>
        <h4 className='ticket__title'>Ticket Booking</h4>
        <div className='ticket__detail'>
          <div className='qr__container'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg'
              alt='qr'
            />
          </div>
          <div>
            <p>Ticket Booked</p>
            <p>Time - {showTimings[activeTimeIndex]}</p>
            <p>No. of seats - {noOfSeats[seatsIndex]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='ticket__container'>
      <h4 className='ticket__title'>Ticket Booking</h4>
      <div className='ticket__details'>
        <p>Date - {getDateTime()}</p>
        <p>
          Available Show Timings -
          {showTimings.map((time, index) => (
            <span
              key={time}
              className={`showTime ${
                activeTimeIndex === index ? 'activeTime' : ''
              }`}
              onClick={() => setActiveTime(index)}
            >
              {time}
            </span>
          ))}
        </p>
        <p>
          No. of seats -
          {noOfSeats.map((seat, index) => (
            <span
              key={seat}
              className={`showTime ${seatsIndex === index ? 'activeTime' : ''}`}
              onClick={() => setSeats(index)}
            >
              {seat}
            </span>
          ))}
        </p>
        <button className='ticket__book' onClick={() => setShowFinal(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Ticket;
