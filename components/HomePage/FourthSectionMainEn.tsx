import Link from 'next/link';
import React from 'react';

const FourthSectionMainEn = () => {
  return (
    <>
      <section
        className="strip-padding-lg white-color banner--full-overlay banner red-1-background"
        style={{
          backgroundImage:
            'url(https://www.argonandco.com/wp-content/uploads/2019/10/Compass-edited-e1570192043957.jpg',
        }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 off-screen off-screen--hide off-screen--rotate-up">
              <h2 className="title title--lg">
                Helping with operational challenges
              </h2>
            </div>
            <div className="col-lg-7 col-md-9 off-screen off-screen--hide off-screen--rotate-up">
              <p className="intro">
                {` We dig deep to identify the root of complex problems and focus
                on delivering tangible results for clients, these are a
                selection of the operations challenges we regularly work on.`}
              </p>
            </div>
          </div>
          <div className="row link-list off-screen off-screen--hide off-screen--link-list">
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/sustainability/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Sustainability
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operational-performance/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Operational performance
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/new-products/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  New products
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/procurement/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Procurement
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/supply-chain-planning/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Supply chain planning
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/manufacturing/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Manufacturing
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/logistics/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Logistics
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/channels-to-market/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Channels to market
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/maintenance-and-after-sales/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Maintenance and
                  <br />
                  after sales
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/transformation-management/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Transformation management
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/digital-and-it/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Digital and IT
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/finance/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  Finance
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/sga/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  SG&amp;A
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/hr/"
                className="d-flex align-items-center white-color">
                <div className="title title--sm title title--medium-weight">
                  HR
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourthSectionMainEn;
