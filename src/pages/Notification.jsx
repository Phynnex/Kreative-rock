import React from "react"
import styles from "../assets/css/notification.module.css"
import NotCircle from "../assets/images/not-circle.png"
import NotBoxImg from "../assets/images/not-img.png"
import MeetingIcon1 from "../assets/images/Group 9392.png"
import MeetingIcon2 from "../assets/images/Group 9393.png"
import MeetingIcon3 from "../assets/images/Group 9394.png"
import ScrollToTop from "components/ScrollToTop"

const Notification = () => {
	const messageData = [
		{
			img: MeetingIcon1,
			messageHeader: "Team Meeting",
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum amet, senectus aliquet scelerisque nisl pellentesque velitcommodo quis. Commodo sagittis sed rhoncus sed arcu.",
			received: "10am - 11pm"
		},

		{
			img: MeetingIcon2,
			messageHeader: "Team Meeting",
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum amet, senectus aliquet scelerisque nisl pellentesque velitcommodo quis. Commodo sagittis sed rhoncus sed arcu.",
			received: "10am - 11pm"
		},

		{
			img: MeetingIcon3,
			messageHeader: "Meeting With Client",
			message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum amet, senectus aliquet scelerisque nisl pellentesque velitcommodo quis. Commodo sagittis sed rhoncus sed arcu.",
			received: "10am - 11pm"
		}
	]

	return (
		<div className={styles.notificationWrapper}>
			<ScrollToTop />
			<div className="container">
				<img className="position-absolute top-0 end-0 d-lg-block d-none" src={NotCircle} alt="" />

				<div className={`text-md-start text-center ${styles.notificationBox}`}>
					<div className="row">
						<div className="col-5">
							<div className={styles.notificationBoxText}>Notifications</div>
						</div>
						<div className="col">
							<img src={NotBoxImg} alt="" />
						</div>
					</div>
				</div>

				<div>
					<div className="float-end fw-bold">
						Today
						<svg className="ms-2" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 1L9 9" stroke="#272D3B" stroke-width="2" stroke-linecap="round" />
							<path d="M1 1L9 9" stroke="#272D3B" stroke-width="2" stroke-linecap="round" />
						</svg>
					</div>

					{messageData.map((val, key) => {
						return (
							<div className="mt-5">
								<div className="d-flex align-items-center gap-3">
									<img src={val.img} alt="" />
									<div className={styles.notificationHeader}>{val.messageHeader}</div>
								</div>

								<div className={`d-flex justify-content-between flex-wrap mt-3 ${styles.messageWrapper}`}>
									<div className={styles.message}>{val.message}</div>

									<div className="fw-bold">{val.received}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Notification
