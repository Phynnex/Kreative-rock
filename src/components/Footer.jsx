import React from 'react'
import subImg from '../assets/images/cuate.png'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
  WhatsApp,
} from '@material-ui/icons'
// import WhatsappOutlinedIcon from "@material-ui/icons/";
// import LocalPhoneOutlinedIcon from "@material-ui/icons/";
// import LocationOnOutlinedIcon from "@material-ui/icons/";
// import MailOutlineOutlinedIcon from "@material-ui/icons/";
import LinkIcon from '../assets/images/link.png'
import Facebook from '../assets/images/fb.png'
import Instagram from '../assets/images/insta.png'
import Linkedin from '../assets/images/linkedin.png'
import Twitter from '../assets/images/tw.png'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          {/* subscribe box */}
          <div className="subscribe-box mx-auto d-flex flex-wrap align-items-center g-3 justify-content-center justify-content-lg-start">
            <img src={subImg} alt="" />

            <div className="subscribe-wrapper">
              <div className="text-white">
                <h4>Subscribe Now</h4>
                <p>Get the latest updates</p>
              </div>

              <form
                action=""
                className="d-flex flex-wrap justify-content-center"
              >
                <input
                  className="subscribe-input-box"
                  type="email"
                  placeholder="enter your email address"
                />
                <input
                  className="subscribe-btn"
                  type="submit"
                  value="subscribe"
                />
              </form>
            </div>
          </div>

          <div className="footer-content">
            <div className="row ">
              <div className="col-lg">
                <div className="text-white">
                  <h4>About Us</h4>
                  <p>
                    We are a complete marketing management company that leverage
                    technology to create cutting-edged, tailored and modern
                    business solutions that drives engagement & helps position
                    brands better for sustained business growth.
                  </p>

                  <h4>Mission statement</h4>
                  <ul>
                    <li>
                      Create business solutions that works for sustained
                      business growth.
                    </li>

                    <li>
                      Help improve company&#8217;s chances of success through
                      results-oriented strategies
                    </li>

                    <li>
                      Give back to the society through community development
                      services.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="text-white footer-link-column mx-lg-auto mx-0">
                  <h4>Links</h4>
                  <p>
                    <Link className="text-white" to="/">
                      <ChevronRight /> About Us
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/contact-us">
                      <ChevronRight /> Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/">
                      <ChevronRight /> Our Services
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/">
                      <ChevronRight /> Blog
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/policy">
                      <ChevronRight /> Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/terms">
                      <ChevronRight /> Term Of Use
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white" to="/">
                      <ChevronRight /> API Documentation
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg">
                <div className="text-white">
                  <h4>Contact</h4>
                  <div className="d-flex  align-items-center mt-3">
                    <LocationOnOutlined />{" "}
                    <p className="mb-0 ms-3">
                      No. 77 Ojueleba Road, Surulere, Lagos State, Nigeria
                    </p>
                  </div>

                  <div className="d-flex  align-items-center mt-3">
                    <WhatsApp />{" "}
                    <a
                      className="mb-0 ms-3"
                      href="https://wa.me/message/ZPWVDEPXR6LAL1"
                    >
                      +2348094200003
                    </a>
                  </div>

                  <div className="d-flex  align-items-center mt-3">
                    <LocalPhoneOutlined />{" "}
                    <p className="mb-0 ms-3">+2348094200003</p>
                  </div>

                  <div className="d-flex  align-items-center mt-3">
                    <MailOutlineOutlined />{" "}
                    <a className="mb-0 ms-3" href="mailto: info@kreativerock.com">
                      info@kreativerock.com
                    </a>
                  </div>

                  <div className="d-flex  align-items-center mt-3">
                    <img src={LinkIcon} alt="" />
                    <a className="mb-0 ms-3" href="https://kreativerock.com/">
                      https://kreativerock.com/
                    </a>
                  </div>

                  <div className="d-flex gap-3 mt-3">
                    <a href="https://web.facebook.com/kreativerockhq">
                      <img src={Facebook} alt="facebook-icon" />
                    </a>

                    <a href="https://www.instagram.com/kreativerockhq/">
                      <img src={Instagram} alt="instagram-icon" />
                    </a>

                    <a href="https://www.linkedin.com/company/kreativerock/">
                      <img src={Linkedin} alt="Linkedin-icon" />
                    </a>

                    <a href="https://twitter.com/kreativerockhq">
                      <img src={Twitter} alt="Twitter-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-bar text-center text-white pt-2 pb-2">
        © Copyright KreativeRock. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer
