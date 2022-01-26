import React from "react"

import { Img } from "globalStyles/style"
import { CamPaignBtn, CamPaignCardCon, CTopSection, CenterDiv, CardP } from "./style"
// import { Link } from "react-router-dom"
// import { CREATCAMPAIGN } from "pages/dashboard/ROUTESCONTS"

function CampainCard({ title, text, image }) {
	return (
		<CamPaignCardCon>
			<CTopSection>
				<div>
					<h5>{title}</h5>
				</div>
				<Img src={image} alt={title} />
			</CTopSection>
			<CardP>{text}</CardP>
			<CenterDiv>
				{/* <Link to={CREATCAMPAIGN}> */}
				<CamPaignBtn>Create Campaign</CamPaignBtn>
				{/* </Link> */}
			</CenterDiv>
		</CamPaignCardCon>
	)
}

export default CampainCard
