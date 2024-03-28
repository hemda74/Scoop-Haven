import React from 'react';
import styles from '../../styles/ContactUs.module.css';
const ApplicationJobAr = () => {
  return (
    <>
      <div className={` ${styles.mainApplication} apply-section`} dir="rtl">
        <div className="container">
          <div className={`row justify-content-center `}>
            <div className="col-md-8">
              <div className="text-center">
                <form action="" method="post" role="form">
                  <div className="row">
                    <h2 className="title title--lg red-1-color">قدم الان</h2>
                    <p className="">
                      {` نحن نتطلع دائمًا إلى توظيف الأشخاص الموهوبين
                      الخبرة ذات الصلة الذين يشاركوننا قيمنا. الرجاء استخدام
                      نموذج الطلب، أو بدلا من ذلك إرسال السيرة الذاتية إلى البريد الإلكتروني
                      المكتب الذي ترغب في الانضمام إليه.`}
                    </p>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        اللقب
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <select
                          id=""
                          className={`form-select ${styles.formControl}`}>
                          <option value="">الرجاء الاختيار...</option>
                          <option>.Mr</option>
                          <option>.Mrs</option>
                          <option>.Miss</option>
                          <option>.Ms</option>
                          <option>.Dr</option>
                          <option>.Prof</option>
                          <option>.Rev</option>
                        </select>
                      </div>
                    </div>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        الاسم كاملا
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <input
                          type="text"
                          name="name"
                          className={`form-control ${styles.formControl}`}
                          id="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        البريد الالكنروني
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <input
                          type="email"
                          className={`form-control ${styles.formControl}`}
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        الهاتف
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <input
                          type="text"
                          name="phone"
                          className={`form-control ${styles.formControl}`}
                          id="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        المكتب المطلوب
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <select
                          id=""
                          className={`form-select ${styles.formControl}`}>
                          <option value="">الرجاء الاختيار ...</option>
                          <option>مصر</option>
                          <option>الامارات</option>
                          <option>السعودية</option>
                        </select>
                      </div>
                    </div>
                    <div className="gfield col-md-6 form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        السيرة الذاتية
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <input
                          type="file"
                          name="file"
                          className={`form-control medium ${styles.formControl}`}
                          id="file"
                          required
                        />
                      </div>
                    </div>
                    <div className="gfield  form-group mt-4 text-end gfield--type-select gf_left_half gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible">
                      <label
                        htmlFor=""
                        className="gfield_label gform-field-label">
                        COVER LATTER
                        <span className="gfield_required">
                          <span className="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div
                        className={`ginput_container ginput_container_select`}>
                        <textarea
                          className="form-control"
                          name="message"
                          rows={10}
                          required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className={`loading ${styles.loadingMassage}`}>
                      يتم الارسال
                    </div>
                    <div
                      className={`error-message ${styles.errorMassage}`}></div>
                    <div className={`sent-message ${styles.sentMassage}`}>
                      تم ارسال طلبك شكرا لك
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className={`myInfo p-3 rounded fs-6 ${styles.btnClass}`}
                      type="submit">
                      ارسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationJobAr;
