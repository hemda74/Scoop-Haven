import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';
import ViewerLayout from '../layouts/ViewerLayout';
import AboutUsEn from '../components/AboutUsEn';
import AboutUsAr from '../components/AboutUsAr';

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
            <AboutUsEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <AboutUsAr />
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
