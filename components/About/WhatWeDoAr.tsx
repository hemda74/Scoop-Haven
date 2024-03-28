import Link from 'next/link';
import React from 'react';

const WhatWeDoAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner  banner--ar banner--full-overlay ">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg" />
            </picture>
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    ماذا نفعل فى كاسكو
                  </h1>
                  <p className="intro off-screen off-screen--rotate-up mt-3">
                    شركة استشارات إدارية عالمية متخصصة في استراتيجية العمليات
                    والتحول.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__bottom text-center banner__bottom--lower m-auto">
            <div className=" m-auto text-white">
              <span property="itemListElement" typeof="ListItem">
                <Link
                  title="Go to Home."
                  href="/"
                  className="home m-auto text-white">
                  <span property="name" className="me-2 ms-2 text-white">
                    الرئيسية
                  </span>
                </Link>
                <meta property="position" content="1" />
              </span>
              ›
              <span property="itemListElement" typeof="ListItem">
                <Link
                  title="Go to About."
                  href="/about/"
                  className="post post-page">
                  <span property="name" className="me-2 ms-2 text-white">
                    عن كاسكو
                  </span>
                </Link>
                <meta property="position" content="2" />
              </span>
              ›
              <span className="post post-page current-item me-2 ms-2 text-white cursor-pointer">
                ماذا نفعل فى كاسكو
              </span>
            </div>
          </div>
        </div>

        <div className="section section--std  off-screen--fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2
                  className="title title--lg red-2-color text-center"
                  style={{ marginBottom: '40px' }}>
                  Transforming operations
                </h2>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-1-color ">
                  Operations strategy and transformation
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`  With expertise spanning supply chain planning,
                    manufacturing, logistics, procurement, finance, and shared
                    services, we work together with clients to transform their
                    businesses and generate real change.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`A transformation involves making a step-change to the way a
                  company operates, allowing it to make better use of existing
                  competencies and infrastructure or to develop new ones. It
                  leads to a substantial improvement in performance.`}
                </p>
              </div>
              <div className="col-md-5" style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-2-color ">
                  Technical expertise and operational experience
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {` We apply a combination of deep technical expertise,
                      operational experience and broad business knowledge to
                      deliver lasting results.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`  All our people come from operational backgrounds and have been
                  through rigorous training, so we really know what we’re
                  talking about.`}
                </p>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-3-color ">
                  Personable with challenge where needed
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`Our positive, flexible and personal approach, with challenge
                    where needed, ensures buy-in at all levels of our clients’
                    businesses and a positive outcome.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`    We are engaging to work with and trusted by clients to get the
                  job done, and share a belief that the only thing that matters
                  is making a real difference for our clients.`}
                </span>
              </div>
              <div className="col-md-5 " style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-4-color ">
                  Global footprint with local expertise
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`      We have offices in Paris, London, Abu Dhabi, Amsterdam,
                    Atlanta, Auckland, Chicago, Dusseldorf, Hong Kong, Lausanne,
                    Melbourne, Mumbai, Riyadh, São Paulo, Singapore and Sydney.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`   With over 500 consultants worldwide in 16 offices, we have the
                  ability to provide our clients with local support coupled with
                  our renowned understanding of global best practice.`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoAr;
