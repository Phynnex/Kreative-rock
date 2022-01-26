import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import React from "react"
import { CampaignInput, CampaignInputLabel, CreateKeywordContainer, CreateKeywordOverlay, KreateButton, KreateFormBody } from "./style"
import closeIcon from "assets/images/closeIcon.svg"
import ToggleSwitch from "./customswitch"
function CreateKeyword({ close, open }) {
	return (
		<CreateKeywordOverlay open={open}>
			<CreateKeywordContainer>
				<Div width="100%" display="flex" justify="flex-end">
					<KButton bc="transparent" onClick={close}>
						<Img src={closeIcon} alt="Closed" />
					</KButton>
				</Div>
				<KreateFormBody>
					<KreativeP tAlign="center">Keyword</KreativeP>
					<div>
						<Div width="100%" display="flex" mb="2px" justify="space-between">
							<CampaignInputLabel>Keyword Name</CampaignInputLabel>
							<CampaignInputLabel>300</CampaignInputLabel>
						</Div>
						<CampaignInput />
					</div>
					<div>
						<CampaignInputLabel>Auto Response</CampaignInputLabel>
						<CampaignInput />
					</div>
					<Div mt="5px" mb="3px">
						<CampaignInputLabel>Auto Confirmation Message </CampaignInputLabel>
					</Div>
					<ToggleSwitch />
					<KreativeP mt="5px">Your keyword is avilabe for 30 days</KreativeP>
					<Div width="100%" display="flex" mb="20px" justify="flex-end">
						<KreateButton>Create</KreateButton>
					</Div>
				</KreateFormBody>
			</CreateKeywordContainer>
		</CreateKeywordOverlay>
	)
}

export default CreateKeyword
