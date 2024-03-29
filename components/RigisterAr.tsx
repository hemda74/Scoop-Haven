import React from 'react';

const RigisterAr = () => {
  return (
    <>
      <section className=" registration" dir="rtl">
        <div className="row m-0 vh-100">
          <div className="col-lg-6 col-12 md_vh-100 py-5 my-0 d-flex justify-content-center align-items-center m-auto bg-light overflow-y-scroll">
            <div className="right-side row justify-content-center align-items-center g-0">
              <div className="col-xl-9 col-lg-10">
                <div className="card shadow rounded-5">
                  <div className="card-body">
                    <form
                      className="row align-items-center justify-content-center m-auto py-md-3 py-lg-0 py-xxl-3"
                      method="POST"
                      action="https://restro.infotechgravity.com/scoop-haven/register_customer">
                      <input
                        type="hidden"
                        name="_token"
                        value="sNUaYoThesftfi9L4dMQZ63ONX49yrcwdpHgLjq5"
                      />{' '}
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
                          type="name"
                          className="form-control input-h"
                          name="name"
                          placeholder="Name"
                          id="Name"
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
                          placeholder="Email"
                          id="email"
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
                          placeholder="Mobile"
                          id="mobile"
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
                          placeholder="Password"
                          id="password"
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
                          <a
                            href="https://restro.infotechgravity.com/scoop-haven/terms_condition"
                            className="text-primary fw-semibold text-dark">
                            Terms &amp; Conditions
                          </a>
                        </label>
                      </div>
                      <div className="col-md-10 mb-3 d-flex align-items-center">
                        <div className="col-12">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LeJATImAAAAACnNFVNbxjCRseVp4lcQn8FdFI9N">
                            <div style={{ width: '304px', height: '78px' }}>
                              <div>
                                <iframe
                                  title="reCAPTCHA"
                                  width="304"
                                  height="78"
                                  role="presentation"
                                  name="a-4fgrar2qmmvv"
                                  frameBorder="0"
                                  scrolling="no"
                                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeJATImAAAAACnNFVNbxjCRseVp4lcQn8FdFI9N&amp;co=aHR0cHM6Ly9yZXN0cm8uaW5mb3RlY2hncmF2aXR5LmNvbTo0NDM.&amp;hl=en&amp;v=moV1mTgQ6S91nuTnmll4Y9yf&amp;size=normal&amp;cb=wlfimuaaa1t5"></iframe>
                              </div>
                              <textarea
                                id="g-recaptcha-response"
                                name="g-recaptcha-response"
                                className="g-recaptcha-response"
                                style={{
                                  width: '250px',
                                  height: '40px',
                                  border: '1px solid rgb(193, 193, 193)',
                                  margin: '10px 25px',
                                  padding: '0px',
                                  resize: 'none',
                                  display: 'none',
                                }}></textarea>
                            </div>
                            <iframe style={{ display: 'none' }}></iframe>
                          </div>
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
                        <a
                          href="https://restro.infotechgravity.com/scoop-haven/login"
                          className="text-primary fw-semibold text-dark">
                          Login
                        </a>
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

export default RigisterAr;
