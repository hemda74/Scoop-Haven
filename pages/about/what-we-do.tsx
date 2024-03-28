import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import WhatWeDoEn from '../../components/About/WhatWeDoEn';
import WhatWeDoAr from '../../components/About/WhatWeDoAr';
import TestmonalialsEn from '../../components/About/TestmonalialsEn';
import TestmonalialsAr from '../../components/About/TestmonalialsAr';
import WhereIsNextEn from '../../components/WhereIsNextEn';
import WhereIsNextAr from '../../components/WhereIsNextAr';

type Props = {};
const TeamMemberPage: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>What We Do | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <WhatWeDoEn />
            <TestmonalialsEn />
            <WhereIsNextEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <WhatWeDoAr />
            <TestmonalialsAr />
            <WhereIsNextAr />
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
TeamMemberPage.getLayout = function getLayout(TeamMemberPage: ReactElement) {
  return <ViewerLayout childern={TeamMemberPage}></ViewerLayout>;
};
export default TeamMemberPage;
