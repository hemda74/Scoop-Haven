import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import WhitePaperMainEn from '../../../components/News&Insghits/WhitePaperMainEn';
import WhitePaperMainAr from '../../../components/News&Insghits/WhitePaperMainAr';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>White Papers | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <WhitePaperMainEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <WhitePaperMainAr />
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};

export default Contactus;
