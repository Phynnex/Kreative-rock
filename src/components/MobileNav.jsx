import React from "react"
import { Link, useLocation } from "react-router-dom"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import "bootstrap/dist/js/bootstrap.bundle.min"

const MobileNav = ({ onDropDownItem }) => {
	const location = useLocation()
	const { pathname } = location
	const splitLocation = pathname.split("/")
	return (
		<div className="container">
			<ul className="list-unstyled">
				<li className="pt-5" onClick={onDropDownItem}>
					<Link className={splitLocation[1] === "" ? "activeNavMenu" : ""} to="/">
						Home
					</Link>
				</li>
				<li className="pt-5">
					<button
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						className={
							splitLocation[1] === "mobile-texting" || splitLocation[1] === "brand-management" || splitLocation[1] === "digital-marketing" || splitLocation[1] === "email-signature"
								? "activeNavMenu"
								: ""
						}
					>
						{" "}
						Services <KeyboardArrowDownIcon />
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li onClick={onDropDownItem}>
							<Link class="dropdown-item" to="/mobile-texting">
								Mobile Texting
							</Link>
						</li>
						<li onClick={onDropDownItem}>
							<Link class="dropdown-item" to="/email-signature">
								Email Signature Management
							</Link>
						</li>
						<li onClick={onDropDownItem}>
							<Link class="dropdown-item" to="/digital-marketing">
								Digital Marketing
							</Link>
						</li>

						<li onClick={onDropDownItem}>
							<Link class="dropdown-item" to="/brand-management">
								Brand Management
							</Link>
						</li>
					</ul>
				</li>
				<li className="pt-5" onClick={onDropDownItem}>
					<Link className={splitLocation[1] === "pricing" ? "activeNavMenu" : ""} to="/pricing">
						Pricing
					</Link>
				</li>
				<li className="pt-5">
					<Link className={splitLocation[1] === "contact" ? "activeNavMenu" : ""} to="contact-us">
						Contact Us
					</Link>
				</li>
				<li className="pt-5 pb-5" onClick={onDropDownItem}>
					<Link className={splitLocation[1] === "login" ? "activeNavMenu" : ""} to="/login">
						Login
					</Link>
				</li>
			</ul>

			<div className="d-grid gap-2 text-center">
				<Link className="pri-btn" to="/register" onClick={onDropDownItem}>
					Sign Up For Free
				</Link>
			</div>
		</div>
	)
}

export default MobileNav
