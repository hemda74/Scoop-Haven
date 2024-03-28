import Link from 'next/link';
import React from 'react';

const ThirdSectionMainAr = () => {
  return (
    <>
      <section className="bg-white strip-padding-lg">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 off-screen off-screen--hide off-screen--rotate-up">
              <h2 className="title title--lg red-1-color">
                المساعدة في التحديات الاستراتيجية
              </h2>
            </div>
            <div className="col-lg-7 col-md-9 off-screen off-screen--hide off-screen--rotate-up">
              <p className="intro text-black">
                نحن شركة استشارات إدارية عالمية متخصصة في استراتيجية العمليات
                والتحول. هذه مجموعة مختارة من التحديات الاستراتيجية التي نعمل
                عليها بانتظام.
              </p>
            </div>
          </div>
          <div className="row link-list off-screen off-screen--hide off-screen--link-list">
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operating-model/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  نموذج التشغيل
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/organisation-and-people/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  التنظيم والناس
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/competitiveness/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  القدرة التنافسية
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/working-capital-improvement/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  تحسين رأس المال العامل
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/mergers-and-acquisitions/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  عمليات الدمج والاستحواذ
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operations-agility/"
                className="d-flex align-items-center red-1-color">
                <div className="title title--sm title title--medium-weight red-1-color">
                  خفة العمليات
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSectionMainAr;
