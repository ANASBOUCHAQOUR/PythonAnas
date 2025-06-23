import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef();
  const [length, setLength] = useState(0);

  const handleInput = () => {
    setLength(inputRef.current.value.length);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
      />
      <p>Character count: {length}</p>
    </div>
  );
};

export default CharacterCounter;
