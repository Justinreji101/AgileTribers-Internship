import React, { useState, useEffect } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
  }, [clickCount]);
  return (
    <div>
      <h1>Document Title Toggle</h1>
      <p>Click the button to update document title</p>
      <button onClick={() => setClickCount(prev => prev + 1)}>
        Click Me
      </button>
      <p>Button clicked: {clickCount} times</p>
    </div>
  );
}

export default App;