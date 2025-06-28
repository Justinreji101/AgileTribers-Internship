import { useContext } from 'react';
import { UserContext } from './UserContext';

export const UserProfile = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>Profile Component</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};