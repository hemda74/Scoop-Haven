import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';
import ViewerLayout from '../layouts/ViewerLayout';
import TermsConditionsEn from '../components/TermsCondtionsEn';
import TermsConditionsAr from '../components/TermsConditionsAr';
import PrivacyPolicyEn from '../components/PrivacyPolicyEn';
import PrivacyPolicyAr from '../components/PrivacyPolicyAr';

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
            <PrivacyPolicyEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <PrivacyPolicyAr />
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
