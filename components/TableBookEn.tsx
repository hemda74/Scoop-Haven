import Link from 'next/link';
import React, { useState } from 'react';

const TableBookEn = () => {
  const [formData, setFormData] = useState({
    event: '',
    people: '',
    event_date: '',
    event_time: '',
    name: '',
    email: '',
    mobile: '',
    notes: '',
  });
  // handle change fun
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle submit fuction
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData);
  };

  return (
    <>
      <div className="breadcrumb-sec">
        <div className="container">
          <nav className="px-3">
            <h3 className="page-title text-white mb-2">Table Book</h3>
            <ol className="breadcrumb d-flex text-capitalize">
              <li className="breadcrumb-item">
                <Link href="" className="text-white">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active ">Table Book</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="mt-3">
        <div className="container">
          <div className="row contact-form gx-sm-3 gx-0">
            <div className="col-lg-12 col-sm-12 col-auto mb-4 mb-lg-0">
              <div className="card shadow rounded-5 h-100 select-delivery py-3 px-sm-2 px-0">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <h2 className="page-title mb-1 px-2"> Table Book</h2>
                      <p className="page-subtitle px-2 mb-3 md-mb-5"></p>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Type of Event<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          className="form-control input-h"
                          name="event"
                          placeholder="Type of Event"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          No. of People<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          className="form-control input-h"
                          name="people"
                          placeholder="No. of People"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Event Date<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="date"
                          className="form-control input-h"
                          name="event_date"
                          placeholder="Event Date"
                          min="2024-03-31"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Event Time<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="time"
                          className="form-control input-h"
                          name="event_time"
                          placeholder="Event Time"
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Name<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          className="form-control input-h"
                          name="name"
                          placeholder="Name"
                          required
                        />
                        <input
                          onChange={handleChange}
                          type="hidden"
                          name="vendor_id"
                          value="19"
                        />
                      </div>
                      <div className="col-md-4 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Email<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          className="form-control input-h"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col-md-4 mb-4">
                        <label
                          htmlFor="validationDefault"
                          className="form-label">
                          Mobile<span className="text-danger"> * </span>
                        </label>
                        <input
                          onChange={handleChange}
                          type="number"
                          className="form-control input-h"
                          name="mobile"
                          placeholder="Mobile"
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-4">
                        <label className="form-label">Special Request</label>
                        <textarea
                          onChange={handleChange}
                          className="form-control input-h"
                          rows={5}
                          aria-label="With textarea"
                          name="notes"
                          placeholder="Special Request"></textarea>
                      </div>
                      <div className="col d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn-primary mobile-viwe-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableBookEn;
