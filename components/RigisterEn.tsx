import Link from 'next/link';
import React, { useState } from 'react';
const RigisterEn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section className="mt-0 registration">
        <div className="row m-0 vh-100">
          <div className="col-lg-6 col-12 md_vh-100 py-5 my-0 d-flex justify-content-center align-items-center m-auto bg-light overflow-y-scroll">
            <div className="right-side row justify-content-center align-items-center g-0">
              <div className="col-xl-9 col-lg-10">
                <div className="card shadow rounded-5">
                  <div className="card-body">
                    <form
                      className="row align-items-center justify-content-center m-auto py-md-3 py-lg-0 py-xxl-3"
                      onSubmit={handleSubmit}>
                      <div className="col-md-10">
                        <h2 className="form-title">Register</h2>
                        <p className="page-subtitle col line-limit-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quam quasi odio corrupti, sunt esse atque, sed
                          quidem facilis nulla veritatis consectetur est.
                        </p>
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="Name" className="form-label">
                          Name<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="text"
                          className="form-control input-h"
                          name="name"
                          id="Name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email<span className="text-danger"> * </span>
                        </label>
                        <input
                          type="email"
                          className="form-control input-h"
                          name="email"
                          id="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control input-h"
                          name="mobile"
                          id="mobile"
                          placeholder="Mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="password" className="form-label">
                          Password<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="password"
                          className="form-control input-h"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-10 mb-3 d-flex align-items-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                          id="flexCheckDefault"
                          checked
                          required
                        />
                        <label
                          className="form-check-label mx-2 page-subtitle mb-0"
                          htmlFor="flexCheckDefault">
                          I accept the
                          <Link
                            href="/terms_condition"
                            className="text-primary fw-semibold text-dark">
                            Terms &amp; Conditions
                          </Link>
                        </label>
                      </div>
                      <div className="col-md-10 mb-3 d-flex align-items-center">
                        <div className="col-12">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LeJATImAAAAACnNFVNbxjCRseVp4lcQn8FdFI9N"></div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center col-md-10 mb-3">
                        <input
                          className="btn-primary w-100 text-center"
                          type="submit"
                          value="Register"
                        />
                      </div>
                      <p className="page-subtitle text-center">
                        Already have an account?
                        <Link
                          href="/login"
                          className="text-primary fw-semibold text-dark">
                          Login
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block p-0">
            <div className="left-side vh-100 d-flex justify-content-center align-items-center m-auto">
              <img
                src="https://restro.infotechgravity.com/storage/app/public//images/login.jpg"
                alt=""
                className="w-100 vh-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RigisterEn;
