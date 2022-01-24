import React, { useState } from "react";
import styles from "../../assets/css/referral-code.module.css";
import Icon1 from "../../assets/images/gc1.png";
import Icon2 from "../../assets/images/gc2.png";
import Icon3 from "../../assets/images/gc3.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SectionTwo = () => {
  const [inviteLink] = useState(
    "www.67svbn/jjbjjsjkdhaudiwdjdj"
  );
  return (
    <div className={styles.sectionTwo}>
      <form action="">
        <div>
          <label className={styles.referralInputLabel} htmlFor="Email">
            Email
          </label>
          <div className={styles.referralInputBoxWrapper}>
            <input
              className={`${styles.referralInputBox}`}
              type="email"
              placeholder="Add Email"
            />
            <input
              className={`pri-btn ${styles.referralInputBtn}`}
              type="submit"
              value="SEND"
            />
          </div>
        </div>

        <div className="mt-3">
          <label className={styles.referralInputLabel} htmlFor="Email">
            Your Invite Link
          </label>
          <div className={styles.referralInputBoxWrapper}>
            <input
              className={`${styles.referralInputBox}`}
              type="url"
              disabled
              value={inviteLink}
            />

            <CopyToClipboard text={inviteLink}>
              <button className={`pri-btn ${styles.referralInputBtn}`}>
                <svg
                  width="60"
                  height="20"
                  viewBox="0 0 70 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.5 35H42V28H52.5C55.2848 28 57.9555 26.8938 59.9246 24.9246C61.8938 22.9555 63 20.2848 63 17.5C63 14.7152 61.8938 12.0445 59.9246 10.0754C57.9555 8.10625 55.2848 7 52.5 7H42V0H52.5C57.1413 0 61.5925 1.84374 64.8744 5.12563C68.1563 8.40752 70 12.8587 70 17.5C70 22.1413 68.1563 26.5925 64.8744 29.8744C61.5925 33.1563 57.1413 35 52.5 35ZM28 35H17.5C12.8587 35 8.40752 33.1563 5.12563 29.8744C1.84374 26.5925 0 22.1413 0 17.5C0 12.8587 1.84374 8.40752 5.12563 5.12563C8.40752 1.84374 12.8587 0 17.5 0H28V7H17.5C14.7152 7 12.0445 8.10625 10.0754 10.0754C8.10625 12.0445 7 14.7152 7 17.5C7 20.2848 8.10625 22.9555 10.0754 24.9246C12.0445 26.8938 14.7152 28 17.5 28H28V35ZM52.5 21H17.5V14H52.5V21Z"
                    fill="white"
                  />
                </svg>{" "}
                COPY LINK
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </form>

      <div className="mt-5">
        <p className={`text-center ${styles.shareText}`}>Share With</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a className={`${styles.shareBtn} ${styles.fbBtn}`} href="/">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5584 25.3111L21.6996 17.1675H14.5661V11.8828C14.5661 9.65531 15.5623 7.48266 18.7574 7.48266H22V0.549844C22 0.549844 19.0578 0 16.2439 0C10.3697 0 6.53017 3.90094 6.53017 10.9617V17.1689H0V25.3125H6.53017V45H14.5661V25.3125L20.5584 25.3111Z"
                fill="white"
              />
            </svg>{" "}
            Facebook
          </a>

          <a className={`${styles.shareBtn} ${styles.instaBtn}`} href="/">
            <svg
              width="22"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6213 11.1402C12.7754 11.1751 10.4814 13.526 10.5163 16.3719C10.5512 19.2179 12.9021 21.5119 15.748 21.477C18.5939 21.4421 20.888 19.0911 20.8531 16.2452C20.8182 13.3993 18.4672 11.1053 15.6213 11.1402ZM31.186 16.1185C31.1597 13.9783 31.1531 11.8572 31.0067 9.7223C30.8561 7.24233 30.263 5.04699 28.4262 3.25468C26.5855 1.45854 24.3802 0.923293 21.8973 0.83352C19.7556 0.739564 17.6349 0.784952 15.4986 0.811143C13.3583 0.837382 11.2372 0.843997 9.10232 0.990384C6.62235 1.141 4.42701 1.73408 2.6347 3.57088C0.838563 5.41161 0.303313 7.61691 0.21354 10.0998C0.119584 12.2415 0.164972 14.3622 0.191163 16.4985C0.217355 18.6349 0.224017 20.7599 0.370404 22.8948C0.521021 25.3747 1.1141 27.5701 2.9509 29.3624C4.79163 31.1585 6.99693 31.6938 9.47984 31.7835C11.6216 31.8775 13.7422 31.8321 15.8786 31.8059C18.0188 31.7797 20.1399 31.7731 22.2748 31.6267C24.7548 31.4761 26.9501 30.883 28.7424 29.0462C30.5386 27.2055 31.0738 25.0002 31.1636 22.5172C31.2615 20.3794 31.2122 18.2588 31.186 16.1185ZM15.7822 24.2608C11.3815 24.3148 7.78638 20.8068 7.73243 16.4061C7.67847 12.0054 11.1865 8.41028 15.5872 8.35633C19.9879 8.30238 23.583 11.8104 23.6369 16.2111C23.6909 20.6118 20.1829 24.2069 15.7822 24.2608ZM23.8839 9.78636C22.8564 9.79896 22.0165 8.9794 22.0039 7.95192C21.9913 6.92445 22.8109 6.08455 23.8384 6.07195C24.8658 6.05935 25.7057 6.87891 25.7183 7.90639C25.7216 8.15036 25.6768 8.39259 25.5863 8.61919C25.4959 8.8458 25.3616 9.05234 25.1912 9.22697C25.0208 9.40161 24.8176 9.54091 24.5933 9.6369C24.3689 9.73288 24.1279 9.78367 23.8839 9.78636Z"
                fill="white"
              />
            </svg>{" "}
            Instagram
          </a>

          <a className={`${styles.shareBtn} ${styles.twitterBtn}`} href="/">
            <svg
              width="22"
              height="20"
              viewBox="0 0 49 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49 4.7515C47.1981 5.53257 45.2371 6.0947 43.2173 6.31363C45.3143 5.06177 46.8847 3.08404 47.6338 0.751503C45.666 1.92777 43.5103 2.75259 41.2622 3.18937C40.3227 2.18006 39.1863 1.376 37.9239 0.827287C36.6616 0.278575 35.3003 -0.0030283 33.9249 2.45586e-05C28.3601 2.45586e-05 23.8846 4.53257 23.8846 10.0947C23.8846 10.8758 23.9788 11.6568 24.132 12.4083C15.7994 11.9704 8.36786 7.97043 3.42723 1.84618C2.527 3.39124 2.05524 5.15047 2.06105 6.94085C2.06105 10.4438 3.83355 13.5326 6.53647 15.3491C4.9436 15.2861 3.38803 14.8462 1.99627 14.0651V14.1894C1.99627 19.0947 5.44706 23.1598 10.0461 24.0947C9.18262 24.3201 8.2943 24.4354 7.40212 24.4379C6.74847 24.4379 6.13015 24.3728 5.50595 24.284C6.77791 28.284 10.4819 31.1894 14.8926 31.284C11.4418 34 7.11946 35.5976 2.42615 35.5976C1.58406 35.5976 0.806754 35.5681 0 35.4734C4.45187 38.3432 9.73405 40 15.4225 40C33.8896 40 43.9946 24.6272 43.9946 11.284C43.9946 10.8462 43.9946 10.4083 43.9651 9.97043C45.9202 8.53256 47.6338 6.7515 49 4.7515Z"
                fill="white"
              />
            </svg>{" "}
            Twitter
          </a>

          <a className={`${styles.shareBtn} ${styles.linkedinBtn}`} href="/">
            <svg
              width="22"
              height="20"
              viewBox="0 0 39 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.85331 37V12.0362H0.49324V37H8.85331ZM4.67435 8.62573C7.58966 8.62573 9.40429 6.7088 9.40429 4.31327C9.34998 1.86372 7.58977 0 4.72968 0C1.87003 0 0 1.86376 0 4.31327C0 6.70891 1.81419 8.62573 4.61978 8.62573H4.67409H4.67435ZM13.4806 37H21.8406V23.059C21.8406 22.3129 21.895 21.5675 22.1157 21.0342C22.7201 19.5435 24.0957 17.9996 26.4051 17.9996C29.4302 17.9996 30.6405 20.2888 30.6405 23.6447V36.9998H39V22.6858C39 15.0179 34.8756 11.4501 29.3752 11.4501C24.8652 11.4501 22.8851 13.9521 21.785 15.6562H21.8408V12.0356H13.4808C13.5905 14.3781 13.4808 36.9995 13.4808 36.9995L13.4806 37Z"
                fill="white"
              />
            </svg>{" "}
            Linkedin
          </a>
        </div>
      </div>

      <div className="mt-5">
        <p className={styles.getStartedText}>It&#8217;s easy to get started</p>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-lg-0 gy-4">
          <div className="col">
            <div className={styles.getStartedCard}>
              <img className={styles.getStartedCardIcon} src={Icon1} alt="" />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.getStartedCard}>
              <img className={styles.getStartedCardIcon} src={Icon2} alt="" />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.getStartedCard}>
              <img className={styles.getStartedCardIcon} src={Icon3} alt="" />
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
