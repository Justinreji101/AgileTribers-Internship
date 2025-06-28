import React, { useContext } from 'react'; // Added React import
import { LanguageContext } from './LanguageContext';
import styles from './styles.module.css';

export const ContentDisplay = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className={styles.contentBox}>
      <h1 className={styles.welcomeText}>{translations[language].welcome}</h1>
      <p className={styles.contentText}>{translations[language].content}</p>
    </div>
  );
};