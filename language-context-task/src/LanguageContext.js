import { createContext, useState } from 'react'; // Added useState import

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const translations = {
    en: {
      welcome: "Welcome",
      change: "Change Language",
      content: "This content is in English"
    },
    es: {
      welcome: "Bienvenido",
      change: "Cambiar Idioma",
      content: "Este contenido está en español"
    },
    ml: {
      welcome: "സ്വാഗതം",
      change: "ഭാഷ മാറ്റുക",
      content: "ഈ ഉള്ളടക്കം മലയാളത്തിലാണ്"
    },
    ta: {
      welcome: "வரவேற்பு",
      change: "மொழியை மாற்றவும்",
      content: "இந்த உள்ளடக்கம் தமிழில் உள்ளது"
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};