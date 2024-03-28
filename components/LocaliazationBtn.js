import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import styles from '../styles/Localizationbtn.module.css';
const LocalizationBtn = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      {language === 'en' ? (
        <button
          onClick={toggleLanguage}
          className={` btn ${styles.localizationBtn} m-0`}>
          <small>ع</small>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className={`btn ${styles.localizationBtn}`}>
          <small>E</small>
        </button>
      )}
    </div>
  );
};

export default LocalizationBtn;
