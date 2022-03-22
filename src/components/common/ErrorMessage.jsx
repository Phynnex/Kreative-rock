import React from "react"
import styled from "styled-components/macro"

const ErrorMsgSpan = styled.span`
	color: #dd0e3b;
	font-size: 14 px;
	margin-top: ${({ mt }) => (mt ? mt : "0px")};
`
function ErrorMessage({ error, visible, mt }) {
	if (!visible || !error) return null
	return (
		<ErrorMsgSpan mt={`${mt}`} className="error--message">
			{error}
		</ErrorMsgSpan>
	)
}

export default ErrorMessage
