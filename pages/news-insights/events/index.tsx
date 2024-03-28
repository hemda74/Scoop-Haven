import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import EventsEn from '../../../components/News&Insghits/EventsEn';

type Props = {};
// dymmy data for ui till handle working with api
const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Events | CASCO</title>
      </Head>
      <main>
        <EventsEn />
      </main>
    </>
  );
};
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default services;
