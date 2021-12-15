import React from "react";
import Logo1 from "../../assets/images/client1.png";
import Logo2 from "../../assets/images/client2.png";
import Logo3 from "../../assets/images/client3.png";
import Logo4 from "../../assets/images/client4.png";
import Logo5 from "../../assets/images/client5.png";
import Logo6 from "../../assets/images/client6.png";
import styles from "../../assets/css/home.module.css";

const Clients = () => {
  return (
    <section className={`${styles.clientsSection} ${styles.section}`}>
      <div className="container">
        <header className="text-center">
          <h2>
            Our <span className="sec-color">Clients</span>
          </h2>
          <div className={styles.clientSectionBorder}></div>
          <p>
            We serve companies of all sizes, all around the globe. We speak your
            language.
          </p>
        </header>

        <div className="row row-cols-md-3 row-cols-1 gy-3 mt-5 align-items-center">
          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo1} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo2} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo3} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo4} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo5} alt="" />
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <img className="img-fluid" src={Logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
