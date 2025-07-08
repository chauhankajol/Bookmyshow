// Selectseat.js
import React, { useContext } from 'react';
import SeatInput from './SeatInput';
import { seats } from '../pages/data';
import '../css/Selectseat.css';
import BsContext from '../context/BsContext';

const Selectseat = () => {
  const {  noofSeat,changeNoofseat,} = useContext(BsContext);

  return (
     <div className='ss_main_container'>
    {seats.map((el, index) => (
      <SeatInput
        key={index}
        text={el}
        noofSeat={noofSeat}
        changeNoofseat={changeNoofseat}
      />
    ))}
  </div>
  );
};

export default Selectseat;

