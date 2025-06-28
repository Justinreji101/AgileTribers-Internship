import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []);

  return (
    <div>
      <h1>useEffect Task 1</h1>
      <p>Check browser console (F12) for the message.</p>
    </div>
  );
}

export default App;