import { mobileTextingHomecon, notificationIcon } from "components/socialicons"
import { Div, Img, KreativeP } from "globalStyles/style"
import React from "react"
import { useQuery } from "react-query"
import { getCurrentUser } from "services/userService"
import { MInnerTopDiv, MTopDiv, TopImgDiv, DVerifyContainer } from "./style"
import VerifyAccountInput from "./verifyAccount"

function DashboardTopSection() {
	const { data } = useQuery("userData", getCurrentUser)
	const userData = data?.data?.profile?.personalInformation

	return (
		<MTopDiv>
			<MInnerTopDiv>
				<DVerifyContainer>
					<h5>Dashboard</h5>
					<KreativeP>Welcome back {userData?.fullname?.split(" ")[0]}!</KreativeP>
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
