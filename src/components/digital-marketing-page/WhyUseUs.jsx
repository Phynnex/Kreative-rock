import React from "react";
import RightPeople from "../../assets/images/rafiki.png";
import Result from "../../assets/images/rafiki-acc.png";
// import Attachment from "../../assets/images/Vector3.png";
import styles from "../../assets/css/d-m-page.module.css";

const WhyUseUs = () => {
  return (
    <section className={`${styles.whyUseUsSection} border-0`}>
      {/* <img
        style={{ top: "25%" }}
        className="position-absolute end-0 d-lg-block d-none"
        src={Attachment}
        alt=""
      /> */}
      <div className="container">
        <header className="mb-5">
          <h2>Why Use Us</h2>
          <div className={`${styles.whyUseUsHeaderBorder} mx-auto`}></div>
        </header>

        <div className="row row-cols-lg-2 row-cols-1 gy-5">
          <div className="col align-self-center">
            <div className={styles.whyUseUsCard}>
              <div>
                <div className={`mb-3 ${styles.whyUseUsCardText}`}>
                  1. Reach the right people, in the right place, at the right
                  time, with less resources.
                </div>

                <div className={styles.whyUseUsCardText}>
                  We will help you reach your exact customers and prospective
                  customers anywhere they are in the world with less resources
                  through targeted marketing. You don’t have to break the bank.
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div>
              <img className="img-fluid" src={RightPeople} alt="" />
            </div>
          </div>

          <div className="col">
            <img className="img-fluid" src={Result} alt="" />
          </div>

          <div className="col align-self-center">
            <div className={styles.whyUseUsCard}>
              <div>
                <div className={`mb-3 ${styles.whyUseUsCardText}`}>
                  2. Get measurable results
                </div>

                <div className={styles.whyUseUsCardText}>
                  We will deliver excellent reporting in real time on your ads
                  spend.We will deliver excellent reporting in real time on your
                  ads spend.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseUs;
