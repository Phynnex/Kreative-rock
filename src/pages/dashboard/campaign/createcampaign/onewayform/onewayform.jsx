import { Img, KButton } from "globalStyles/style"
import React from "react"
import {
	CObuttonArea,
	COnewayForm,
	OnewayFormCOntroller,
	OneWayInput,
	OnewayTextarea,
	//  SendIdInput,
	TextAreaCount
} from "./style"
import alarmIcon from "assets/images/alarm.svg"
// import arrowdownIcon from "assets/images/arrowdown.svg"
import SetTimerCampaign from "./timer"
import { useCreateKeyword } from "context/createKewordContext"
import AppColors from "utils/colors"
import CustomSelectId from "./idselect"
import { SenderSelectDiv, TopSelDiv } from "./style"
function OneWayForm() {
	const { createkeyword, setCreateKeyword } = useCreateKeyword()
	function toggleCreateKeyword() {
		setCreateKeyword(!createkeyword)
	}
	return (
		<COnewayForm>
			<SetTimerCampaign open={createkeyword} close={toggleCreateKeyword} />
			{/* <OnewayFormCOntroller> */}
			<TopSelDiv>
				<SenderSelectDiv>
					<p>Sender ID</p>
					<CustomSelectId />
				</SenderSelectDiv>
				<SenderSelectDiv>
					<p>Select Recipients</p>
					<CustomSelectId />
				</SenderSelectDiv>
			</TopSelDiv>

			<OnewayFormCOntroller>
				<p>Campaign Title</p>
				<OneWayInput />
			</OnewayFormCOntroller>
			<OnewayFormCOntroller>
				<p>Campaign Message</p>
				<OnewayTextarea rows="7"></OnewayTextarea>
			</OnewayFormCOntroller>
			<OnewayFormCOntroller>
				<TextAreaCount>
					<p>300</p>
				</TextAreaCount>
			</OnewayFormCOntroller>
			<OnewayFormCOntroller>
				<CObuttonArea>
					<KButton color="white" br="50px" p="5px 20px;" bc={createkeyword ? AppColors.footerBlue : AppColors.brandColor} onClick={toggleCreateKeyword}>
						<Img width="25px" height="25px" src={alarmIcon} alt="Schedule time" />
					</KButton>
					<KButton color="white" bc={AppColors.brandColor} br="50px" p="7px 30px;">
						Send now
					</KButton>
				</CObuttonArea>
			</OnewayFormCOntroller>
		</COnewayForm>
	)
}

export default OneWayForm
