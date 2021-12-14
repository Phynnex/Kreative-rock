import React from "react";
import styles from "../../assets/css/email-signature.module.css";
import MailLogo from "../../assets/images/mail.png";
import YahooLogo from "../../assets/images/yahoo.png";
import AppleLogo from "../../assets/images/apple.png";

const EmailSignatureDeployment = () => {
  return (
    <section className="styles.section">
      <div className="container">
        <header className={`mb-5 ${styles.sectionHeader}`}>
          <h2>DEPLOY YOUR EMAIL SIGNATURE ON</h2>
        </header>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5">
          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={MailLogo}
                alt="mail-logo"
              />

              <div className={styles.deploymentCardText}>Gmail</div>
            </div>
          </div>

          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={MailLogo}
                alt="mail-logo"
              />

              <div className={styles.deploymentCardText}>
                Outlook for Desktop
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={MailLogo}
                alt="mail-logo"
              />

              <div className={styles.deploymentCardText}>G-Suite</div>
            </div>
          </div>

          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={MailLogo}
                alt="mail-logo"
              />

              <div className={styles.deploymentCardText}>Outlook for Web</div>
            </div>
          </div>

          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={YahooLogo}
                alt="yahoo-logo"
              />

              <div className={styles.deploymentCardText}>Yahoo Mail</div>
            </div>
          </div>

          <div className="col">
            <div className={styles.deploymentCard}>
              <img
                className={styles.deploymentCardImg}
                src={AppleLogo}
                alt="apple-logo"
              />

              <div className={styles.deploymentCardText}>iPhone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignatureDeployment;
