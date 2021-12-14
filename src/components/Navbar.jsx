import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [mobileNav, setMobileNav] = useState(true);
  const [serviceTab, setServiceTab] = useState(true);
  const [menuIconChange, setMenuIconChange] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileNav(!mobileNav);
    setMenuIconChange(!menuIconChange);
  };

  const toggleServiceTab = () => {
    setServiceTab(!serviceTab);
  };
  return (
    <nav>
      <div className="container">
        {/* logo */}
        <img className="logo" src={Logo} alt="kreative-rock-digital-logo" />

        <ul className="list-unstyled float-end menu-items mb-0">
          <li className="d-lg-inline d-none">
            <Link
              className={splitLocation[1] === "" ? "activeNavMenu" : ""}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="d-lg-inline d-none">
            <button
              onClick={toggleServiceTab}
              className={
                splitLocation[1] === "mobile-texting" ||
                splitLocation[1] === "brand-management" ||
                splitLocation[1] === "digital-marketing" ||
                splitLocation[1] === "email-signature"
                  ? "activeNavMenu"
                  : ""
              }
            >
              Services <KeyboardArrowDownIcon />
            </button>

            <div
              onMouseLeave={toggleServiceTab}
              className={`service-tab shadow  ${serviceTab && "d-lg-none"}`}
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link onClick={toggleServiceTab} to="/mobile-texting">
                    Mobile Texting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={toggleServiceTab} to="/email-signature">
                    Email Signature Management
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={toggleServiceTab} to="/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>

                <li className="mb-2">
                  <Link onClick={toggleServiceTab} to="/brand-management">
                    Brand Management
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="d-lg-inline d-none">
            <Link
              className={splitLocation[1] === "pricing" ? "activeNavMenu" : ""}
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="d-lg-inline d-none">
            <Link
              className={splitLocation[1] === "contact" ? "activeNavMenu" : ""}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li className="d-lg-inline d-none">
            <Link
              className={splitLocation[1] === "login" ? "activeNavMenu" : ""}
              to="/sign-in"
            >
              Log in
            </Link>
          </li>
          <li className="d-lg-inline d-none">
            <Link className="pri-btn" to="/register">
              Sign Up For Free
            </Link>
          </li>

          <li className="d-lg-none d-inline ">
            <button>
              <MenuIcon
                className={menuIconChange && "d-none"}
                onClick={toggleMobileNavbar}
              />
              <CloseIcon
                className={!menuIconChange && "d-none"}
                onClick={toggleMobileNavbar}
              />
            </button>
          </li>
        </ul>
      </div>

      <div className={`d-lg-none mobile-nav ${mobileNav && "d-none"}`}>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
