import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import WhatsLink from '../components/WhatsLink';
import { useLanguage } from '../Context/LanguageContext';
import styles from '../styles/Main.module.css';
import FooterAr from '../components/FooterAr';

// decaling an alias for layout childern
// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};
// vieweres Layout.
const ViewerLayout = ({ childern }: LayoutProps) => {
  const { language } = useLanguage();
  return (
    <>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <NavBar />
          {/* <PagesHeader />*/}
          <WhatsLink />
          {/* <Newnavbar/> */}
          <main>{childern}</main>
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <NavBar />
          {/* <PagesHeader />*/}
          <WhatsLink />
          {/* <Newnavbar/> */}
          <main>{childern}</main>
          <FooterAr />
        </main>
      )}
    </>
  );
};

export default ViewerLayout;
