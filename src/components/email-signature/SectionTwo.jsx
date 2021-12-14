import React from "react";
import styles from "../../assets/css/email-signature.module.css";

const SectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
      <div className="container">
        <header className={`mb-5 ${styles.sectionHeader}`}>
          <h2>Why use KreativeRock EmailSignature</h2>
          <div className={`mb-5 ${styles.sectionTwoHeaderBorder}`}></div>
          <p>
            “No coding or HTML skills is required. Create your next email
            signature within few seconds. Best for Individuals, Professionals,
            Religions Organizations, Institutions & Governments. Built for you.{" "}
          </p>
        </header>

        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-lg-0 gy-4">
          <div className="col">
            <div className={`${styles.sectionTwoCard}`}>
              <div className={`mb-3 ${styles.sectionTwoCardHeader}`}>
                Easy to Set-up & Use
              </div>

              <div>
                Find the best templates that suites your brand from our pool of
                templates, use few strings to set it up, deploy to your email
                client & enjoy.
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`${styles.sectionTwoCard}`}>
              <div className={`mb-3 ${styles.sectionTwoCardHeader}`}>
                Customize your Email Signature
              </div>

              <div>
                Use our drag-and-drop feature to add features, fonts, colors,
                image-shapes and more to customize your ideal email signature
                template.
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`${styles.sectionTwoCard}`}>
              <div className={`mb-3 ${styles.sectionTwoCardHeader}`}>
                Advanced Email Signature Editor
              </div>

              <div>
                Effortlessly create, manage & edit your email signatures while
                you export them to your email clients with ease.
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`${styles.sectionTwoCard}`}>
              <div className={`mb-3 ${styles.sectionTwoCardHeader}`}>
                Email Signature Manager
              </div>

              <div>
                Centrally organize and manage your email signatures, banners &
                more while you export them to your email clients with ease.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
