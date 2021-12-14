import React from "react";
import styles from "../../assets/css/home.module.css";

const EnquiryForm = () => {
  return (
    <section className={`${styles.enquiryFormSection} ${styles.section}`}>
      <div className="container">
        <header className="text-center mb-5">
          <h2>
            Enquiry <span className="sec-color">Form</span>
          </h2>
          <div className={styles.enquirySectionBorder}></div>
        </header>

        <form action="" className={styles.enquiryForm}>
          <div className="row">
            <div className="col-lg">
              <label htmlFor="Full Name">
                Full Name<span className="pri-color">*</span>
              </label>
              <input
                className={`w-100 ${styles.enquiryInputBox}`}
                type="text"
              />
            </div>

            <div className="col-lg">
              <label htmlFor="Email">
                Email<span className="pri-color">*</span>
              </label>
              <input
                className={`w-100 ${styles.enquiryInputBox}`}
                type="email"
              />
            </div>

            <div className="col-lg">
              <label htmlFor="Phone Number">
                Phone Number<span className="pri-color">*</span>
              </label>
              <input className={`w-100 ${styles.enquiryInputBox}`} type="tel" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="Description">
              Description<span className="pri-color">*</span>
            </label>
            <textarea
              name=""
              className={`w-100 ${styles.enquiryTextarea}`}
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <input type="submit" value="SUBMIT" className="pri-btn ps-5 pe-5" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
