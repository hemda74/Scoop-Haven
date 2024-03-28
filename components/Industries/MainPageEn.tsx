import Link from 'next/link';
import React from 'react';

const MainPageEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="strip-padding-lg white-color accent-background background">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold">Industries</h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white mt-lg-5">
                      {`    We work across multiple industries, with a range of
                      organisations from local mid-market companies to some of
                      the world’s biggest brands.`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--std">
            <div className="container">
              <div className="row link-list off-screen off-screen--link-list">
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/automotive/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Automotive
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/aerospace-and-defence/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Aerospace and defence
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/consumer-goods/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Consumer goods
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/energy-and-utilities/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Energy and utilities
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/fashion/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Fashion
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/food-and-drink/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Food and drink
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/industrial-and-chemicals/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Industrial and chemicals
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/life-sciences/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Life sciences
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/luxury-goods/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Luxury goods
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/private-equity/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Private equity
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/retail-and-e-commerce/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Retail and e-commerce
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/services/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Services
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/industries/transport-and-logistics/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Transport and logistics
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPageEn;
