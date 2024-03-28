import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import MainTeamPageEn from '../../../components/About/Team/KsaTeamEn';
import MainTeamPageAr from '../../../components/About/Team/KsaTeamAr';

type Props = {};
const TeamMemberPage: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>KAS TEAM| CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <MainTeamPageEn />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <MainTeamPageAr />
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
