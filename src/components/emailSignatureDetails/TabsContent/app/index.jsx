import styles from 'assets/css/email-signature-app.module.css';
import BannerBg from 'assets/images/unsplash_gMsnXqILjp4.png';
import BannerImg from 'assets/images/unsplash_odxB5oIG_iA.png';
import { ReactComponent as BannerSvg } from 'assets/images/esa-banner.svg';
import { ReactComponent as PlusIcon } from 'assets/images/plus-icon.svg';

const EmailSignatureApp = () => {
  return (
    <div className={styles.emailSignatureContainer}>
      <h2 className={styles.emailSignatureh2}>Enhance your signature</h2>
      <h3 className={`${styles.emailSignatureh3} mt-4`}>Disclaimer</h3>
      <h4 className={`${styles.emailSignatureh4}`}>Choose your disclaimer</h4>
      <div className='mt-1'>
        <div className='d-flex'>
          <div
            className={`${styles.emailSignature} d-flex align-items-center me-5`}
          >
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
        </div>
        <div className='d-flex mt-4'>
          <div className='d-flex me-5'>
            <span className={`${styles.emailSignatureIconOrange} mt-2`}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex'>
            <span className={`${styles.emailSignatureIconGreen} mt-2`}></span>
            <label htmlFor='' className='ms-2 me-3'>
              Custom
            </label>
            <textarea
              name=''
              id=''
              cols='20'
              rows='2'
              placeholder='Type your disclaimer here'
            ></textarea>
          </div>
        </div>
      </div>
      <h3 className={`${styles.emailSignatureh3} mt-4`}>Quote</h3>
      <div className='mt-3'>
        <div className='d-flex'>
          <div
            className={`${styles.emailSignature} d-flex align-items-center me-5`}
          >
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
        </div>
        <div className='d-flex mt-4'>
          <div className='d-flex align-items-center me-5'>
            <span className={`${styles.emailSignatureIconOrange} mt-2`}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex'>
            <span className={`${styles.emailSignatureIconGreen} mt-2`}></span>
            <label htmlFor='' className='ms-2 me-3'>
              Custom
            </label>
            <textarea
              name=''
              id=''
              cols='20'
              rows='2'
              placeholder='Type your disclaimer here'
            ></textarea>
          </div>
        </div>
      </div>
      <h3 className={`${styles.emailSignatureh3} mt-4`}>Styled signoff</h3>
      <div className='d-flex mt-4'>
        <label
          className={`${styles.emailSignatureSignOffLabel} me-2`}
          htmlFor='one'
        >
          <input
            type='radio'
            id='one'
            name='radio'
            className={styles.emailSignatureSignOffRadioInput}
          />
          <span className={styles.emailSignatureSignOffPseudoContainer}>
            Your name
          </span>
          <span className={styles.emailSignatureSignOffCheckedIcon}></span>
        </label>
        <label
          className={`${styles.emailSignatureSignOffLabel} me-2`}
          htmlFor='two'
        >
          <input
            type='radio'
            name='radio'
            id='two'
            className={styles.emailSignatureSignOffRadioInput}
          />
          <span className={styles.emailSignatureSignOffPseudoContainer}>
            Kind Regards
          </span>
          <span className={styles.emailSignatureSignOffCheckedIcon}></span>
        </label>
        <label
          className={`${styles.emailSignatureSignOffLabel} me-2`}
          htmlFor='three'
        >
          <input
            type='radio'
            name='radio'
            id='three'
            className={styles.emailSignatureSignOffRadioInput}
          />
          <span className={styles.emailSignatureSignOffPseudoContainer}>
            Custom
          </span>
          <span className={styles.emailSignatureSignOffCheckedIcon}></span>
        </label>
      </div>
      <div className='mt-5 d-flex'>
        <label htmlFor='' className='me-4'>
          Add above
        </label>
        <select name='add-above' id=''>
          <option value=''>Kind Regards</option>
          <option value=''>Custom</option>
        </select>
      </div>
      <div className='mt-3 d-flex'>
        <label htmlFor='' className='me-2'>
          Create a custom signature
        </label>
        <textarea
          name=''
          id=''
          cols='20'
          rows='2'
          placeholder='Type your disclaimer here'
        ></textarea>
      </div>
      <h3 className={`${styles.emailSignatureh3} mt-4`}>Designed banners</h3>
      <h4 className={`${styles.emailSignatureh4} mt-2`}>Choose your banner</h4>
      <div className='d-flex'>
        <div className='d-flex align-items-center mt-2 me-5'>
          <span className={`${styles.emailSignatureIconGreen} me-3`}></span>
          <div
            className={`${styles.emailSignatureBannerCard}`}
            style={{ background: '#f7a9a0' }}
          >
            <p className='d-flex align-items-center justify-content-center h-100 text-white'>
              Lorem loisnnub sgcuhd
            </p>
          </div>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <span className={`${styles.emailSignatureIconGreen} me-3`}></span>
          <div
            className={`${styles.emailSignatureBannerCard} d-flex align-items-center justify-content-center`}
            style={{ background: '#4527a0' }}
          >
            <BannerSvg />
          </div>
        </div>
      </div>
      <div className='d-flex mt-1'>
        <div className='d-flex align-items-center mt-2 me-5'>
          <span className={`${styles.emailSignatureIconOrange} me-3`}></span>
          <div
            className={`${styles.emailSignatureBannerCard} d-flex`}
            style={{ background: '#00cca7' }}
          >
            <img src={BannerImg} alt='esa-img' />
            <p className='d-flex align-items-center justify-content-center h-100 ps-1 small text-white'>
              Lorem loisnnub sgcuhd
            </p>
          </div>
        </div>
        <div className='d-flex align-items-center mt-2'>
          <span className={`${styles.emailSignatureIconGreen} me-3`}></span>
          <div
            className={`${styles.emailSignatureBannerCard}`}
            style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <p className='d-flex align-items-center justify-content-center h-100 small text-white'>
              Lorem loisnnub sgcuhd
            </p>
          </div>
        </div>
      </div>
      <h3 className={`${styles.emailSignatureh3} mt-5`}>Color footer</h3>
      <div className='mt-3'>
        <div className='d-flex'>
          <div
            className={`${styles.emailSignature} d-flex align-items-center me-5`}
          >
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex align-items-center'>
            <span className={styles.emailSignatureIconGreen}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
        </div>
        <div className='d-flex mt-3'>
          <div className='d-flex align-items-center me-5'>
            <span className={styles.emailSignatureIconOrange}></span>
            <label htmlFor='' className='ms-2 me-4'>
              Lorem
            </label>
            <input type='text' placeholder='Lorem Ipsum is simply dummy' />
          </div>
          <div className='d-flex'>
            <span className={`${styles.emailSignatureIconGreen} mt-2`}></span>
            <label htmlFor='' className='ms-2 me-3'>
              Custom
            </label>
            <textarea
              name=''
              id=''
              cols='20'
              rows='2'
              placeholder='Type your disclaimer here'
            ></textarea>
          </div>
        </div>
      </div>
      <div className='d-flex align-items-center mt-3'>
        <div
          className='d-flex align-items-center justify-content-center ms-5'
          style={{
            border: '2px solid #263238',
            width: '38px',
            height: '38px',
            borderRadius: '50px',
          }}
        >
          <div
            className={styles.emailSignatureColorButton}
            style={{ background: '#263238', marginLeft: 0 }}
          ></div>
        </div>
        <div
          className={styles.emailSignatureColorButton}
          style={{ background: '#ff7900' }}
        ></div>
        <div
          className={styles.emailSignatureColorButton}
          style={{ background: '#00cca7' }}
        ></div>
        <div
          className={styles.emailSignatureColorButton}
          style={{ background: '#2a2876' }}
        ></div>
        <div
          className={styles.emailSignatureColorButton}
          style={{ background: '#cc004e' }}
        ></div>
        <div
          className={styles.emailSignatureColorButton}
          style={{
            background: '#dbdbdb',
            border: '1px solid #939393',
            textAlign: 'center',
          }}
        >
          <PlusIcon />
        </div>
      </div>
      <h3 className={`${styles.emailSignatureh3} mt-5`}>HTML</h3>
      <div>
        <p className='mt-1 mb-2 small'>Use HTML</p>
        <textarea
          name=''
          id=''
          cols='20'
          rows='5'
          style={{ height: '100px', width: '262px' }}
          placeholder='Type your disclaimer here'
        ></textarea>
      </div>
    </div>
  );
};

export default EmailSignatureApp;
