import { KreativeP } from "globalStyles/style"
import CampainCard from "./cards"
import campaignInfoData from "./cards/infoData"
import { CampaignCardSection, CampaignMain, CampaignTextContainer, CampaignTextSection } from "./style"

function CampaignPage() {
	return (
		<div>
			<CampaignMain>
				<CampaignTextContainer>
					<CampaignTextSection>
						<h4>Campaign</h4>
						<KreativeP mt="20px">
							All users that want to use our mobile texting system must create a campaign. When creating the campaign, they must decide if they want to do a simple texting campaign or an interactive
							or two-way campaign.
						</KreativeP>
					</CampaignTextSection>
				</CampaignTextContainer>
				<CampaignCardSection>
					{campaignInfoData.map(info => (
						<CampainCard key={info.id} image={info.imgUrl} title={info.title} text={info.text} link={info.link} />
					))}
				</CampaignCardSection>
			</CampaignMain>
		</div>
	)
}

export default CampaignPage
