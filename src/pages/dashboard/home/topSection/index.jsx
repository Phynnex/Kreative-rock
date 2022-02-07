import { mobileTextingHomecon, notificationIcon } from "components/socialicons"
import { Div, Img, KreativeP } from "globalStyles/style"
import React from "react"
import { MInnerTopDiv, MTopDiv, TopImgDiv } from "./style"

function DashboardTopSection() {
	return (
		<MTopDiv>
			<MInnerTopDiv>
				<Div>
					<h5>Dashboard</h5>
					<KreativeP>Welcome back Bube!</KreativeP>
				</Div>
				<Div display="flex">
					<TopImgDiv>
						<Img src={mobileTextingHomecon} alt="Mobile-texting" />
					</TopImgDiv>
					<Img width="27px" height="27px" src={notificationIcon} alt="notification" />
				</Div>
			</MInnerTopDiv>
		</MTopDiv>
	)
}

export default DashboardTopSection
