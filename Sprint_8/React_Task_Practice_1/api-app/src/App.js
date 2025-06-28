import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // JSONPlaceholder API-യിൽ നിന്ന് ഡാറ്റ ഫെച്ച് ചെയ്യുക
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array = mount-ൽ മാത്രം റൺ ചെയ്യുക

  return (
    <div>
      <h1>API Fetch Task</h1>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;