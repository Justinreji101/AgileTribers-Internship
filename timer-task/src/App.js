import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1); // സെക്കൻഡിൽ ഒരിക്കൽ കൗണ്ടർ കൂടുക
    }, 1000);

    // Cleanup function (component unmount-ൽ ടൈമർ നിർത്തുക)
    return () => clearInterval(timer);
  }, []); // Empty dependency array = mount-ൽ മാത്രം റൺ ചെയ്യുക

  return (
    <div>
      <h1>Timer with Cleanup</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;