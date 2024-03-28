import React from 'react';
import Link from 'next/link';
const ContactUsEn = () => {
  return (
    <>
      <div className="breadcrumb-sec">
        <div className="container">
          <nav className="px-3">
            <h3 className="page-title text-white mb-2">Contact us</h3>
            <ol className="breadcrumb d-flex text-capitalize">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active ">Contact us</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ContactUsEn;
