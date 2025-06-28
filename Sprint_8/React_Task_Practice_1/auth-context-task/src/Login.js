import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import styles from './styles.module.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
        <button
          type="submit"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          Login
        </button>
      </form>
    </div>
  );
};