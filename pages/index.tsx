import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import styles from '../styles/Main.module.css';
import MainPageAr from '../components/MainPageAr';
import MainPageEn from '../components/MainPageEn';
type Props = {};
const Index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  // Array of product data
  const products = [
    {
      id: '1',
      name: 'Blue Berry Ice Cream',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '€120.00',
      discountedPrice: '€125.00',
      imageUrl:
        'https://restro.infotechgravity.com/storage/app/public/item/item-65018a0f15010.webp',
    },
    {
      id: '2',
      name: 'Vanilla Bean Ice Cream',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '€100.00',
      discountedPrice: '€110.00',
      imageUrl:
        'https://restro.infotechgravity.com/storage/app/public/item/item-65018a303a21e.webp',
    },
    {
      id: '3',
      name: 'Chocolate Chip Cookie Dough Ice Cream',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: '€130.00',
      discountedPrice: '€135.00',
      imageUrl:
        'https://restro.infotechgravity.com/storage/app/public/item/item-65018a474ae12.webp',
    },
  ];
  return (
    <>
      <Head>
        <title>Scoop Haven</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <MainPageEn items={products} data={products[1]} />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <MainPageAr items={products} data={products[2]} />
          </main>
        )}
      </Layout>
    </>
  );
};
export default Index;
