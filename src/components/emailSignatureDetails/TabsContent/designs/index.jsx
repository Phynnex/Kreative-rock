import { KreativeP } from 'globalStyles/style';
import styles from 'assets/css/email-signature-designs.module.css';
import { ReactComponent as PlusIcon } from 'assets/images/plus-icon.svg';
import { ReactComponent as MobileIcon } from 'assets/images/mobile-icon.svg';
import { ReactComponent as LocationIcon } from 'assets/images/location-icon.svg';
import { ReactComponent as WebsiteIcon } from 'assets/images/web-icon.svg';
import { ReactComponent as MailIcon } from 'assets/images/mail-icon.svg';
import { ReactComponent as FbLightDarkIcon } from 'assets/images/fb-light-black.svg';
import { ReactComponent as FbThickDarkIcon } from 'assets/images/fb-thick-black.svg';
import { ReactComponent as FbTransparentIcon } from 'assets/images/fb-transparent.svg';

function EmailSignatureDesigns() {
  return (
    <div>
      <KreativeP>
        <div className={styles.emailSignatureDesignsContainer}>
          <h3 className={styles.emailSignatureDesignsh3}>Font and color</h3>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Font family</h4>
            <select className='col-5' name='add-above' id=''>
              <option value=''>Lora</option>
              <option value=''>Sans-serif</option>
            </select>
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Spacing</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='normal'
              >
                <input
                  type='radio'
                  id='normal'
                  name='spacing'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '82px', height: '26px' }}
                >
                  Normal
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='compact'
              >
                <input
                  type='radio'
                  name='spacing'
                  id='compact'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '82px',
                    height: '26px',
                  }}
                >
                  Compact
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='spacious'
              >
                <input
                  type='radio'
                  name='spacing'
                  id='spacious'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '82px', height: '26px' }}
                >
                  Spacious
                </span>
              </label>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Font size</h4>
            <input type='range' name='fontSize' id='fontSize' />
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center mb-3'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Font color</h4>
            <div className='d-flex align-items-center'>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{
                  border: '2px solid #263238',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50px',
                }}
              >
                <div
                  className={styles.emailSignatureDesignsColorButton}
                  style={{ background: '#263238', marginLeft: 0 }}
                ></div>
              </div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#ff7900' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#00cca7' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#2a2876' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#cc004e' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{
                  background: '#dbdbdb',
                  border: '1px solid #939393',
                  textAlign: 'center',
                }}
              >
                <PlusIcon />
              </div>
            </div>
          </div>
          <h3 className={styles.emailSignatureDesignsh3}>Images</h3>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Shape</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='square'
              >
                <input
                  type='radio'
                  id='square'
                  name='shape'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '40px', height: '26px' }}
                >
                  <svg width='15.6' height='15.6'>
                    <rect width='15.6' height='15.6' />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='circle'
              >
                <input
                  type='radio'
                  name='shape'
                  id='circle'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '40px',
                    height: '26px',
                  }}
                >
                  <svg height='20' width='20'>
                    <circle cx='10' cy='10' r='7' />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='polygon'
              >
                <input
                  type='radio'
                  name='shape'
                  id='polygon'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '40px', height: '26px' }}
                >
                  <svg
                    width='16'
                    height='19'
                    viewBox='0 0 16 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.664955 5.69543L7.8721 1.53438L15.0792 5.69543V14.0175L7.8721 18.1786L0.664955 14.0175V5.69543Z'
                      stroke='#585858'
                      style={{ fill: 'transparent' }}
                    />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center mb-4'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Size</h4>
            <input type='range' name='sizeOne' id='sizeOne' />
          </div>
          <h3 className={styles.emailSignatureDesignsh3}>Details</h3>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Label</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='phone'
              >
                <input
                  type='radio'
                  id='phone'
                  name='label'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '72px', height: '26px' }}
                >
                  Phone
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='p'
              >
                <input
                  type='radio'
                  name='label'
                  id='p'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '72px',
                    height: '26px',
                  }}
                >
                  p
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='phoneIcon'
              >
                <input
                  type='radio'
                  name='label'
                  id='phoneIcon'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderRight: 'none',
                    width: '72px',
                    height: '26px',
                  }}
                >
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6159 12H10.5374C1.47155 11.4785 0.184328 3.82615 0.00439445 1.49077C-0.0101039 1.30919 0.0113559 1.12653 0.0675442 0.953267C0.123733 0.779999 0.213545 0.619525 0.331836 0.481039C0.450127 0.342554 0.594571 0.228779 0.756891 0.146234C0.919212 0.0636882 1.09622 0.0139947 1.27777 4.32734e-07H3.81991C4.00472 -0.000178535 4.18532 0.0551587 4.33832 0.158844C4.49132 0.26253 4.60968 0.409786 4.67806 0.581539L5.37934 2.30769C5.44686 2.47548 5.46362 2.65942 5.42753 2.83666C5.39144 3.01389 5.30409 3.17662 5.17634 3.30462L4.19362 4.29692C4.34713 5.16958 4.76488 5.974 5.39036 6.60137C6.01585 7.22873 6.81887 7.64875 7.69079 7.80462L8.69197 6.81231C8.82184 6.68592 8.98603 6.60058 9.16407 6.56693C9.34211 6.53327 9.52612 6.5528 9.69313 6.62308L11.4325 7.32C11.6016 7.39056 11.7459 7.50989 11.8469 7.66277C11.948 7.81566 12.0013 7.99518 12 8.17846V10.6154C12 10.9826 11.8542 11.3348 11.5946 11.5945C11.335 11.8541 10.983 12 10.6159 12ZM1.3885 0.923077C1.26614 0.923077 1.14879 0.971704 1.06226 1.05826C0.97574 1.14481 0.927132 1.26221 0.927132 1.38462V1.42154C1.13936 4.15385 2.5004 10.6154 10.5882 11.0769C10.6488 11.0807 10.7096 11.0724 10.767 11.0526C10.8244 11.0328 10.8773 11.0019 10.9228 10.9616C10.9682 10.9213 11.0052 10.8724 11.0317 10.8177C11.0583 10.7631 11.0737 10.7037 11.0772 10.6431V8.17846L9.33788 7.48154L8.01375 8.79692L7.7923 8.76923C3.77839 8.26615 3.23397 4.25077 3.23397 4.20923L3.20629 3.98769L4.51658 2.66308L3.82453 0.923077H1.3885Z'
                      fill='black'
                    />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='none'
              >
                <input
                  type='radio'
                  name='label'
                  id='none'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '72px', height: '26px' }}
                >
                  None
                </span>
              </label>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Label Icons</h4>
            <div className='d-block'>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={styles.emailSignatureDesignsLabelIconsText}>
                  Phone
                </p>
                <div
                  className={styles.emailSignatureDesignsLabelIconsContainer}
                >
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6159 12H10.5374C1.47155 11.4785 0.184328 3.82615 0.00439445 1.49077C-0.0101039 1.30919 0.0113559 1.12653 0.0675442 0.953267C0.123733 0.779999 0.213545 0.619525 0.331836 0.481039C0.450127 0.342554 0.594571 0.228779 0.756891 0.146234C0.919212 0.0636882 1.09622 0.0139947 1.27777 4.32734e-07H3.81991C4.00472 -0.000178535 4.18532 0.0551587 4.33832 0.158844C4.49132 0.26253 4.60968 0.409786 4.67806 0.581539L5.37934 2.30769C5.44686 2.47548 5.46362 2.65942 5.42753 2.83666C5.39144 3.01389 5.30409 3.17662 5.17634 3.30462L4.19362 4.29692C4.34713 5.16958 4.76488 5.974 5.39036 6.60137C6.01585 7.22873 6.81887 7.64875 7.69079 7.80462L8.69197 6.81231C8.82184 6.68592 8.98603 6.60058 9.16407 6.56693C9.34211 6.53327 9.52612 6.5528 9.69313 6.62308L11.4325 7.32C11.6016 7.39056 11.7459 7.50989 11.8469 7.66277C11.948 7.81566 12.0013 7.99518 12 8.17846V10.6154C12 10.9826 11.8542 11.3348 11.5946 11.5945C11.335 11.8541 10.983 12 10.6159 12ZM1.3885 0.923077C1.26614 0.923077 1.14879 0.971704 1.06226 1.05826C0.97574 1.14481 0.927132 1.26221 0.927132 1.38462V1.42154C1.13936 4.15385 2.5004 10.6154 10.5882 11.0769C10.6488 11.0807 10.7096 11.0724 10.767 11.0526C10.8244 11.0328 10.8773 11.0019 10.9228 10.9616C10.9682 10.9213 11.0052 10.8724 11.0317 10.8177C11.0583 10.7631 11.0737 10.7037 11.0772 10.6431V8.17846L9.33788 7.48154L8.01375 8.79692L7.7923 8.76923C3.77839 8.26615 3.23397 4.25077 3.23397 4.20923L3.20629 3.98769L4.51658 2.66308L3.82453 0.923077H1.3885Z'
                      fill='black'
                    />
                  </svg>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={styles.emailSignatureDesignsLabelIconsText}>
                  Mobile
                </p>
                <div
                  className={styles.emailSignatureDesignsLabelIconsContainer}
                >
                  <MobileIcon />
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={styles.emailSignatureDesignsLabelIconsText}>
                  Email
                </p>
                <div
                  className={styles.emailSignatureDesignsLabelIconsContainer}
                >
                  <MailIcon />
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={styles.emailSignatureDesignsLabelIconsText}>
                  Website
                </p>
                <div
                  className={styles.emailSignatureDesignsLabelIconsContainer}
                >
                  <WebsiteIcon />
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={styles.emailSignatureDesignsLabelIconsText}>
                  Address
                </p>
                <div
                  className={styles.emailSignatureDesignsLabelIconsContainer}
                >
                  <LocationIcon />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap mb-5'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Seperator</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='line'
              >
                <input
                  type='radio'
                  id='line'
                  name='seperator'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '72px', height: '26px' }}
                >
                  <svg
                    width='2'
                    height='18'
                    viewBox='0 0 2 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <line
                      x1='1.00098'
                      y1='4.37114e-08'
                      x2='1.00098'
                      y2='18'
                      stroke='#263238'
                      stroke-width='2'
                    />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='block'
              >
                <input
                  type='radio'
                  name='seperator'
                  id='block'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '72px',
                    height: '26px',
                  }}
                >
                  <svg
                    width='8'
                    height='8'
                    viewBox='0 0 8 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      x='0.000976562'
                      width='8'
                      height='8'
                      style={{ fill: 'black' }}
                    />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='circle2'
              >
                <input
                  type='radio'
                  name='seperator'
                  id='circle2'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderRight: 'none',
                    width: '72px',
                    height: '26px',
                  }}
                >
                  <svg
                    width='9'
                    height='9'
                    viewBox='0 0 9 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='4.5'
                      cy='4.5'
                      r='4.5'
                      fill='#263238'
                      style={{ fill: 'black' }}
                    />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='none2'
              >
                <input
                  type='radio'
                  name='seperator'
                  id='none2'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '72px', height: '26px' }}
                >
                  None
                </span>
              </label>
            </div>
          </div>
          <h3 className={styles.emailSignatureDesignsh3}>Social Icons</h3>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Style</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='fbtransparent'
              >
                <input
                  type='radio'
                  id='fbtransparent'
                  name='style'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '82px', height: '26px' }}
                >
                  <FbTransparentIcon />
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='fbthickdark'
              >
                <input
                  type='radio'
                  name='style'
                  id='fbthickdark'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '82px',
                    height: '26px',
                  }}
                >
                  <FbThickDarkIcon />
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='fblightdark'
              >
                <input
                  type='radio'
                  name='style'
                  id='fblightdark'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '82px', height: '26px' }}
                >
                  <FbLightDarkIcon />
                </span>
              </label>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Shape</h4>
            <div className='col-5 d-flex'>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='square2'
              >
                <input
                  type='radio'
                  id='square2'
                  name='shape2'
                  checked
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '40px', height: '26px' }}
                >
                  <svg width='15.6' height='15.6'>
                    <rect width='15.6' height='15.6' />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='circleshape'
              >
                <input
                  type='radio'
                  name='shape2'
                  id='circleshape'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{
                    borderLeft: 'none',
                    borderRight: 'none',
                    width: '40px',
                    height: '26px',
                  }}
                >
                  <svg height='20' width='20'>
                    <circle cx='10' cy='10' r='7' />
                  </svg>
                </span>
              </label>
              <label
                className={`${styles.emailSignatureDesignsLabel}`}
                htmlFor='polygon2'
              >
                <input
                  type='radio'
                  name='shape2'
                  id='polygon2'
                  className={styles.emailSignatureDesignsRadioInput}
                />
                <span
                  className={styles.emailSignatureDesignsPseudoContainer}
                  style={{ width: '40px', height: '26px' }}
                >
                  <svg
                    width='16'
                    height='19'
                    viewBox='0 0 16 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.664955 5.69543L7.8721 1.53438L15.0792 5.69543V14.0175L7.8721 18.1786L0.664955 14.0175V5.69543Z'
                      stroke='#585858'
                      style={{ fill: 'transparent' }}
                    />
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className='mt-4 d-flex flex-wrap align-items-center mb-4'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Size</h4>
            <input type='range' name='sizeTwo' id='sizeTwo' />
          </div>

          <div className='mt-4 d-flex flex-wrap align-items-center mb-3'>
            <h4 className={`${styles.emailSignatureDesignsh4}`}>Icon color</h4>
            <div className='d-flex col-5 align-items-center'>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{
                  border: '2px solid #263238',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50px',
                }}
              >
                <div
                  className={styles.emailSignatureDesignsColorButton}
                  style={{ background: '#263238', marginLeft: 0 }}
                ></div>
              </div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#ff7900' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#00cca7' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#2a2876' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{ background: '#cc004e' }}
              ></div>
              <div
                className={styles.emailSignatureDesignsColorButton}
                style={{
                  background: '#dbdbdb',
                  border: '1px solid #939393',
                  textAlign: 'center',
                }}
              >
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className={styles.emailSignatureDesignsh3}>
              Reset Template Design
            </h3>
          </div>
        </div>
      </KreativeP>
    </div>
  );
}

export default EmailSignatureDesigns;
