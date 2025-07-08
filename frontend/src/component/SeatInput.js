import React from 'react';
import '../css/Seatinput.css';

const SeatInput = ({ text, noofSeat = {}, changeNoofseat }) => {
  const change_seats = (e) => {
    const name = e.target.name;
    const value = Number(e.target.value);
    const updated = { ...noofSeat, [name]: value };

    if (typeof changeNoofseat === 'function') {
      changeNoofseat(updated);
      window.localStorage.setItem("seats", JSON.stringify(updated));
    } else {
      console.error("changeNoofseat is not a function");
    }
  };

  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
      <input
        type='number'
        className='seat-input'
        placeholder='0'
        max="30"
        min="0"
        name={text}
        onChange={change_seats}
        value={noofSeat?.[text] ?? 0} 
      />
    </div>
  );
};

export default SeatInput;
