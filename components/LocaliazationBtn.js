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
          className={`btn ${styles.localizationBtn}`}>
          <img
            src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/language/flag-6512d2ebb7e1b.png"
            alt=""
            className="language-items-img"
          />
          <span className="px-2">Arabic</span>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className={`btn ${styles.localizationBtn}`}>
          <img
            src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/language/flag-6512d2e343e92.png"
            alt=""
            className="language-items-img"
          />
          <span className="px-2">English</span>
        </button>
      )}
    </div>
  );
};

export default LocalizationBtn;
