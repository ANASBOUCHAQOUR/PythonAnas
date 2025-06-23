import React from 'react';
import { ThemeProvider } from './components/ThemeSwitcher/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';
import './components/ThemeSwitcher/theme.css';

function App() {
  return (
    <ThemeProvider>
      <h1>🌗 Theme Switcher & Character Counter</h1>
      <ThemeSwitcher />
      <hr />
      <CharacterCounter />
    </ThemeProvider>
  );
}

export default App;
