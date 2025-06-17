import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter! Input: ${e.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(prev => !prev);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      <button onClick={toggleButton}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
