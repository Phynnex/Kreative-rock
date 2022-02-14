import ScrollToTop from "components/ScrollToTop"
import React from "react"
import styles from "../assets/css/referral-code.module.css"
import ReferralDetails from "../components/referral/ReferralDetails"
import SectionTwo from "../components/referral/SectionTwo"

const ReferralCode = () => {
	return (
		<div className={styles.referralWrapper}>
			<ScrollToTop />
			<div className="container">
				<ReferralDetails />
				<SectionTwo />
			</div>
		</div>
	)
}

export default ReferralCode
