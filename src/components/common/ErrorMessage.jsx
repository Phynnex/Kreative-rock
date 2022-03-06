import React from "react"
import styled from "styled-components/macro"

const ErrorMsgSpan = styled.span`
	color: #dd0e3b;
	font-size: 12px;
	margin-top: -18px;
`
function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null
	return <ErrorMsgSpan className="error--message">{error}</ErrorMsgSpan>
}

export default ErrorMessage
