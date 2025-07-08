import React, { useContext } from 'react';
import Radiocomponent from './Radiocomponent';
import { movielist } from '../pages/data';
import '../css/SelectMovie.css';
import BsContext from '../context/BsContext';

const SelectMovie = () => {
  const context = useContext(BsContext);

  if (!context) {
    return <p>Error loading movie selection</p>;
  }

  const { movie, changeMovie } = context;

  const handleChangemovie = (val) => {
    changeMovie(val);
    window.localStorage.setItem("movie", val);
  };

  return (
    <>
      <h1 className='SM_heading'>Select A Movie</h1>
      <div className='SM_main_container'>
        {movielist.map((el, index) => (
          <Radiocomponent
            text={el}
            key={index}
            data={movie}
            changeSelection={handleChangemovie}
          />
        ))}
      </div>
    </>
  );
};

export default SelectMovie;
