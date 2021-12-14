import React from "react";
import styles from "../../assets/css/email-signature.module.css";
import Cancel from "../../assets/images/cancel.png";
import Approved from "../../assets/images/approved.png";

const PricingSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className="container">
        <header className={`mb-5 ${styles.sectionHeader}`}>
          <h2>Pricing</h2>
          <div className={` ${styles.pricingHeaderBorder}`}></div>
        </header>

        <div className="table-responsive">
          <table
            className={`w-100 text-center bg-white ${styles.pricingTable}`}
          >
            <thead>
              <tr>
                <th>PRICING</th>
                <th>Free Plan</th>
                <th>Pro Plan</th>
                <th>Custom</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Create, Manage & Deploy your Signature to your Email Client
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Add Logo</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Add Banner Images & Gifs</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Cancel}
                    alt="not-approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Email Signature Editor Basis</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Email Signature Editor Advanced</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Cancel}
                    alt="not-approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Personalized Disclaimer</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Cancel}
                    alt="not-approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td>Powered by KreativeRock Display on your email Signature</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Cancel}
                    alt="not-approved"
                  />
                </td>
                <td></td>
              </tr>

              <tr>
                <td>Total Email Signature Users</td>
                <td>1 User</td>
                <td>1 to 10 Users</td>
                <td></td>
              </tr>

              <tr>
                <td>Integration to Gmail, Outlook, G-suite, Yahoo, iPhone</td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>
                <td>
                  <img
                    className={styles.pricingTableImg}
                    src={Approved}
                    alt="approved"
                  />
                </td>

                <td></td>
              </tr>

              <tr>
                <td></td>
                <td>Free</td>
                <td>$2.92/Month</td>

                <td>Contact Us</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-flex mt-5 align-items-center gap-4">
          <div>Monthly Pricing</div>

          <div>
            <label className={styles.pricingToggleSwitch}>
              <input type="checkbox" />
              <span
                className={`${styles.pricingToggleSlider} ${styles.pricingToggleRound}`}
              ></span>
            </label>
          </div>

          <div>Yearly Pricing</div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
