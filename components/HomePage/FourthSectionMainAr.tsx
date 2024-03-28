import Link from 'next/link';
import React from 'react';

const FourthSectionMainAr = () => {
  return (
    <>
      <section
        dir="rtl"
        className="strip-padding-lg white-color banner--full-overlay banner red-1-background"
        style={{
          backgroundImage:
            'url(https://www.argonandco.com/wp-content/uploads/2019/10/Compass-edited-e1570192043957.jpg',
        }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12 off-screen off-screen--hide off-screen--rotate-up">
              <h2 className="title title--lg">
                المساعدة في التحديات التشغيلية
              </h2>
            </div>
            <div className="col-lg-7 col-md-9 off-screen off-screen--hide off-screen--rotate-up">
              <p className="intro">
                نحن نحفر بعمق لتحديد جذور المشاكل المعقدة والتركيز عليها على
                تحقيق نتائج ملموسة للعملاء، وهذه هي اختيار تحديات العمليات التي
                نعمل عليها بانتظام.
              </p>
            </div>
          </div>
          <div className="row link-list off-screen off-screen--hide off-screen--link-list">
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/sustainability/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  الاستدامة
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/operational-performance/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  الاداء العملي
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/new-products/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  المنتجات الجديدة{' '}
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/procurement/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  التحصيل
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/supply-chain-planning/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  تخطيط سلسلة الإمداد
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/manufacturing/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  التصنيع
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/logistics/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  الخدمات اللوجستية
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/channels-to-market/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  قنوات التسويق
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/maintenance-and-after-sales/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  صيانة و بعد البيع
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/transformation-management/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  إدارة التحول
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/digital-and-it/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  تكنولوجيا المعلومات
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/finance/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  الموارد المالية
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/sga/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  SG&amp;A
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <Link
                href="/services/hr/"
                className="d-flex align-items-center white-color">
                <div className="title title--md title title--medium-weight">
                  الموارد البشرية
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourthSectionMainAr;
