import React from "react";
import HomeStyles from "../../assets/css/home.module.css";

const EmailSignatureEnquiryForm = () => {
  return (
    <section className={HomeStyles.enquiryFormSection}>
      <div className="container">
        <header className="text-center mb-5">
          <h2>
            Enquiry <span className="sec-color">Form</span>
          </h2>
          <div className={HomeStyles.enquirySectionBorder}></div>
        </header>

        <form action="" className={HomeStyles.enquiryForm}>
          <div className="row row-cols-lg-2 row-cols-1 gy-3">
            <div className="col">
              <label htmlFor="Full Name">Full Name</label>
              <input
                className={`w-100 ${HomeStyles.enquiryInputBox}`}
                type="text"
              />
            </div>

            <div className="col">
              <label htmlFor="Email">Email</label>
              <input
                className={`w-100 ${HomeStyles.enquiryInputBox}`}
                type="email"
              />
            </div>

            <div className="col">
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                className={`w-100 ${HomeStyles.enquiryInputBox}`}
                type="tel"
              />
            </div>

            <div className="col">
              <label htmlFor="Organisation Name">Organisation Name</label>
              <input
                className={`w-100 ${HomeStyles.enquiryInputBox}`}
                type="text"
              />
            </div>

            <div className="col">
              <label htmlFor="Website">Website</label>
              <input
                className={`w-100 ${HomeStyles.enquiryInputBox}`}
                type="url"
              />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="Description">Description</label>
            <textarea
              name=""
              className={`w-100 ${HomeStyles.enquiryTextarea}`}
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

export default EmailSignatureEnquiryForm;
