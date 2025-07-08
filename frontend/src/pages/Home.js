import React, { useContext } from 'react';
import SelectMovie from '../component/SelectMovie';
import LastBooking from '../component/LastBooking';
import Timeshedule from '../component/Timeshedule';
import Selectseat from '../component/Selectseat';
import '../css/Home.css';
import BsContext from '../context/BsContext';

const Home = () => {
  const context = useContext(BsContext);

  const {
    movie,
    time,
    noofSeat, // make sure it's the correct spelling (matches BsState)
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot");
    } else {
      const selectedSeats = Object.values(noofSeat).reduce((a, b) => a + b, 0);
      if (selectedSeats === 0) {
        setErrorPopup(true);
        setErrorMessage("Please select at least one seat");
      } else {
        handlePostBooking();
      }
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_component">
          <SelectMovie />
        </div>
        <div className="last_booking_container">
          <LastBooking />
        </div>
      </div>

      <div className="time_seats_container">
        <Timeshedule />
        <Selectseat />

        <button className="BN-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
