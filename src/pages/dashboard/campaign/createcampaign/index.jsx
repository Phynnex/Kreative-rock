import React from "react"
import { CreateCampainFormBody } from "./style"
import createCamp from "assets/images/campaign.png"
import { Img } from "globalStyles/style"
function CreateCampainForm() {
	return (
		<CreateCampainFormBody>
			<h4>Interactive</h4>
			<h4>Texting Solutions (2-Way SMS)</h4>
			<Img src={createCamp} alt="create Campaign" />
			<h4>Create Campagin</h4>
		</CreateCampainFormBody>
	)
}

export default CreateCampainForm
