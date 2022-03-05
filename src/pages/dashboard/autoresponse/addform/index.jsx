import { useCreateKeyword } from "context/createKewordContext"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CObuttonArea } from "pages/dashboard/campaign/createcampaign/onewayform/style"
import { SenderNameInput } from "pages/dashboard/sendId/style"
import React from "react"
import AppColors from "utils/colors"
import CustomSelectAutoresponse from "./customselect"
import {
	AddFormDivAResponse,
	// AutoResForm,
	// AutoResFormDiv,
	AutoResTextArea
} from "./style"
// import alarmIcon from "assets/images/alarm.svg"
import SetTimerCampaign from "pages/dashboard/campaign/createcampaign/onewayform/timer"
import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
function AddAutoResponse() {
	const { createkeyword, setCreateKeyword } = useCreateKeyword()
	const { toggleImportContact, stopPropagation, handleToggleImportContact } = useToggleContact()
	function toggleCreateKeyword() {
		setCreateKeyword(!createkeyword)
	}
	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<AddFormDivAResponse onClick={stopPropagation}>
				{/* <AutoResFormDiv> */}
				<SetTimerCampaign open={createkeyword} close={toggleCreateKeyword} />
				{/* <AutoResForm> */}
				<Div display="flex" width="100%" justify="center">
					<KreativeP fs="18px" color={AppColors.black2}>
						Auto Response
					</KreativeP>
				</Div>
				<SenderNameInput type="text" placeholder="Name" />
				<CustomSelectAutoresponse />
				<AutoResTextArea rows={5} placeholder="Auto response message" />
				<CObuttonArea>
					{/* <KButton color="white" br="50px" p="5px 20px;" bc={createkeyword ? AppColors.footerBlue : AppColors.brandColor} onClick={toggleCreateKeyword}>
					<Img width="25px" height="25px" src={alarmIcon} alt="Schedule time" />
				</KButton> */}
					<KButton color="white" bc={AppColors.brandColor} br="50px" p="7px 30px;">
						Create
					</KButton>
				</CObuttonArea>
				{/* </AutoResForm> */}
				{/* </AutoResFormDiv> */}
			</AddFormDivAResponse>
		</CreateKeywordOverlay>
	)
}

export default AddAutoResponse
