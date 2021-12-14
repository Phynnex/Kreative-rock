import React from "react";
import Attachment from "../../assets/images/Vector2.png";
import styles from "../../assets/css/d-m-page.module.css";

const CallbackForm = () => {
  return (
    <section
      className={`${styles.callbackFormSection} ${styles.section}  border-0`}
    >
      <header>
        <h2>REQUEST A CALL BACK</h2>
        <div
          className={`${styles.callbackFormSectionHeaderBorder} mx-auto`}
        ></div>
      </header>

      <img
        className="position-relative top-0 start-0 d-lg-block d-none"
        src={Attachment}
        alt=""
      />

      <form action="" className={`${styles.callbackForm} w-100 mt-4`}>
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 gy-4">
            <div className="col">
              <div>
                <label htmlFor="Fullname">Full Name</label>
                <input
                  className={styles.callbackInputBox}
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div className="col">
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  className={styles.callbackInputBox}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div className="col">
              <div>
                <label htmlFor="phone number">Phone Number</label>
                <input
                  className={styles.callbackInputBox}
                  type="tel"
                  name="phone number"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="col">
              <div>
                <label htmlFor="Digital Marketing Services">
                  Digital Marketing Services
                </label>
                <select
                  className={styles.callbackInputBox}
                  name="Digital marketing services"
                  id=""
                >
                  <option value="Digital marketing service">
                    Digital Marketing Services
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-3 mb-3">
            <label htmlFor="Description">Description</label>
            <textarea
              className={styles.callbackTextarea}
              name="Description"
              id=""
              placeholder="Typing..."
            ></textarea>
          </div>

          <div className="text-center">
            <input className="pri-btn ps-5 pe-5" type="submit" value="SUBMIT" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CallbackForm;
