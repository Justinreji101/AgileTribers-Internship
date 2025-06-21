import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);
  // In your Counter.js
const getCountColor = () => {
  if (count > 0) return '#28a745'; // Green for positive
  if (count < 0) return '#dc3545'; // Red for negative
  return '#333'; // Default color for zero
};

// Then in your JSX:
<div className="counter-display" style={{ color: getCountColor() }}>
  {count}
</div>

  // Styled container
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa'
  };

  // Styled counter display
  const countStyle = {
    fontSize: '3rem',
    margin: '20px 0',
    color: '#333',
    fontWeight: 'bold'
  };

  // Base button style
  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  // Specific button styles
  const incrementStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white'
  };

  const decrementStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white'
  };

  const resetStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    color: 'white'
  };

  // Hover effects
  const hoverEffect = {
    transform: 'scale(1.05)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  };
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-display">{count}</div>
      <div>
        <button 
          onClick={() => setCount(count + 1)}
          className="counter-button increment"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="counter-button decrement"
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          className="counter-button reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;