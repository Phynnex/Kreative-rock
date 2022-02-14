// import { Img } from "globalStyles/style"
import React from "react"
import UserCreatedResponse from "./createdresponses"
import { KeywordContainer, KHeaderText, KreateContent, Underline } from "./style"
// import AddBtn from "assets/images/addIcon.svg"

function UserCreatedResponses() {
	return (
		<div>
			{/* <CreateKeyword open={createkeyword} close={toggleCreateKeyword} /> */}
			<KeywordContainer>
				<KHeaderText>Responses </KHeaderText>
				<Underline />
				{/* <KreateContent>
					<h6>Create Response</h6>{" "}
					<button>
						<Img src={AddBtn} alt="Create Response" />
					</button>
				</KreateContent> */}

				<br />
				<KreateContent>
					<h5>Your Created Responses</h5>
				</KreateContent>
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
			</KeywordContainer>
			<br />
			<br />
			<br />
		</div>
	)
}

export default UserCreatedResponses
