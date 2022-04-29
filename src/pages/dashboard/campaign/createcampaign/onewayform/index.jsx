import { Div, Img } from "globalStyles/style"
import React from "react"
import { CHeader, CreateCampaignBody, CreateCampainFormBody } from "../style"

import createCamp from "assets/images/sms-texting.png"
import OneWayForm from "./onewayform"

function OnewayCampainPage() {
	return (
		<CreateCampaignBody>
			<CHeader>
				<Div>
					<h4>Simple Texting</h4>
					<h4>Solutions (1-Way SMS)</h4>
				</Div>
				<Img width="150px" height="200px" src={createCamp} alt="create Campaign" />
			</CHeader>
			<h5 style={{marginLeft:"20px"}}>Create Campagin</h5>

			<CreateCampainFormBody>
				<OneWayForm />
			</CreateCampainFormBody>
		</CreateCampaignBody>
	)
}

export default OnewayCampainPage
