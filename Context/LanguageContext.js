import React, { createContext, useContext, useState, useEffect } from 'react';
import transScript from '../helper/transScript';
import indexTrans from '../localization/index.trans';
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('lang', newLanguage);
    transScript(indexTrans);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

export { LanguageProvider, useLanguage };
