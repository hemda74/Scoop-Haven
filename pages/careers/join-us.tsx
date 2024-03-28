import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import ApplicationJobEn from '../../components/Careers/ApplicationJobEn';
import ApplicationJobAr from '../../components/Careers/ApplicationJobAr';
import WhereIsNextEn from '../../components/WhereIsNextEn';
import WhereIsNextAr from '../../components/WhereIsNextAr';
import JoinUsEn from '../../components/Careers/JoinUsEn';
import JoinUsAr from '../../components/Careers/JoinUsAr';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Join Us | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <JoinUsEn />
            <ApplicationJobEn />
            <WhereIsNextEn />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <JoinUsAr />
            <ApplicationJobAr />
            <WhereIsNextAr />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};

export default Contactus;
