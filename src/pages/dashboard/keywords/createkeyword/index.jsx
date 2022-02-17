import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import React, { useState } from "react"
import { CampaignInput, CampaignInputLabel, CreateKeywordContainer, CreateKeywordOverlay, KreateButton, KreateFormBody } from "./style"
import closeIcon from "assets/images/closeIcon.svg"
// import ToggleSwitch from "./customswitch"
function CreateKeyword({ close, open }) {
	const [keyword, setKeyword] = useState("")

	const handleChange = e => {
		if (keyword.length >= 100) {
			alert("Name must be between 20 - 100 characters")
			return
		}

		setKeyword(e.target.value)
	}
	return (
		<CreateKeywordOverlay open={open}>
			<CreateKeywordContainer>
				<Div width="100%" display="flex" justify="flex-end">
					<KButton bc="transparent" onClick={close}>
						<Img src={closeIcon} alt="Closed" />
					</KButton>
				</Div>
				<KreateFormBody>
					<KreativeP fs="24px" tAlign="center">
						Keyword
					</KreativeP>
					<div>
						<Div width="100%" display="flex" mb="2px" justify="space-between">
							<CampaignInputLabel>Keyword Name</CampaignInputLabel>
							<CampaignInputLabel>{100 - keyword.length}</CampaignInputLabel>
						</Div>
						<CampaignInput name="title" onChange={handleChange} />
						<Div width="100%" display="flex" justify="flex-end" mt="10px" mb="10px">
							<CampaignInputLabel fs="10px">Mixture of Alphanumeric characters ranging from 20 to 100</CampaignInputLabel>
						</Div>
					</div>
					{/* <div>
						<CampaignInputLabel>Auto Response</CampaignInputLabel>
						<CampaignInput />
					</div>
					<Div mt="5px" mb="3px">
						<CampaignInputLabel>Auto Confirmation Message </CampaignInputLabel>
					</Div> */}
					{/* <ToggleSwitch /> */}
					<Div width="100%" display="flex" justify="center" mt="10px" mb="10px">
						<KreativeP mt="5px" textAlign="center">
							Your keyword is avilabe for 30 days
						</KreativeP>
					</Div>
					<Div width="100%" display="flex" mb="20px" justify="flex-end">
						<KreateButton>Create</KreateButton>
					</Div>
				</KreateFormBody>
			</CreateKeywordContainer>
		</CreateKeywordOverlay>
	)
}

export default CreateKeyword
