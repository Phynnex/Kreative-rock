import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { Img } from "globalStyles/style"
import { KeywordContainer, KHeaderText, KreateContent } from "./style"
import AddBtn from "assets/images/addIcon.svg"
import UserKeyword from "./userkeywords"
import UserCreatedResponse from "./createdresponses"
import CreateKeyword from "./createkeyword"
import { useCreateKeyword } from "context/createKewordContext"
import { useEffect } from "react"
import { useState } from "react"
import keywordData from "./userkeywords/keywordData"

function KeywordsPage() {
	const { createkeyword, setCreateKeyword } = useCreateKeyword()
	const [keywords, setKeywords] = useState(null)

	function toggleCreateKeyword() {
		setCreateKeyword(!createkeyword)
	}

	const handleAutoreply = id => {
		const newKeywords = keywords?.map(keyword => {
			if (keyword.id === id) {
				return { ...keyword, autoreply: !keyword.autoreply }
			}
			return keyword
		})
		setKeywords(newKeywords)
	}

	useEffect(() => {
		setKeywords(keywordData)
	}, [])
	return (
		<div>
			<ActionBtnDashboard />
			<CreateKeyword open={createkeyword} close={toggleCreateKeyword} />
			<KeywordContainer>
				<KHeaderText>Keywords </KHeaderText>
				<KreateContent>
					<p>Create Keywords</p>{" "}
					<button onClick={toggleCreateKeyword}>
						<Img src={AddBtn} alt="Create Keyword" />
					</button>
				</KreateContent>

				<br />
				<KreateContent>
					<h5>Your Keywords</h5>
				</KreateContent>
				{keywords?.map(keyword => (
					<UserKeyword key={keyword.id} text={keyword.keyword} auto={keyword.autoreply} handleChange={() => handleAutoreply(keyword.id)} />
				))}
				<br />
				<br />
				<br />
				<KreateContent>
					<h5>Your Responses</h5>
				</KreateContent>
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
				<UserCreatedResponse text="I am busy I will talk later" />
			</KeywordContainer>
		</div>
	)
}

export default KeywordsPage
