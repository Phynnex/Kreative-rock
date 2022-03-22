import React from "react"
import styled from "styled-components/macro"
import emptySvg from "assets/images/empty-data.svg"
import { Img, KreativeP } from "globalStyles/style"

const EmptyDiv = styled.div`
	display: grid;
	justify-content: center;
	place-items: center;
	margin-top: ${({ mt }) => (mt ? mt : "60px")};
	margin-bottom: 140px;
`
const EmptyDivContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
function EmptyDataUi({ text = "No Data, start creating your docs", mt = "" }) {
	return (
		<EmptyDiv mt={mt}>
			<EmptyDivContent>
				<KreativeP>{text}</KreativeP>
				<Img width="130px" height="130px" src={emptySvg} alt="No Data" />
			</EmptyDivContent>
		</EmptyDiv>
	)
}

export default EmptyDataUi
