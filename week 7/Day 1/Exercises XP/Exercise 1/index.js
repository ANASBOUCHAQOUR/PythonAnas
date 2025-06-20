// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render App into the #root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);