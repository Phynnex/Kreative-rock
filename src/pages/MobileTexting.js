import ScrollToTop from "components/ScrollToTop"
import React from "react"
import EnquiryForm from "../components/home/EnquiryForm"
import Banner from "../components/mobile-texting/Banner"
// import SectionFive from "../components/mobile-texting/SectionFive";
import SectionFour from "../components/mobile-texting/SectionFour"
import SectionOne from "../components/mobile-texting/SectionOne"
import SectionThree from "../components/mobile-texting/SectionThree"
import SectionTwo from "../components/mobile-texting/SectionTwo"

const MobileTexting = () => {
	return (
		<>
			<ScrollToTop />
			<Banner />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			{/* <SectionFive /> */}
			<EnquiryForm />
		</>
	)
}

export default MobileTexting
