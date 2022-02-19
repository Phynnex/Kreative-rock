import React from "react"
import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { Img } from "globalStyles/style"
import allCampaign from "assets/images/bro_allcampaign.svg"
import { ActionBtnsCampaign, AllCampaignContainer, AllCampaignDiv, AllCampaignTopSection } from "../style"
import DetailsTable from "./detailsTable"

function CampaignDetails() {
	return (
		<AllCampaignContainer>
			<AllCampaignDiv>
				<AllCampaignTopSection>
					<h6>All Campaigns</h6>
					<Img src={allCampaign} alt="View Campaign Details" />
				</AllCampaignTopSection>
			</AllCampaignDiv>
			<ActionBtnsCampaign>
				<ActionBtnDashboard />
			</ActionBtnsCampaign>
			<DetailsTable />
		</AllCampaignContainer>
	)
}

export default CampaignDetails
