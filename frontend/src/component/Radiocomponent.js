import React from 'react';
import '../css/RadioComponent.css';

const Radiocomponent = ({ text, changeSelection, data }) => {
  const handleChecked = (val) => {
    if (typeof changeSelection === 'function') {
      changeSelection(val);
    } else {
      console.error('❌ changeSelection is not a function:', changeSelection);
    }
  };

  return (
    <div
      name={text}
      className={`form-check-label ${data === text ? 'active' : 'inactive'}`}
      onClick={() => handleChecked(text)} // ✅ calls the function properly
    >
      <span className="text">{text}</span>
    </div>
  );
};

export default Radiocomponent;
