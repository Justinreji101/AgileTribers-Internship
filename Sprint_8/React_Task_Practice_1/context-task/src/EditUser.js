import { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export const EditUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
  };

  return (
    <div style={{ border: '2px solid #ddd', padding: '20px', margin: '10px' }}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Name"
        /><br/>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="Email"
        /><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};