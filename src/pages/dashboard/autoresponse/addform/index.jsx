import { useCreateKeyword } from "context/createKewordContext"
import { Img, KButton } from "globalStyles/style"
import { CObuttonArea } from "pages/dashboard/campaign/createcampaign/onewayform/style"
import { SenderNameInput } from "pages/dashboard/sendId/style"
import React from "react"
import AppColors from "utils/colors"
import CustomSelectAutoresponse from "./customselect"
import { AutoResForm, AutoResFormDiv, AutoResTextArea } from "./style"
import alarmIcon from "assets/images/alarm.svg"
import SetTimerCampaign from "pages/dashboard/campaign/createcampaign/onewayform/timer"
function AddAutoResponse() {
	const { createkeyword, setCreateKeyword } = useCreateKeyword()
	function toggleCreateKeyword() {
		setCreateKeyword(!createkeyword)
	}
	return (
		<AutoResFormDiv>
			<SetTimerCampaign open={createkeyword} close={toggleCreateKeyword} />
			<AutoResForm>
				<SenderNameInput type="text" placeholder="Name" />
				<CustomSelectAutoresponse />
				<AutoResTextArea rows={7} placeholder="Auto response message" />
				<CObuttonArea>
					<KButton color="white" br="50px" p="5px 20px;" bc={createkeyword ? AppColors.footerBlue : AppColors.brandColor} onClick={toggleCreateKeyword}>
						<Img width="25px" height="25px" src={alarmIcon} alt="Schedule time" />
					</KButton>
					<KButton color="white" bc={AppColors.brandColor} br="50px" p="7px 30px;">
						Send now
					</KButton>
				</CObuttonArea>
			</AutoResForm>
		</AutoResFormDiv>
	)
}

export default AddAutoResponse
