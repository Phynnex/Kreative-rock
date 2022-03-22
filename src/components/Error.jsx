import React from "react"
import styled from "styled-components/macro"
import ErrorSvg from "assets/images/error-data.svg"
import { Img, KreativeP } from "globalStyles/style"

const ErrorDiv = styled.div`
	display: grid;
	justify-content: center;
	place-items: center;
	margin-top: ${({ mt }) => (mt ? mt : "60px")};
`
const ErrorDivContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
function ErrorDataUi({ text = "No Data, start creating your docs", mt = "" }) {
	return (
		<ErrorDiv mt={mt}>
			<ErrorDivContent>
				<KreativeP>{text}</KreativeP>
				<Img width="130px" height="130px" src={ErrorSvg} alt="No Data" />
			</ErrorDivContent>
		</ErrorDiv>
	)
}

export default ErrorDataUi
