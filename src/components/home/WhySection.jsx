import React from "react";
import cardIcon1 from "../../assets/images/why-card1.png";
import cardIcon2 from "../../assets/images/why-card2.png";
import cardIcon3 from "../../assets/images/why-card3.png";
import cardIcon4 from "../../assets/images/why-card4.png";
import cardIcon5 from "../../assets/images/why-card5.png";
import cardIcon6 from "../../assets/images/why-card6.png";
import styles from "../../assets/css/home.module.css";

const WhySection = () => {
  return (
    <section className={`${styles.whySection} ${styles.section}`}>
      <div className="container">
        <header className="text-center">
          <h2>
            Why use KreativeRock <span className="sec-color">Digital?</span>
          </h2>
          <div className="section-header-border"></div>
          <p>Built with your business in mind</p>
        </header>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5 mt-5">
          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon1} alt="card-icon-1" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">Excellent Reporting</h5>
                </div>
              </div>
              <p className="text-center">
                Monitor & evaluate your efforts in real time with our robust
                reporting system & analytics.
              </p>
            </div>
          </div>

          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon2} alt="card-icon-2" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">Multi-Telco Compliance</h5>
                </div>
              </div>
              <p className="text-center">
                We meet global texting standards that allows real time
                interaction & messaging delivery.
              </p>
            </div>
          </div>

          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon3} alt="card-icon-3" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">
                    Unique identity & differentiation
                  </h5>
                </div>
              </div>
              <p className="text-center">
                We pull compelling messages and visuals to influence that gut
                feeling & differentiate your brand.
              </p>
            </div>
          </div>

          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon4} alt="card-icon-4" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">
                    All-in-One Text Messaging Solutions
                  </h5>
                </div>
              </div>
              <p className="text-center">
                We pull compelling messages and visuals to influence that gut
                feeling & differentiate your brand.
              </p>
            </div>
          </div>

          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon5} alt="card-icon-5" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">
                    Tailored Digital Strategy & Marketing Intervention.
                  </h5>
                </div>
              </div>
              <p className="text-center">
                Maximize market opportunities for your business through digital
                marketing technologies. Reach the right audience, drive results
                & maximize your campaign investments
              </p>
            </div>
          </div>

          <div className="col">
            <div className={styles.whySectionCard}>
              <div className="row">
                <div className="col-md-2">
                  <img src={cardIcon6} alt="card-icon-6" />
                </div>
                <div className="col-md">
                  <h5 className="text-center">
                    Modern Email Signature, Built for you
                  </h5>
                </div>
              </div>
              <p className="text-center">
                Improve the quality of your email send with actionable
                call-to-action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
