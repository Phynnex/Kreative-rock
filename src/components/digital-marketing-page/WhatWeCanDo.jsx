import React from "react";
import Image from "../../assets/images/bro.png";
import Attachment from "../../assets/images/Vector4.png";
import styles from "../../assets/css/d-m-page.module.css";

const WhatWeCanDo = () => {
  return (
    <section className={`${styles.whatWeCanDoSection} ${styles.section}`}>
      <div className="container">
        <header className="mb-5">
          <h2>What We Can Do For You</h2>
          <div className={`${styles.whySectionHeaderBorder} mx-auto`}></div>
        </header>

        <img
          className="position-absolute start-0 d-lg-block d-none"
          src={Attachment}
          alt="section-attachment"
        />

        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="text-lg-start text-center mb-5 mb-lg-0">
              <img
                className="img-fluid"
                src={Image}
                alt="what-we-can-do-illustration-drawing"
              />
            </div>
          </div>
          <div className="col-lg">
            <div className="row row-cols-lg-2 row-cols-1 gy-5">
              <div className="col">
                <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
                  <div className={styles.whatWeCanDoCardIconWrapper}>
                    <svg
                      width="29"
                      height="26"
                      viewBox="0 0 29 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.2012 16.4183L9.93476 0H19.0652L28.3316 16.4183H19.2012ZM11.4131 17.7879L6.84785 26H24.4348L29 17.7879H11.4131ZM8.72832 2.05446L0 17.7879L4.56523 26L13.4238 10.2607L8.72832 2.05446Z"
                        fill="#cfcfcf"
                      />
                    </svg>
                  </div>
                  <div className="card-body">
                    <div className={styles.whatWeCanDoCardHeader}>
                      Display Advertising
                    </div>

                    <div className={styles.whatWeCanDoCardContent}>
                      We will deliver ads to multiple third-party webpages on
                      side bars, header, or footer sections of a website where
                      they can easily be seen. End users will get to know about
                      your products or services when they visit any website of
                      their choice as we will strategically place ads to target
                      your exact audience
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
                  <div className={styles.whatWeCanDoCardIconWrapper}>
                    <svg
                      width="29"
                      height="23"
                      viewBox="0 0 29 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29 19.7143V3.28571C29 1.47857 27.4647 0 25.5882 0H3.41176C1.53529 0 0 1.47857 0 3.28571V19.7143C0 21.5214 1.53529 23 3.41176 23H25.5882C27.4647 23 29 21.5214 29 19.7143ZM10.2353 18.0714V4.92857L20.4706 11.5L10.2353 18.0714Z"
                        fill="#CFCFCF"
                      />
                    </svg>
                  </div>
                  <div className="card-body">
                    <div className={styles.whatWeCanDoCardHeader}>
                      Youtube Advertising
                    </div>

                    <div className={styles.whatWeCanDoCardContent}>
                      YouTube is the second biggest search engine. People visit
                      YouTube for video contents. Delivering Ads on YouTube will
                      help you reach your audience faster. We will use through
                      YouTube ads to run Sponsored ads or drive engagement
                      through content marketing that will help you achieve your
                      goals faster.”
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
                  <div className={styles.whatWeCanDoCardIconWrapper}>
                    <svg
                      width="30"
                      height="25"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9622 16.6667C7.30357 16.6667 0 18.5278 0 22.2222V25H21.9244V22.2222C21.9244 18.5278 14.6208 16.6667 10.9622 16.6667ZM28.9128 5.33334C28.9265 5.18056 28.9402 5.02778 28.9402 4.86111C28.9402 4.69445 28.9265 4.54167 28.8991 4.38889L29.9131 3.58334C30.009 3.51389 30.0228 3.375 29.9679 3.27778L29.0087 1.59722C28.9539 1.48611 28.8169 1.45834 28.721 1.48611L27.5426 1.97222C27.2959 1.77778 27.0218 1.625 26.7341 1.5L26.556 0.208336C26.5456 0.149731 26.5152 0.0967001 26.4701 0.0585884C26.425 0.0204766 26.368 -0.000270444 26.3093 2.66227e-06H24.3909C24.2676 2.66227e-06 24.1717 0.0833361 24.158 0.208336L23.9798 1.5C23.6921 1.625 23.418 1.79167 23.1714 1.97222L21.9792 1.48611C21.8696 1.44445 21.7463 1.48611 21.6915 1.59722L20.7323 3.27778C20.6775 3.38889 20.6912 3.51389 20.7871 3.58334L21.8011 4.38889C21.7466 4.70128 21.7466 5.02094 21.8011 5.33334L20.7871 6.13889C20.6912 6.20834 20.6775 6.34722 20.7323 6.44445L21.6915 8.125C21.7463 8.23611 21.8833 8.26389 21.9792 8.23611L23.1714 7.75C23.418 7.94445 23.6921 8.09722 23.9798 8.22222L24.158 9.51389C24.1717 9.63889 24.2676 9.72222 24.3909 9.72222H26.3093C26.4326 9.72222 26.5285 9.63889 26.5423 9.51389L26.7204 8.22222C27.0081 8.09722 27.2822 7.93056 27.5288 7.75L28.721 8.23611C28.8306 8.27778 28.9539 8.23611 29.0087 8.125L29.9679 6.44445C30.0228 6.33333 30.009 6.20834 29.9131 6.13889L28.9128 5.33334ZM25.3501 6.59722C24.8958 6.59722 24.4602 6.41431 24.1389 6.08873C23.8177 5.76314 23.6373 5.32156 23.6373 4.86111C23.6373 4.40067 23.8177 3.95908 24.1389 3.6335C24.4602 3.30791 24.8958 3.125 25.3501 3.125C25.8044 3.125 26.2401 3.30791 26.5613 3.6335C26.8825 3.95908 27.063 4.40067 27.063 4.86111C27.063 5.32156 26.8825 5.76314 26.5613 6.08873C26.2401 6.41431 25.8044 6.59722 25.3501 6.59722ZM25.9256 12.0556L25.2405 10.8472C25.1994 10.7639 25.1035 10.7361 25.0349 10.7639L24.1854 11.1111C24.0072 10.9722 23.8154 10.8611 23.6099 10.7778L23.4865 9.86111C23.4725 9.82081 23.4465 9.78587 23.4122 9.76102C23.3779 9.73617 23.3369 9.72263 23.2947 9.72222H21.9244C21.8422 9.72222 21.7737 9.77778 21.76 9.875L21.6367 10.7917C21.4311 10.875 21.2393 11 21.0611 11.125L20.2116 10.7778C20.1294 10.75 20.0471 10.7778 20.006 10.8611L19.3209 12.0694C19.2798 12.1528 19.2935 12.2361 19.362 12.2917L20.0882 12.8611C20.0745 12.9722 20.0608 13.0833 20.0608 13.1944C20.0608 13.3056 20.0745 13.4306 20.0882 13.5278L19.362 14.0972C19.2935 14.1528 19.2798 14.25 19.3209 14.3194L20.006 15.5278C20.0471 15.6111 20.1431 15.6389 20.2116 15.6111L21.0611 15.2639C21.2393 15.4028 21.4311 15.5139 21.6367 15.5972L21.76 16.5139C21.7737 16.6111 21.8422 16.6667 21.9244 16.6667H23.2947C23.3769 16.6667 23.4591 16.6111 23.4591 16.5139L23.5825 15.5972C23.788 15.5139 23.9798 15.3889 24.158 15.2639L25.0075 15.6111C25.0898 15.6389 25.172 15.6111 25.2131 15.5278L25.8982 14.3194C25.9393 14.2361 25.9256 14.1528 25.8571 14.0972L25.1446 13.5278C25.1583 13.4167 25.172 13.3056 25.172 13.1944C25.172 13.0833 25.1583 12.9583 25.1446 12.8611L25.8708 12.2917C25.9393 12.2361 25.953 12.1389 25.9256 12.0556ZM22.6096 14.3472C21.9792 14.3472 21.4722 13.8194 21.4722 13.1944C21.4722 12.5556 21.9929 12.0417 22.6096 12.0417C23.2262 12.0417 23.7469 12.5694 23.7469 13.1944C23.7469 13.8333 23.2399 14.3472 22.6096 14.3472ZM5.12483 8.33333H16.8133C17.1833 8.33333 17.4847 8.02778 17.4847 7.65278V7.625C17.4847 7.44451 17.414 7.2714 17.2881 7.14378C17.1621 7.01615 16.9914 6.94445 16.8133 6.94445H16.4433C16.4433 4.88889 15.3334 3.125 13.7028 2.15278V3.47222C13.7028 3.86111 13.4013 4.16667 13.0176 4.16667C12.6339 4.16667 12.3325 3.86111 12.3325 3.47222V1.58334C11.894 1.47222 11.4418 1.38889 10.9622 1.38889C10.4826 1.38889 10.0304 1.47222 9.59193 1.58334V3.47222C9.59193 3.86111 9.29047 4.16667 8.9068 4.16667C8.52312 4.16667 8.22166 3.86111 8.22166 3.47222V2.15278C6.59103 3.125 5.4811 4.88889 5.4811 6.94445H5.12483C5.03666 6.94445 4.94935 6.96205 4.86789 6.99625C4.78642 7.03045 4.7124 7.08058 4.65006 7.14378C4.58771 7.20697 4.53825 7.282 4.50451 7.36456C4.47077 7.44713 4.4534 7.53563 4.4534 7.625V7.66667C4.4534 8.02778 4.75486 8.33333 5.12483 8.33333ZM10.9622 13.8889C13.5109 13.8889 15.6349 12.1111 16.2515 9.72222H5.67294C6.28957 12.1111 8.4135 13.8889 10.9622 13.8889Z"
                        fill="#CFCFCF"
                      />
                    </svg>
                  </div>

                  <div className="card-body">
                    <div className={styles.whatWeCanDoCardHeader}>
                      Search Engine Marketing
                    </div>

                    <div className={styles.whatWeCanDoCardContent}>
                      Your target audience have the habit to use Google, Yahoo
                      or Bing search engine to find information about anything.
                      We will optimize your digital presence on Search Engine
                      Result Pages through relevant keywords to help your
                      digital growth.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
                  <div className={styles.whatWeCanDoCardIconWrapper}>
                    <svg
                      width="19"
                      height="34"
                      viewBox="0 0 19 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.143 18.8813L18.0482 12.9722H12.3902V9.13751C12.3902 7.5212 13.1803 5.94468 15.7145 5.94468H18.2865V0.914113C18.2865 0.914113 15.9528 0.515137 13.7209 0.515137C9.06176 0.515137 6.01639 3.34573 6.01639 8.46915V12.9732H0.836914V18.8823H6.01639V33.1679H12.3902V18.8823L17.143 18.8813Z"
                        fill="#CFCFCF"
                      />
                    </svg>
                  </div>
                  <div className="card-body">
                    <div className={styles.whatWeCanDoCardHeader}>
                      Facebook Marketing
                    </div>

                    <div className={styles.whatWeCanDoCardContent}>
                      Facebook is a major player in the digital world. We will
                      use through Facebook marketing platform to run sponsored
                      ads or drive engagement through content marketing to help
                      you achieve your goals faster
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  mt-3 gy-5">
          <div className="col-lg">
            <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
              <div className={styles.whatWeCanDoCardIconWrapper}>
                <svg
                  width="29"
                  height="21"
                  viewBox="0 0 29 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.94795 0.499539V20.7126H16.0524V10.7168C16.0524 8.07924 16.5351 5.52492 19.7161 5.52492C22.8534 5.52492 22.8923 8.54048 22.8923 10.8833V20.7143H29V9.62948C29 4.18449 27.8598 0 21.6694 0C18.6973 0 16.7052 1.67679 15.8905 3.26367H15.8079V0.499539H9.94795ZM0 0.499539H6.11421V20.7126H0V0.499539Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className={styles.whatWeCanDoCardHeader}>
                  Linkedin Advertising
                </div>

                <div className={styles.whatWeCanDoCardContent}>
                  LinkedIn has the largest group of influential, affluent, and
                  educated people network. We will use through LinkedIn
                  marketing to run sponsored ads & help you achieve your goals
                  faster.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
              <div className={styles.whatWeCanDoCardIconWrapper}>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4961 9.66461C11.8336 9.66461 9.6608 11.8375 9.6608 14.5C9.6608 17.1625 11.8336 19.3354 14.4961 19.3354C17.1586 19.3354 19.3314 17.1625 19.3314 14.5C19.3314 11.8375 17.1586 9.66461 14.4961 9.66461ZM28.9984 14.5C28.9984 12.4976 29.0165 10.5134 28.9041 8.51471C28.7916 6.19314 28.262 4.13275 26.5644 2.4351C24.8632 0.733824 22.8064 0.207844 20.4849 0.0953926C18.4826 -0.0170583 16.4984 0.00107896 14.4997 0.00107896C12.4974 0.00107896 10.5132 -0.0170583 8.51455 0.0953926C6.19302 0.207844 4.13267 0.737451 2.43505 2.4351C0.73381 4.13637 0.20784 6.19314 0.0953909 8.51471C-0.017058 10.5171 0.00107894 12.5013 0.00107894 14.5C0.00107894 16.4987 -0.017058 18.4866 0.0953909 20.4853C0.20784 22.8069 0.737438 24.8673 2.43505 26.5649C4.1363 28.2662 6.19302 28.7922 8.51455 28.9046C10.5169 29.0171 12.501 28.9989 14.4997 28.9989C16.502 28.9989 18.4862 29.0171 20.4849 28.9046C22.8064 28.7922 24.8668 28.2625 26.5644 26.5649C28.2657 24.8636 28.7916 22.8069 28.9041 20.4853C29.0201 18.4866 28.9984 16.5024 28.9984 14.5ZM14.4961 21.9399C10.379 21.9399 7.05634 18.6172 7.05634 14.5C7.05634 10.3828 10.379 7.0601 14.4961 7.0601C18.6132 7.0601 21.9359 10.3828 21.9359 14.5C21.9359 18.6172 18.6132 21.9399 14.4961 21.9399ZM22.2406 8.49294C21.2793 8.49294 20.503 7.71667 20.503 6.75539C20.503 5.79412 21.2793 5.01784 22.2406 5.01784C23.2018 5.01784 23.9781 5.79412 23.9781 6.75539C23.9784 6.98365 23.9336 7.20972 23.8464 7.42066C23.7592 7.6316 23.6312 7.82326 23.4698 7.98466C23.3084 8.14607 23.1168 8.27404 22.9058 8.36126C22.6949 8.44848 22.4688 8.49323 22.2406 8.49294Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className={styles.whatWeCanDoCardHeader}>
                  Instagram Advertising
                </div>

                <div className={styles.whatWeCanDoCardContent}>
                  Instagram helps connect more with millennials. We will use
                  through Instagram marketing to run sponsored ads that help you
                  achieve your goals faster.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg">
            <div className={`${styles.whatWeCanDoCard} mx-lg-0 mx-auto`}>
              <div className={styles.whatWeCanDoCardIconWrapper}>
                <svg
                  width="29"
                  height="25"
                  viewBox="0 0 29 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29 3.27605L25.8929 3.82519L27.9643 1.07949L24.3393 2.17777C19.6786 -3.31362 12.4286 2.72691 14.5 7.66917C6.21429 7.66917 2.07143 1.07949 2.07143 1.07949C2.07143 1.07949 -1.03571 6.02175 4.14286 9.86572L1.03571 8.76744C1.03571 12.0623 3.10714 14.2588 6.73214 15.3571H3.10714C5.17857 19.7502 8.80357 19.7502 8.80357 19.7502C8.80357 19.7502 5.69643 22.4959 0 22.4959C17.0893 31.2822 27.4464 14.808 25.8929 6.02175L29 3.27605Z"
                    fill="#CFCFCF"
                  />
                </svg>
              </div>
              <div className="card-body">
                <div className={styles.whatWeCanDoCardHeader}>
                  Twitter Advertising
                </div>

                <div className={styles.whatWeCanDoCardContent}>
                  Twitter is a social platform to find the latest information
                  about virtually any topic. We will use through Twitter
                  marketing to run sponsored ads or drive engagement to help you
                  achieve your goals faster.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDo;
