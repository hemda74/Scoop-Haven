import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import NewsMainPageEn from '../../../components/News&Insghits/NewsMainPageEn';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import NewsMainPageAr from '../../../components/News&Insghits/NewsMainPageAr';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>News | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <NewsMainPageEn />{' '}
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <NewsMainPageAr />
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
