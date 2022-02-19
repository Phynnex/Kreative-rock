import React from "react"
import { Img } from "globalStyles/style"
import { ActionBtnsCampaign, AllCampaignContainer, AllCampaignDiv, AllCampaignTopSection } from "./style"
import allCampaign from "assets/images/bro_allcampaign.svg"
import ActionBtnDashboard from "components/dashboard/actionbuttons"
import AllCampTable from "./table"

function AllCampaignsPage() {
	return (
		<AllCampaignContainer>
			<AllCampaignDiv>
				<AllCampaignTopSection>
					<h6>All Campaigns</h6>
					<Img src={allCampaign} alt="View All Campaign" />
				</AllCampaignTopSection>
			</AllCampaignDiv>
			<ActionBtnsCampaign>
				<ActionBtnDashboard />
			</ActionBtnsCampaign>
			<AllCampTable />
		</AllCampaignContainer>
	)
}

export default AllCampaignsPage
