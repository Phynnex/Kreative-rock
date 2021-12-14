import React from "react";
import cardIcon1 from "../../assets/images/ser-icon1.png";
import cardIcon2 from "../../assets/images/ser-icon2.png";
import cardIcon3 from "../../assets/images/ser-icon3.png";
import cardIcon4 from "../../assets/images/ser-icon4.png";
import styles from "../../assets/css/home.module.css";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className={`${styles.servicesSection} ${styles.section}`}>
      <div className="container">
        <header className="text-center">
          <h2>
            Our <span className="sec-color">Services</span>
          </h2>
          <div className={styles.servicesSectionBorder}></div>
          <p>
            “Improve customer engagements & drive more conversion with tailored
            services built for you”
          </p>
        </header>

        <div className="row row-cols-md-2 row-cols-1 mt-5">
          <div className="col">
            <Link to="/mobile-texting">
              <div className={styles.servicesCard}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid"
                      src={cardIcon1}
                      alt="services-card-icon"
                    />
                  </div>
                  <div className="col-md">
                    <h5>Mobile Texting</h5>
                    <p>
                      Text in real-time to your customers or a group of
                      contacts. Personalize your texts, track delivery & receive
                      responses for messages sent. We make it easier to engage
                      your audience better
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col">
            <Link to="/email-signature">
              <div className={styles.servicesCard}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid"
                      src={cardIcon2}
                      alt="services-card-icon"
                    />
                  </div>
                  <div className="col-md">
                    <h5>Email Signature Management</h5>
                    <p>
                      Engage your audience better with actionable call-to-action
                      when you send a mail or reply to an email.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col">
            <Link to="/digital-marketing">
              <div className={styles.servicesCard}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid"
                      src={cardIcon3}
                      alt="services-card-icon"
                    />
                  </div>
                  <div className="col-md">
                    <h5>Digital Marketing</h5>
                    <p>
                      Unlock more potentials for your business, build new
                      businessrelationships, maintain existing relationships,
                      encourage repeated patronages, acquire new customers, and
                      persuade prospective customers to buy through modern
                      technology driven and effective digital marketing
                      intervention.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col">
            <Link to="/brand-management">
              <div className={styles.servicesCard}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="img-fluid"
                      src={cardIcon4}
                      alt="services-card-icon"
                    />
                  </div>
                  <div className="col-md">
                    <h5>Brand Management</h5>
                    <p>
                      Your customers want to have it because their guts-feeling
                      makes them believe it's the right product or services for
                      them. Your unique identity differentiates your brand from
                      others.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
