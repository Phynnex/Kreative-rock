import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/amico.png";
import styles from "../../assets/css/d-m-page.module.css";

const Hero = () => {
  return (
    <div className={styles.DMPageHero}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <header>
              <h1>
                Grow your Business with{" "}
                <span className="pri-color">Digital Marketing</span>
              </h1>
              <p className="mt-3">
                Stay in the eyes of your exact audience through regular posts
                publishing & sponsored posts. Drive the right traffic and
                generate qualified leads.
              </p>
            </header>

            <div className="mt-5 mb-4 mb-lg-0">
              <Link to="#" className="pri-btn fs-4">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src={HeroImg} alt='hero' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
