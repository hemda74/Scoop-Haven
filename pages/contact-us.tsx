import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';
import ContactUsEn from '../components/Contact Us/ContactUsEn';
import ContactUsAr from '../components/Contact Us/ContactUsAr';
import Footer from '../components/Footer';
import OldNavBar from '../components/OldNavBar';
import FooterAr from '../components/FooterAr';

type Props = {};
// dymmy data for ui till handle working with api
const Contactus = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Contact Us | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <ContactUsEn />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <ContactUsAr />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Contactus;
