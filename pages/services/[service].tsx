import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import ServiceAr from '../../components/Services/ServiceAr';
import ServiceEn from '../../components/Services/ServiceEn';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Services | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <ServiceEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <ServiceAr />
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
