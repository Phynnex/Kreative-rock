import { Div, Img } from "globalStyles/style"
import { KeywordContainer, KHeaderText, KreateContent, LinkBtn, Underline } from "./style"
import AddBtn from "assets/images/addIcon.svg"
import linkBtn from "assets/images/linkIcon.svg"
import UserKeyword from "./userkeywords"
import CreateKeyword from "./createkeyword"
import { useCreateKeyword } from "context/createKewordContext"
import { useEffect } from "react"
import { useState } from "react"
import keywordData from "./userkeywords/keywordData"
import { Link } from "react-router-dom"
import { USERCREATED_RESPONSES } from "../ROUTESCONTS"

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
			<CreateKeyword open={createkeyword} close={toggleCreateKeyword} />
			<KeywordContainer>
				<KHeaderText>Keywords </KHeaderText>
				<Underline></Underline>
				<br />
				<KreateContent>
					<h6 onClick={toggleCreateKeyword}>Create Keyword</h6>{" "}
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
			</KeywordContainer>
			<Div width="100%" display="flex" justify="center">
				<Link to={USERCREATED_RESPONSES}>
					<LinkBtn>
						Created Responses
						<Img ml="10px" src={linkBtn} alt="Link to Responses" />
					</LinkBtn>
				</Link>
			</Div>
			<br />
			<br />
			<br />
		</div>
	)
}

export default KeywordsPage
