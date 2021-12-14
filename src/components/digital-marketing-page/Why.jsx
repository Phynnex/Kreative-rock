import React from "react";
import Attachment from "../../assets/images/vector.png";
import styles from "../../assets/css/d-m-page.module.css";

const Why = () => {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <header>
          <h2 className="text-center">Why digital marketing</h2>
          <div className={`${styles.whySectionHeaderBorder} mx-auto`}></div>
        </header>

        <div className={`${styles.whySectionContent} mx-auto mt-5`}>
          Scaling your business in recent times requires that you leverage
          technology to reach your exact audience wherever they are around the
          globe. Digital marketing gives you the targeted leverage & tools to
          achieve and surpass your marketing expectations. At KreativeRock, we
          understand how social media & digital marketing works and how it can
          be used to positively influence your audience, drive better
          engagement, increase conversions, and position your brands better to
          achieve your business goals
        </div>

        <img
          className="position-absolute top-0 end-0 d-lg-block d-none"
          src={Attachment}
          alt=""
        />
      </div>
    </section>
  );
};

export default Why;
