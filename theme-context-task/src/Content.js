import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from './styles.module.css';

export const Content = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${styles.content} ${isDarkMode ? styles.dark : styles.light}`}>
      <h1 className={styles.title}>
        {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
      </h1>
      <p>Click the button to toggle themes</p>
    </div>
  );
};