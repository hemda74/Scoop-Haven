import React, { useState } from 'react';
import Link from 'next/link';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsQuestionCircle,
} from 'react-icons/bs';
const ContactUsAr = () => {
  const daysOfWeek = [
    { day: 'MONDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'TUESDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'WEDNESDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'THURSDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'FRIDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'SATURDAY', hours: '09:00 AM to 09:00 PM' },
    { day: 'SUNDAY', hours: '09:00 AM to 09:00 PM' },
  ];
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };
  return (
    <>
      <div className="breadcrumb-sec">
        <div className="container">
          <nav className="px-3">
            <h3 className="page-title text-white mb-2">Contact us</h3>
            <ol className="breadcrumb d-flex text-capitalize">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">
                  الرئيسية
                </Link>
              </li>
              <li className="breadcrumb-item-ar active me-2 ">/</li>

              <li className="breadcrumb-item-ar active me-2 ">تواصل معنا</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="mt-3">
        <div className="container">
          <div className="row gx-sm-3 gx-0 contact-form">
            <div className="col-12 col-lg-8 col-sm-12 col-auto mb-4 mb-lg-0">
              <div className="card shadow rounded-5 h-100 select-delivery py-3 px-sm-2 px-0">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <h2 className="page-title mb-1 px-2">تواصل معنا</h2>
                      <p className="page-subtitle px-2 mb-3 md-mb-5"></p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="first_name" className="form-label">
                          الاسم الاول<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="text"
                          className="form-control input-h"
                          name="first_name"
                          id="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="last_name" className="form-label">
                          اللقب<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="text"
                          className="form-control input-h"
                          name="last_name"
                          id="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="email" className="form-label">
                          الايميل<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="email"
                          className="form-control input-h"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="mobile" className="form-label">
                          الموبايل<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="tel"
                          className="form-control input-h"
                          name="mobile"
                          id="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Mobile"
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-4">
                        <label htmlFor="message" className="form-label">
                          الرسالة<span className="text-danger"> * </span>
                        </label>
                        <textarea
                          className="form-control input-h"
                          rows={5}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div
                          className="g-recaptcha"
                          data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                      </div>
                      <div className="col d-flex justify-content-end mt-2">
                        <button
                          type="submit"
                          className="btn-primary mobile-viwe-btn">
                          تسجيل
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-sm-12 col-auto">
              <div className="card contact-details rounded-5">
                <div className="card-body mx-3">
                  <h4 className="page-title mb-4">Contact Details</h4>
                  <ul className="contact-right-side">
                    <li>
                      <i className="fa-solid fa-location-dot"></i>
                      <span>
                        <a href="#" className="px-2">
                          {' '}
                          4323 Wakefield Street,Philadelphia, Pennsylvania(PA),
                          19145
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-headphones"></i>
                      <span className="px-2">
                        Call US<a href="tel:919499874557"> +919499874557</a>
                      </span>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope"></i>
                      <span className="px-2">
                        Email
                        <a href="mailto:scoophaven@gmail.com">
                          {' '}
                          scoophaven@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <BsQuestionCircle />
                      <span className="px-2">
                        Hours
                        <br />
                        {daysOfWeek.map(day => (
                          <>
                            <a href="#" key={day.day}>
                              {day.day} -- ({day.hours})
                            </a>
                            <br />
                          </>
                        ))}
                      </span>
                    </li>
                  </ul>
                  <hr className="my-4" />
                  <h5 className="title mb-2">Social Share</h5>
                  <div className="social-share">
                    <a
                      className="btn btn-outline-dark m-1 border facebook text-white"
                      href="https://www.facebook.com/"
                      role="button">
                      <BsFacebook />
                    </a>
                    <a
                      className="btn btn-outline-dark m-1 border text-white"
                      href="https://twitter.com/"
                      role="button">
                      <BsTwitter />
                    </a>
                    <a
                      className="btn btn-outline-dark m-1 border text-white"
                      href="https://www.linkedin.com/"
                      role="button">
                      <BsLinkedin />
                    </a>
                    <a
                      className="btn btn-outline-dark m-1 border text-white"
                      href="https://www.instagram.com/"
                      role="button">
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsAr;
