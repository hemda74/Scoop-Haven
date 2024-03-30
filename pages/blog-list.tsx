import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';

import BlogEn from '../components/BlogEn';
import BlogAr from '../components/BlogAr';

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
            <BlogEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <BlogAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Index;
