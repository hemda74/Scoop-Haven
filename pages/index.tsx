import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import HeroEn from '../components/HomePage/Hero-en';
import HeroAr from '../components/HomePage/Hero-ar';
import CompaniesSectionEn from '../components/HomePage/Companies-Section-En';
import CompaniesSectionAr from '../components/HomePage/Companies-Section-Ar';
import SecondElementEn from '../components/HomePage/SecondElementEn';
import SecondElementAr from '../components/HomePage/SecondElementAr';
import ThirdSectionMainEn from '../components/HomePage/ThirdSectionMainEn';
import FourthSectionMainEn from '../components/HomePage/FourthSectionMainEn';
import ThirdSectionMainAr from '../components/HomePage/ThirdSectionMainAr';
import FourthSectionMainAr from '../components/HomePage/FourthSectionMainAr';
import styles from '../styles/Main.module.css';
type Props = {};
const Index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Home | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <HeroEn />
            <SecondElementEn />
            <CompaniesSectionEn />
            <ThirdSectionMainEn />
            <FourthSectionMainEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <HeroAr />
            <SecondElementAr />
            <CompaniesSectionAr />
            <ThirdSectionMainAr />
            <FourthSectionMainAr />
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
Index.getLayout = function getLayout(Index: ReactElement) {
  return <ViewerLayout childern={Index}></ViewerLayout>;
};
export default Index;
