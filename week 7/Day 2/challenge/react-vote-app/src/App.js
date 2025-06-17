import React, { useState } from 'react';
import './index.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteForLanguage = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-10">
      <h1 className="text-5xl font-bold mb-10">Vote Your Language!</h1>
      <div className="w-full max-w-xl flex flex-col gap-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-orange-100 border border-black rounded p-6"
          >
            <span className="text-2xl w-10 text-left">{lang.votes}</span>
            <span className="text-2xl flex-1 text-center">{lang.name}</span>
            <button
              onClick={() => voteForLanguage(index)}
              className="text-2xl text-green-600 font-semibold hover:underline"
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
