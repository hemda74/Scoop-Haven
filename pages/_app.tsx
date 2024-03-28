import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css'; // impoting bootstrap.css file
import '../styles/bootstrapClasses.css'; // impoting customized bootstrap.css file
import { useEffect, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import transScript from '../helper/transScript';
import indexTrans from '../localization/index.trans';
import { NextPage } from 'next';
import Head from 'next/head';
import { LanguageProvider } from '../Context/LanguageContext';

// here we export the alias of next page with layout as optional.
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// here we are declaring nex page with layout as app props.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available.
  const getLayout = Component.getLayout ?? (page => page);

  // on first render import bootstrapfile.
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  // on every render make sure that web app is localized.
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang === null || lang === undefined) {
      localStorage.setItem('lang', 'en');
    } else {
      transScript(indexTrans);
    }
  });
  return (
    <>
      {/* <AuthGard> */}
      <LanguageProvider>
        {getLayout(<Component {...pageProps} />)}
      </LanguageProvider>
      {/* </AuthGard> */}
    </>
  );
}

export default MyApp;
