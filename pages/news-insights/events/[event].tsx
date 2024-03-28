import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import MainPageEn from '../../../components/News&Insghits/MainPageEn';
import SingleEventEn from '../../../components/News&Insghits/SingleEventEn';

type Props = {};
// dymmy data for ui till handle working with api
const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Events | CASCO</title>
      </Head>
      <main>
        <SingleEventEn />
      </main>
    </>
  );
};
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default services;
