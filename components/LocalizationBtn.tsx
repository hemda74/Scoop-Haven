import Image from 'next/image';
import React from 'react';
import changeLang from '../helper/changeLang';
import styles from '../styles/Localizationbtn.module.css';
import ar from '../public/ar.svg';
import { useLanguage } from '../Context/LanguageContext';
// Define styles as props alias.
type Props = {
  readonly [key: string]: string;
};
// localization button is used in loginpage, forgetpass ..etc.
const LocalizationBtn = (props: Props) => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="mt-4">
      <button
        className={`myPrimary ${styles.localizationBtn}`}
        onClick={
          // Changing language function.
          toggleLanguage
        }>
        <span data-trans="langs">E</span>
      </button>
    </div>
  );
};

export default LocalizationBtn;
