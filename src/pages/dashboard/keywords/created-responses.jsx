import React from "react"
import AddAutoResponse from "../autoresponse/addform"
import { LineDiv } from "../sendId/style"
import UserCreatedResponse from "./createdresponses"
import { ARHeadDiv, KeywordContainer } from "./style"

function UserCreatedResponses() {
	return (
		<div>
			<KeywordContainer>
				<ARHeadDiv>
					<h4>Auto Response</h4>
					<LineDiv />
				</ARHeadDiv>
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />

				<br />
				<br />
				<br />
				<ARHeadDiv>
					<h4>Auto Response</h4>
				</ARHeadDiv>
				<AddAutoResponse />
			</KeywordContainer>
			<br />
			<br />
			<br />
		</div>
	)
}

export default UserCreatedResponses
