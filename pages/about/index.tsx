import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
import MeetOurTeamEn from '../../components/About/MeetOurTeamEn';
import Recogention from '../../components/About/Recogention';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';

type Props = {};
const Index = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>About | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />

            <AboutMainSectionEn />
            <MeetOurTeamEn />
            <Recogention />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <AboutMainSectionAr />
            <MeetOurTeamEn />
            <Recogention />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Index;
