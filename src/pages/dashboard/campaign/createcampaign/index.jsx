import React from "react"
import { CHeader, CreateCampaignBody, CreateCampainFormBody } from "./style"
import createCamp from "assets/images/campaign.png"
import { Div, Img } from "globalStyles/style"
import TwoWayForm from "./twowayform"
function CreateCampainForm() {
	return (
		<CreateCampaignBody>
			<CHeader>
				<Div>
					<h4>Interactive</h4>
					<h4>Texting Solutions (2-Way SMS)</h4>
				</Div>
				<Img width="150px" height="200px" src={createCamp} alt="create Campaign" />
			</CHeader>
			<h5 style={{marginLeft:"20px"}}>Create Campagin</h5>

			<CreateCampainFormBody>
				<TwoWayForm />
			</CreateCampainFormBody>
		</CreateCampaignBody>
	)
}

export default CreateCampainForm
