import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { LineDiv } from "pages/dashboard/sendId/style"
import React from "react"
import { KeywordContainer, KeywordTop, KreateContent } from "../style"
import MainCreatedResponse from "./createdResItem"

function KreatedKeywordsMain() {
	return (
		<KeywordContainer>
			<KeywordTop>
				<h5>Keywords</h5>

				<ActionBtnDashboard />
			</KeywordTop>
			<LineDiv />
			<KreateContent>
				<h5>Created Responses</h5>
			</KreateContent>

			<MainCreatedResponse text="I am busy I will talk later" />
			<MainCreatedResponse text="I am busy I will talk later" />
			<MainCreatedResponse text="I am busy I will talk later" />
			<MainCreatedResponse text="I am busy I will talk later" />
			<MainCreatedResponse text="I am busy I will talk later" />
		</KeywordContainer>
	)
}

export default KreatedKeywordsMain
