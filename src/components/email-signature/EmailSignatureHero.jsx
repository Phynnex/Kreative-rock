import React from "react";
import styles from "../../assets/css/email-signature.module.css";
import HeroImg from "../../assets/images/email-hero.png";
import { Link } from "react-router-dom";

const EmailSignatureHero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className={styles.heroContent}>
              <h1 className={`text-uppercase ${styles.heroH1}`}>
                Advanced <span className="pri-color">Email Signature</span>
              </h1>

              <p className={`mt-5 ${styles.heroText}`}>
                Create professional email signatures and improve the quality of
                your email send with actionable call-toactions.
              </p>

              <div className="mt-5 mb-lg-0 mb-5 float-lg-end float-start">
                <Link to="/" className="pri-btn fs-4">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <img className="img-fluid" src={HeroImg} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignatureHero;
