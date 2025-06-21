import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <div className={`theme-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <h2>Theme Toggle</h2>
      <button onClick={toggleTheme} className="theme-btn">
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <p>Current mode: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
};

export default ThemeToggle;