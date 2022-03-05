import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { useToggleContact } from "context/ContactActionsContext"
import { Div, KButton } from "globalStyles/style"
import { ActionBtnsCampaign } from "pages/dashboard/allcampaigns/style"
import { AutoResponseTop } from "pages/dashboard/keywords/style"
import React from "react"
import AppColors from "utils/colors"
import CreateSenderIdForm from ".."
import { AllSenderListContainer, SendListDiv } from "./style"
import SenderIdListTable from "./table"

function SenderListPage() {
	const { handleToggleImportContact } = useToggleContact()
	return (
		<AllSenderListContainer>
			<SendListDiv>
				<Div width="100%" mt="20px" display="flex" justify="space-between" alignI="center">
					<AutoResponseTop>
						<h4>Sender ID List</h4>

						<KButton onClick={handleToggleImportContact} p="7px 20px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
							CREATE SENDER ID
						</KButton>
					</AutoResponseTop>
				</Div>
			</SendListDiv>
			<br />
			<ActionBtnsCampaign>
				<ActionBtnDashboard />
			</ActionBtnsCampaign>
			<SenderIdListTable />
			<CreateSenderIdForm />
		</AllSenderListContainer>
	)
}

export default SenderListPage
