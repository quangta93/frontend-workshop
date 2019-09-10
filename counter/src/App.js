import React, { useState } from 'react';
import './App.css';

export default () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter => (counter + 1));

  return (
    <div className="container">
      <p className="display">{counter}</p>
      <button className="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}
