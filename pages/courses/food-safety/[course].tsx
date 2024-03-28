import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import OldNavBar from '../../../components/OldNavBar';
import Footer from '../../../components/Footer';
import FooterAr from '../../../components/FooterAr';
import CourseEn from '../../../components/Courses/CourseEn';
import CourseAr from '../../../components/Courses/CourseAr';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <CourseEn />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <CourseAr />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};

export default Contactus;
