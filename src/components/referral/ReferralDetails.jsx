import React from "react"
import styles from "../../assets/css/referral-code.module.css"
import RefPic from "../../assets/images/referralPic.png"

const ReferralDetails = () => {
	return (
		<div className={styles.referralDetailsBox}>
			<div className="row">
				<div className="col-lg-2">
					<div className="d-flex justify-content-between">
						<div style={{ backgroundImage: `url(${RefPic})` }} className={`mt-2 ${styles.referralDetailsImg}`}></div>
						<div className={`d-lg-none d-block ${styles.priceBox}`}>$100 Credit</div>
					</div>
				</div>

				<div className="col-lg-7">
					<div className="text-white">
						<div className={styles.referralDetailsHeader}>Refer Friends & Earn Credit</div>
						<div className={styles.referralDetailsText}>Introduce a friend to fintech and you&#8217;ll be crEditd $100 to your account</div>
					</div>
				</div>

				<div className="col-lg-3 d-lg-block d-none">
					<div className={styles.priceBox}>$100 Credit</div>
				</div>
			</div>
		</div>
	)
}

export default ReferralDetails
