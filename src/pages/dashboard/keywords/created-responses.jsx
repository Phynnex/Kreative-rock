import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { useToggleContact } from "context/ContactActionsContext"
import { KButton } from "globalStyles/style"
import React from "react"
import AppColors from "utils/colors"
import { ActionBtnsCampaign } from "../allcampaigns/style"
import AddAutoResponse from "../autoresponse/addform"
import AutoResponseTable from "../autoresponse/table"

import { ARHeadDiv, AutoResponseTop, KeywordContainer } from "./style"

function UserCreatedResponses() {
	const { handleToggleImportContact } = useToggleContact()
	return (
		<div>
			<KeywordContainer>
				<ARHeadDiv>
					<AutoResponseTop>
						<h4>Auto Response</h4>
						<KButton color={AppColors.white} bc={AppColors.brandColor} w="250px" br="50px" p="7px 5px;" onClick={handleToggleImportContact}>
							CREATE AUTO RESPONSE
						</KButton>
					</AutoResponseTop>
					{/* <LineDiv /> */}
					<ActionBtnsCampaign>
						<ActionBtnDashboard />
					</ActionBtnsCampaign>
				</ARHeadDiv>
				{/* <UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" /> */}
				<AutoResponseTable />
				<br />
				<br />
				<br />

				<AddAutoResponse />
			</KeywordContainer>
			<br />
			<br />
			<br />
		</div>
	)
}

export default UserCreatedResponses
