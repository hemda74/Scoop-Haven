import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import OurApproachEn from '../../components/About/OurApproachEn';
import OurApproachAr from '../../components/About/OurApproachAr';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';

type Props = {};
const TeamMemberPage = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Our Approach | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <OurApproachEn />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <OurApproachAr />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default TeamMemberPage;
