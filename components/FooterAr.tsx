import Link from 'next/link';
import React from 'react';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
import { FaHeadphonesAlt, FaRegEnvelope } from 'react-icons/fa';
import { FaLocationDot, FaRegCircleQuestion } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="mt-25 mb-lg-0 mb-5 pb-lg-0 pb-3" dir="rtl">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-12 col-sm-4 col-12 mb-md-4 mb-lg-0">
              <a
                href="https://restro.infotechgravity.com/scoop-haven"
                className="footer-logo text-white">
                <img
                  src="https://restro.infotechgravity.com/storage/app/public/admin-assets/images/about/logo/logo-65019bd9905f0.png"
                  alt=""
                />
              </a>
              <p className="footersubtitle">
                {' '}
                Scoop Haven is a charming ice cream parlor nestled in the heart
                of a picturesque town.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-lg-8 col-md-12 col-sm-8 col-12">
              <div className="row justify-content-lg-end justify-content-md-between">
                <div className="col-md-4 col-6 mb-4 mb-md-0 px-0 ">
                  <h5 className="footer-title "> Links</h5>
                  <ul className="footer-right-side">
                    <li>
                      <Link href="/" className="mb-3">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="mb-3">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link href="/tablebook" className="mb-3">
                        Table Book
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-list" className="mb-3">
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-4 mb-md-0 px-0 ">
                  <h5 className="footer-title"> Other Pages</h5>
                  <ul className="footer-right-side">
                    <li>
                      <Link href="/aboutus" className="mb-3">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms_condition" className="mb-3">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacypolicy" className="mb-3">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/refundprivacypolicy" className="mb-3">
                        Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mb-4 mb-md-0 px-0 ">
                  <h5 className="footer-title"> Infromation</h5>
                  <ul className="footer-right-side">
                    <li>
                      <FaLocationDot size={20} />
                      <span className="px-2">
                        <a
                          href="https://www.google.com/maps/place/323/4323 Wakefield Street,Philadelphia, Pennsylvania(PA), 19145"
                          className="">
                          4323 Wakefield Street,Philadelphia, Pennsylvania(PA),
                          19145
                        </a>
                      </span>
                    </li>
                    <li>
                      <FaHeadphonesAlt size={20} />
                      <span className="px-2">
                        {' '}
                        <a href="tel:919499874557">919499874557</a>
                      </span>
                    </li>
                    <li>
                      <FaRegEnvelope size={20} />

                      <span className="px-2">
                        <a href="mailto:scoophaven@gmail.com">
                          scoophaven@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <FaRegCircleQuestion size={20} />
                      <span className="px-2">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#examplehours"
                          data-bs-whatever="@mdo">
                          Hours
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="d-block d-md-flex align-items-center justify-content-center justify-content-md-between pb-3">
            <p className="fs-7 pb-3 md-mb-0 lg-mb-0 xl-mb-0 text-md-start text-center">
              Copyright © 2023 Gravity Infotech. All Rights Reserved
            </p>
            <div className="ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light m-1 border-0 facebook"
                role="button"
                href="https://www.facebook.com/">
                <BsFacebook />
              </a>
              <a
                className="btn btn-outline-light m-1 border-0"
                href="https://twitter.com/"
                role="button">
                <BsTwitter />
              </a>
              <a
                className="btn btn-outline-light m-1 border-0"
                href="https://www.linkedin.com/"
                role="button">
                <BsLinkedin />
              </a>
              <a
                className="btn btn-outline-light m-1 border-0"
                href="https://www.instagram.com/"
                role="button">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
