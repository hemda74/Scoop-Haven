import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';

type Props = {};
const TeamMemberPage: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Team Member | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}></main>
        ) : (
          <main className={`${styles.bodyContainer}`}></main>
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
