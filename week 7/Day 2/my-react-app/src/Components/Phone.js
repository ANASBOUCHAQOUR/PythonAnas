import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020
  });

  const changeColor = () => {
    setPhone(prev => ({ ...prev, color: 'blue' }));
  };

  return (
    <div>
      <h1>My {phone.brand}</h1>
      <p>It is a {phone.color} {phone.model} from {phone.year}.</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
