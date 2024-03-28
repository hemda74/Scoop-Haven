import React from 'react';
import MainPageEn from './MainPageEn';
import Link from 'next/link';

const ServiceAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner banner--ar banner--full-overlay ">
          <div className="banner__background">
            <picture>
              <img src="https://www.argonandco.com/wp-content/uploads/2020/06/man-planting-plant-169523-scaled-e1592389025453.jpg" />
            </picture>
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    استشارات الاستدامة
                  </h1>
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
                  title="Go to Services."
                  href="/services/"
                  className="post post-page">
                  <span property="name" className="me-2 ms-2 text-white">
                    الخدمات
                  </span>
                </Link>
                <meta property="position" content="2" />
              </span>
              ›
              <span className="post post-page current-item me-2 ms-2 text-white cursor-pointer">
                استشارات الاستدامة
              </span>
            </div>
          </div>
        </div>

        {/* <span style="display:none;">
            5111Array
(
)
        </span> */}
        <section className="main-page">
          <div className="container">
            <div className="row off-screen off-screen--fade-up justify-content-center">
              <div className="col-lg-7">
                <div className="the-content">
                  <h2>الاستدامة</h2>
                  <p>
                    {`
                    Driven by increasing regulation and more environmentally
                    conscious consumer behaviour, sustainability is moving up
                    the agenda for business leaders. Industries where reputation
                    is critical, such as luxury goods, are making this their
                    number one priority.
                 `}
                  </p>
                  <p>
                    {`
                    While awareness is growing, there are still gaps. Businesses
                    may lack breadth of understanding, with a focus mainly on
                    carbon footprint, depth of understanding, with analysis only
                    concerning ‘direct’ impacts, excluding ‘indirect’ impacts
                    like raw materials, or both.
                 `}
                  </p>
                  <h2>First steps to sustainability</h2>
                  <p>
                    {`
                    The first step is therefore to ensure that the business has
                    full end-to-end visibility of the impact of their operations
                    on all the major indicators like CO2, pollution, and water,
                    from the extraction of raw materials to the sale of the
                    finished product, to identify where to focus efforts
                 `}
                  </p>
                  <p>
                    {`
                    Modelling capability and understanding of source data allow
                    businesses to conduct Life Cycle Analysis, which is
                    essential to identify and prioritise improvement levers like
                    eco-design, supplier selection, reduction of impacts in
                    production, transport optimisation, financial reporting, and
                    many more.
                 `}
                  </p>
                  <h2>Sustainability transformation</h2>
                  <p>
                    {`
                    The second step is actually transforming the business’
                    operations to reduce their environmental impact by
                    activating the improvement levers identified – cost,
                    inventory, and service.
                 `}
                  </p>
                  <p>
                    {`
                    Like any ambitious and complex transformation, it requires
                    strong technical and business expertise to drive the
                    changes, and to maintain and improve performance.
                 `}
                  </p>
                  <h2>Helping with sustainability challenges</h2>
                  <p>
                    {`
                    Our team of experts in sustainability consultancy dig deep
                    to identify the root of complex problems and focus on
                    delivering tangible results for clients. The menu bar on
                    this page provides more detail on a selection of the
                    sustainability challenges we regularly work on.
                 `}
                  </p>
                  <p>
                    {`
                    We apply a combination of technical expertise, operational
                    experience, business knowledge and common sense to help our
                    clients understand and address sustainability impacts,
                    embedding real change and delivering lasting results. Our
                    positive, flexible and personal approach, with challenge
                    where needed, ensures buy-in at all levels of our clients’
                    businesses and a positive outcome.  `}
                    <Link href="/about/">Learn more about us here.</Link>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 offset-lg-1 sidebar">
                <div className="pad-40 light-grey-background red-1-border-top contact-card2">
                  <div className="row align-items-start">
                    <div className="col-md-12">
                      <h4 className="title title--sm red-1-color">
                        Contact our sustainability experts
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <p className="p--large">
                        <strong>Yannick Migotto</strong>
                      </p>
                      <p>{`Partner`} </p>
                    </div>
                    <div className="col-md-12 contact-details">
                      <p className="no-wrap">
                        <span className="data-label red-1-color">
                          الهاتف <br />
                        </span>
                      </p>
                      <p className="no-wrap">
                        <span className="data-label red-1-color">
                          الايميل <br />
                        </span>
                        <a
                          className="text-black"
                          href="mailto: sustainability.france@argonandco.com">
                          sustainability.france@argonandco.com
                        </a>
                      </p>
                    </div>
                    <div className="contact-card__profile2">
                      <picture className="circle-img circle-img--small">
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2021/10/Yannick-MIGOTTO-300x300.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2021/10/Yannick-MIGOTTO-300x300.jpg" />
                      </picture>
                    </div>
                  </div>
                </div>

                <div className="pad-40 light-grey-background red-1-border-top contact-card2 en-contact">
                  <div className="row align-items-end">
                    <div className="col-md-12">
                      <h4 className="title title--sm red-1-color">
                        Contact our sustainability experts
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <p className="p--large">
                        <strong>Judith Richardson</strong>
                      </p>
                      <p>{`Managing Principal`} </p>
                    </div>
                    <div className="col-md-12 contact-details">
                      <p>
                        <span className="data-label red-1-color">
                          الهاتف <br />
                        </span>
                        +44 (0) 845 644 6972
                      </p>
                      <p>
                        <span className="data-label red-1-color">
                          الايميل
                          <br />
                        </span>
                        <a
                          className="text-black"
                          href="mailto: sustainability.uk@argonandco.com">
                          sustainability.uk@argonandco.com
                        </a>
                      </p>
                    </div>
                    <div className="contact-card__profile2">
                      <img
                        src="https://www.argonandco.com/wp-content/uploads/2020/06/Judith-e1591263832521-300x300.jpg"
                        className="circle-img circle-img--small"
                      />
                    </div>
                  </div>
                </div>

                <div className="sidebar-nav black-background red-4-border-top">
                  <div className="title title--sm title--medium-weight">
                    اعرف المزيد عن خدماتنا
                  </div>
                  <ul>
                    <li className="">
                      <Link href="/services/green-operations-strategy/">
                        Green operations strategy
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/environmental-impact-maturity-analysis/">
                        Environmental impact &amp; maturity analysis
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/sustainable-operations-transformation/">
                        Sustainable operations transformation
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/design-for-sustainability/">
                        Design for sustainability
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/sustainable-sourcing-strategy/">
                        Sustainable sourcing strategy
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/sustainable-manufacturing/">
                        Sustainable manufacturing
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/sustainable-distribution/">
                        Sustainable distribution
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/services/sustainable-finance/">
                        Sustainable finance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceAr;
