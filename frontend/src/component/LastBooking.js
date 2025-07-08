import React, { useContext, useEffect } from 'react';
import '../css/Lastbookingddetails.css';
import BsContext from '../context/BsContext';

const LastBooking = () => {
  const { lastBookingDetails, handleGetBooking } = useContext(BsContext);

  useEffect(() => {
    handleGetBooking();
  }, []);

  const seatEntries = lastBookingDetails?.seats
    ? Object.entries(lastBookingDetails.seats).filter(([_, count]) => count > 0)
    : [];

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking</h2>

      {lastBookingDetails && seatEntries.length > 0 ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seatEntries.map(([seat, _], idx) => (
                <li className="seat_value" key={idx}>
                  {seat}
                </li>
              ))}
            </ul>
          </div>

          <p className="slot" style={{ textAlign: 'left' }}>
            Slot: {lastBookingDetails.slot}
          </p>

          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p className="no_previous">No booking details available.</p>
      )}
    </div>
  );
};

export default LastBooking;
