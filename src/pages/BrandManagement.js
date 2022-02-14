import ScrollToTop from "components/ScrollToTop"
import React from "react"
import BrandBanner from "../components/brand-management/BrandBanner"
import BrandSectionFour from "../components/brand-management/BrandSectionFour"
import BrandSectionOne from "../components/brand-management/BrandSectionOne"
import BrandSectionThree from "../components/brand-management/BrandSectionThree"
import BrandSectionTwo from "../components/brand-management/BrandSectionTwo"
import EnquiryForm from "../components/home/EnquiryForm"

const BrandManagement = () => {
	return (
		<>
			<div style={{ backgroundColor: "#f9fcff" }}>
				<ScrollToTop />
				<BrandBanner />
				<BrandSectionOne />
				<BrandSectionTwo />
				<BrandSectionThree />
				<BrandSectionFour />
				<EnquiryForm />
			</div>
		</>
	)
}

export default BrandManagement
