import React, { useState } from 'react';

// Renamed from App to VotingApp to fit the structure
export default function VotingApp() { 
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteForLanguage = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes++;
    setLanguages(newLanguages);
  };

  return (
    // The JSX from the previous example goes here...
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-md mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Vote Your Language!
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-2 space-y-2">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-orange-100 border border-black rounded p-6"
            >
              <span className="text-2xl w-16 flex justify-center items-center">{lang.votes}</span>
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
    </div>
  );
}