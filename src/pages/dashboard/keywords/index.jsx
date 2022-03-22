import { Img } from "globalStyles/style"
import { KeywordContainer, KeywordTop, KHeaderText, KreateBtnDiv, KreateContent, Underline } from "./style"
import AddBtn from "assets/images/addIcon.svg"
// import linkBtn from "assets/images/linkIcon.svg"
import UserKeyword from "./userkeywords"
import CreateKeyword from "./createkeyword"
import { useCreateKeyword } from "context/createKewordContext"

// import { Link } from "react-router-dom"
// import { USERCREATED_RESPONSES } from "../ROUTESCONTS"
import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { useQuery } from "react-query"
import { getUserKeywords } from "services/keywordService"
import LoadingDataUi from "components/loading"
import EmptyDataUi from "components/emptydoc"
import ErrorDataUi from "components/Error"

function KeywordsPage() {
	const { createkeyword, setCreateKeyword } = useCreateKeyword()

	function toggleCreateKeyword() {
		setCreateKeyword(!createkeyword)
	}

	// const handleAutoreply = id => {
	// 	const newKeywords = keywords?.map(keyword => {
	// 		if (keyword.id === id) {
	// 			return { ...keyword, autoreply: !keyword.autoreply }
	// 		}
	// 		return keyword
	// 	})
	// 	setKeywords(newKeywords)
	// }
	const { data: keywords, isLoading, isError, error } = useQuery("keywords", getUserKeywords)
	console.log(keywords?.payload.length, isLoading, isError, error, "keyw")

	return (
		<div>
			<CreateKeyword open={createkeyword} close={toggleCreateKeyword} />
			<KeywordContainer>
				<KHeaderText>Keywords </KHeaderText>
				<Underline></Underline>
				<br />
				<KeywordTop>
					<KreateBtnDiv>
						<h6 style={{ marginTop: "5px" }} onClick={toggleCreateKeyword}>
							Create Keyword
						</h6>{" "}
						<button onClick={toggleCreateKeyword}>
							<Img src={AddBtn} alt="Create Keyword" />
						</button>
					</KreateBtnDiv>

					<ActionBtnDashboard />
				</KeywordTop>

				<br />
				<KreateContent>
					<h5>Your Keywords</h5>
				</KreateContent>
				{keywords?.payload.length <= 0 && <EmptyDataUi />}
				{isLoading && <LoadingDataUi />}
				{!isLoading && isError && <ErrorDataUi text="Error retrieving data" />}
				{keywords?.payload?.map(keyword => (
					<UserKeyword key={keyword?.id} text={keyword?.keyword} />
				))}
			</KeywordContainer>
			{/* <Div width="100%" display="flex" justify="center">
				<Link to={USERCREATED_RESPONSES}>
					<LinkBtn>
						Created Responses
						<Img ml="10px" src={linkBtn} alt="Link to Responses" />
					</LinkBtn>
				</Link>
			</Div> */}
			<br />
			<br />
			<br />
		</div>
	)
}

export default KeywordsPage
