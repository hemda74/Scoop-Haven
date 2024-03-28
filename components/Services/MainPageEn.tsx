import Link from 'next/link';
import React from 'react';

const MainPageEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="strip-padding-lg accent-background background ">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold text-white">
                    Services
                  </h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white">
                      {`       We help clients deliver operations driven transformations
                      in a single functional area or across multiple functions.`}
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
                    href="/services/operations-strategy/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Operations strategy{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/sustainability/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Sustainability{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/operational-performance/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Operational performance{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/new-products/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      New products{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/procurement/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Procurement{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/supply-chain-planning/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Supply chain planning{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/manufacturing/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Manufacturing{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/logistics/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Logistics{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/channels-to-market/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Channels to market{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/maintenance-and-after-sales/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Maintenance and <br />
                      after sales{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/transformation-management/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Transformation management{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/digital-and-it/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Digital and IT{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/finance/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      Finance{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/sga/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      SG&amp;A{' '}
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 col-lg-4">
                  <Link
                    href="/services/hr/"
                    className="d-flex align-items-center">
                    <div className="title title--sm title title--medium-weight">
                      HR{' '}
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
