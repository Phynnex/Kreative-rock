import CustomMobileNav from "components/CustomMobileNav"
import CustomNavbar from "components/CustomNavbar"
import React from "react"
import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"

const Mainlayout = props => {
	return (
		<div className="body-bg">
			<CustomNavbar />
			<CustomMobileNav />
			{/* <Navbar /> */}
			{props.children}
			<Footer />
		</div>
	)
}

export default Mainlayout
