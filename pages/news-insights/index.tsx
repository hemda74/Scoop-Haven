import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import MainPageAr from '../../components/News&Insghits/MainPageAr';
import styles from '../../styles/Main.module.css';
import MainPageEn from '../../components/News&Insghits/MainPageEn';
import OldNavBar from '../../components/OldNavBar';
import FooterAr from '../../components/FooterAr';
type Props = {};
const Index = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>NEWS & INSIGITHS | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <MainPageEn />
            <FooterAr />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <MainPageAr />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Index;
