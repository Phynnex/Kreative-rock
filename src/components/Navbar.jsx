import React, { useState } from "react"
import Logo from "../assets/images/logo.png"
import { Link, useLocation } from "react-router-dom"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import MenuIcon from "@material-ui/icons/Menu"
import MobileNav from "./MobileNav"

const Navbar = () => {
	const location = useLocation()
	const { pathname } = location
	const splitLocation = pathname.split("/")
	const [mobileNav, setMobileNav] = useState(true)

	const toggleMobileNavbar = () => {
		setMobileNav(!mobileNav)
	}
	return (
		<nav>
			<div className="container">
				{/* logo */}
				<img className="logo" src={Logo} alt="kreative-rock-digital-logo" />

				<ul className="list-unstyled float-end menu-items mb-0">
					<li className="d-lg-inline d-none">
						<Link className={splitLocation[1] === "" ? "activeNavMenu" : ""} to="/">
							Home
						</Link>
					</li>

					<li className="d-lg-inline d-none">
						<button
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							to="#"
							className={
								splitLocation[1] === "mobile-texting" || splitLocation[1] === "brand-management" || splitLocation[1] === "digital-marketing" || splitLocation[1] === "email-signature"
									? "activeNavMenu"
									: ""
							}
						>
							Services <KeyboardArrowDownIcon />
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li onClick={toggleMobileNavbar}>
								<Link class="dropdown-item" to="/mobile-texting">
									Mobile Texting
								</Link>
							</li>
							<li onClick={toggleMobileNavbar}>
								<Link class="dropdown-item" to="/email-signature">
									Email Signature Management
								</Link>
							</li>
							<li onClick={toggleMobileNavbar}>
								<Link class="dropdown-item" to="/digital-marketing">
									Digital Marketing
								</Link>
							</li>

							<li onClick={toggleMobileNavbar}>
								<Link class="dropdown-item" to="/brand-management">
									Brand Management
								</Link>
							</li>
						</ul>
					</li>

					<li className="d-lg-inline d-none">
						<Link className={splitLocation[1] === "pricing" ? "activeNavMenu" : ""} to="/pricing">
							Pricing
						</Link>
					</li>
					<li className="d-lg-inline d-none">
						<Link className={splitLocation[1] === "contact" ? "activeNavMenu" : ""} to="/contact-us">
							Contact Us
						</Link>
					</li>
					<li className="d-lg-inline d-none">
						<Link className={splitLocation[1] === "login" ? "activeNavMenu" : ""} to="/sign-in">
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
							<MenuIcon onClick={toggleMobileNavbar} />
						</button>
					</li>
				</ul>
			</div>

			<div className={`d-lg-none mobile-nav ${mobileNav && "d-none"}`}>
				<MobileNav onDropDownItem={toggleMobileNavbar} />
			</div>
		</nav>
	)
}

export default Navbar
