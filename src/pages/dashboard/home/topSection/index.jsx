import { mobileTextingHomecon, notificationIcon } from "components/socialicons"
import { Div, Img, KreativeP } from "globalStyles/style"
import React from "react"
import { MInnerTopDiv, MTopDiv, TopImgDiv, DVerifyContainer } from "./style"
import VerifyAccountInput from "./verifyAccount"

function DashboardTopSection() {
	return (
		<MTopDiv>
			<MInnerTopDiv>
				<DVerifyContainer>
					<h5>Dashboard</h5>
					<KreativeP>Welcome back Bube!</KreativeP>
					<VerifyAccountInput />
				</DVerifyContainer>
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
