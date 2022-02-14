import ScrollToTop from "components/ScrollToTop"
import React from "react"
// import "../assets/css/home.css";
import Clients from "../components/home/Clients"
import EnquiryForm from "../components/home/EnquiryForm"
import Hero from "../components/home/Hero"
import ServicesSection from "../components/home/ServicesSection"
import WhySection from "../components/home/WhySection"

const Home = () => {
	return (
		<div>
			<ScrollToTop />
			<Hero />
			<WhySection />
			<ServicesSection />
			<Clients />
			<EnquiryForm />
		</div>
	)
}

export default Home
