import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';
import LoginAr from '../components/LoginAr';
import LoginEn from '../components/LoginEn';

type Props = {};
const Index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Scoop Haven</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <LoginEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <LoginAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Index;
