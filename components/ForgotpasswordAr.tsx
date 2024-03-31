import React, { useState } from 'react';
import Link from 'next/link';
const ForgotpasswordAr = () => {
  const [formData, setFormData] = useState({
    email: '',
    type: 'user',
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
    // Handle form submission logic here
  };

  return (
    <>
      <section className="mt-0">
        <div className="row m-0 vh-100">
          <div className="col-lg-6 col-12 vh-100 d-flex justify-content-center align-items-center m-auto bg-light">
            <div className="right-side row justify-content-center align-items-center g-0">
              <div className="col-xl-8 col-lg-10">
                <div className="card shadow rounded-5">
                  <div className="card-body">
                    <form
                      className="row align-items-center justify-content-center m-auto py-md-3 py-lg-0 py-xxl-3"
                      onSubmit={handleSubmit}>
                      <div className="col-md-10">
                        <h2 className="form-title">نسيت كلمة المرور</h2>
                        <p className="page-subtitle line-limit-3">
                          ادخل الايميل المسجل وسوف يتم ارسال كلمة مرور جديدة الي
                          بريدك الالكتروني
                        </p>
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="email" className="form-label">
                          الايميل<span className="text-danger"> * </span>
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
                      <input
                        type="hidden"
                        className="form-control"
                        name="type"
                        value="user"
                      />
                      <div className="d-flex justify-content-center col-md-10 mb-3">
                        <input
                          className="btn-primary w-100 text-center"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                      <p className="page-subtitle text-center mt-3">
                        تذكرت كلمة المرور ؟
                        <Link
                          href="/login"
                          className="text-primary fw-semibold text-dark">
                          تسجيل الدخول
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

export default ForgotpasswordAr;
