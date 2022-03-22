import CustomMobileNav from "components/CustomMobileNav"
import CustomNavbar from "components/CustomNavbar"
// import CustomNavbar from "components/CustomNavbar"
// import Navbar from "components/Navbar"
import React from "react"
import Footer from "../components/Footer"

const Mainlayout = props => {
	return (
		<div className="body-bg">
			<CustomNavbar />
			<CustomMobileNav />
			{props.children}
			<Footer />
		</div>
	)
}

export default Mainlayout
