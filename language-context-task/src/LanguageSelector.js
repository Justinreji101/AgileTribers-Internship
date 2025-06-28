import React, { useContext } from 'react'; // Import React and useContext
import { LanguageContext } from './LanguageContext'; // Import LanguageContext
import styles from './styles.module.css'; // Import CSS module

export const LanguageSelector = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  return (
    <div className={styles.languageSelector}>
      <h3>{translations[language].change}</h3>
      <div>
        <button 
          onClick={() => setLanguage('en')} 
          className={`${styles.selectBtn} ${language === 'en' ? styles.active : ''}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('es')} 
          className={`${styles.selectBtn} ${language === 'es' ? styles.active : ''}`}
        >
          Español
        </button>
        <button 
          onClick={() => setLanguage('ml')} 
          className={`${styles.selectBtn} ${language === 'ml' ? styles.active : ''}`}
        >
          മലയാളം
        </button>
        <button 
          onClick={() => setLanguage('ta')} 
          className={`${styles.selectBtn} ${language === 'ta' ? styles.active : ''}`}
        >
          தமிழ்
        </button>
      </div>
    </div>
  );
};