import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from './styles.module.css';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className={`${styles.toggleBtn} ${isDarkMode ? styles.dark : styles.light}`}
    >
      {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
};