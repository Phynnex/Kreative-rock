import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/home-hero-img.png";
import HeroBtn from "../../assets/images/hero-btn.png";
import styles from "../../assets/css/home.module.css";

const Hero = () => {
  return (
    <div className={styles.homeHero}>
      <div className={styles.heroBoxTextDiv}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className={styles.heroText}>
                <h1 className="text-uppercase sec-color">
                  take control with kreativerock technology
                </h1>
                <p>Our support is top notch, get started now!</p>
              </div>
            </div>
            <div className="col-lg">
              <img
                className={`img-fluid ${styles.heroImg} d-none d-lg-inline-block`}
                src={HeroImg}
                alt="home hero image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBtnDiv}>
        <div className="container">
          <Link to="#">
            <img width="300" src={HeroBtn} alt="home hero btn" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
