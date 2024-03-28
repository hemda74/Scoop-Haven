import Link from 'next/link';
import React from 'react';

const ThirdSectionMainEn = () => {
  return (
    <>
      <section className="bg-white strip-padding-lg">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 off-screen off-screen--hide off-screen--rotate-up">
              <h2 className="title title--lg red-1-color">
                Helping with strategic challenges
              </h2>
            </div>
            <div className="col-lg-7 col-md-9 off-screen off-screen--hide off-screen--rotate-up">
              <p className="intro text-black">
                {`        We are a global management consultancy that specialises in
                operations strategy and transformation. These are a selection of
                the strategic challenges we regularly work on.`}
              </p>
            </div>
          </div>
          <div className="row link-list off-screen off-screen--hide off-screen--link-list">
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operating-model/"
                className="d-flex align-items-center red-2-color">
                <div className="title title--sm title title--medium-weight red-2-color">
                  Operating model
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/organisation-and-people/"
                className="d-flex align-items-center red-3-color">
                <div className="title title--sm title title--medium-weight red-3-color">
                  Organisation and people
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/competitiveness/"
                className="d-flex align-items-center red-4-color">
                <div className="title title--sm title title--medium-weight red-4-color">
                  Competitiveness
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/working-capital-improvement/"
                className="d-flex align-items-center red-5-color">
                <div className="title title--sm title title--medium-weight red-5-color">
                  Working capital improvement
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/mergers-and-acquisitions/"
                className="d-flex align-items-center red-3-color">
                <div className="title title--sm title title--medium-weight red-3-color">
                  Mergers and acquisitions
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operations-agility/"
                className="d-flex align-items-center red-5-color">
                <div className="title title--sm title title--medium-weight red-5-color">
                  Operations agility
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSectionMainEn;
