import React, { useState, useEffect } from "react";
import quotes from "./quotes"; // import the quote list
import "./App.css"; // for styles

function getRandomIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function getRandomColor() {
  const colors = ["#264653", "#2a9d8f", "#e76f51", "#f4a261", "#e9c46a"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
  const [index, setIndex] = useState(0);
  const [bgColor, setBgColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(index);
    setIndex(newIndex);
    setBgColor(getRandomColor());
  };

  const currentQuote = quotes[index];

  return (
    <div
      className="App"
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="quote-box" style={{ background: "#fff", padding: "2rem", borderRadius: "10px", width: "500px" }}>
        <h2 style={{ color: bgColor }}>"{currentQuote.quote}"</h2>
        <p style={{ textAlign: "right", fontStyle: "italic", color: bgColor }}>
          - {currentQuote.author} -
        </p>
        <button
          style={{
            backgroundColor: bgColor,
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "1rem"
          }}
          onClick={handleNewQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
