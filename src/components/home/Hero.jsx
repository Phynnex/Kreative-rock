import React from "react"
import { Link } from "react-router-dom"
import HeroImg from "../../assets/images/home-hero-img.png"
import HeroImg2 from "../../assets/images/homehero2.png"
import HeroImg4 from "../../assets/images/homehero4.png"
import HeroImg3 from "../../assets/images/hero3.png"
import HeroBtn from "../../assets/images/hero-btn.png"
import HeroBtn2 from "../../assets/images/herobtn2.png"
import styles from "../../assets/css/home.module.css"
// import Carousel, { CarouselItem } from "./Carousel";

const Hero = () => {
	return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className={`carousel-indicators ${styles.homeHeroCarousel}`}>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
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
                      alt="home hero"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroBtnDiv}>
              <div className="container">
                <Link to="/sign-in">
                  <img width="300" src={HeroBtn} alt="home hero btn" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className={styles.homeHero}>
            <div className={styles.secondHero}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.heroText}>
                      <h1>DISCOVER AMAZING PROFESSIONAL EMAIL SIGNATURES.</h1>
                      <p>
                        Explore our custom email signature templates,drag-and
                        drop editor and increase your email clickability.
                      </p>
                      <Link to="#">
                        <img width="300" src={HeroBtn2} alt="home hero btn" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      className={`img-fluid pt-3 d-none d-lg-inline-block`}
                      src={HeroImg2}
                      alt="home hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className={styles.homeHero}>
            <div className={styles.thridHero}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.heroText}>
                      <h1 className="pri-color">
                        SCALE YOUR BUSINESS WITH TECHNOLOGY.
                      </h1>
                      <p>
                        The beauty of the world is the technology that is
                        driving it.
                      </p>
                      <Link to="#">
                        <img width="300" src={HeroBtn2} alt="home hero btn" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      width="450"
                      className="d-none d-lg-inline-block"
                      src={HeroImg3}
                      alt="home hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className={styles.homeHero}>
            <div className={styles.fourthHero}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className={styles.heroText}>
                      <h1 className="sec-color">
                        ATTRACT THE RIGHT COUSTOMERS.
                      </h1>
                      <p>
                        Effective branding, digital advertising & content
                        marketing is all you need to maximize market
                        opportunities.
                      </p>
                      <Link to="#">
                        <img width="300" src={HeroBtn2} alt="home hero btn" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      className="d-none img-fluid d-lg-inline-block"
                      src={HeroImg4}
                      alt="home hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero
