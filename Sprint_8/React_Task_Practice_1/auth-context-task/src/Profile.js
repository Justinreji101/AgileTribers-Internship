import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import styles from './styles.module.css';

export const Profile = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  if (!isAuthenticated) return null;

  return (
    <div className={styles.authContainer}>
      <div className={styles.welcomeMessage}>
        Welcome, <strong>{user.username}</strong>!
      </div>
      <button
        onClick={logout}
        className={`${styles.btn} ${styles.btnDanger}`}
      >
        Logout
      </button>
    </div>
  );
};