import { Div } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
import media from "utils/media"
import { ChartContent } from "../chartone"
import TotalMessageSentInMonth from "./totalMessageChart"
// import media from "utils/media"

const MtChartTwoDiv = styled.div`
	width: 100%;
	height: 350px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	padding: 10px 10px;
	${media.mobile`
	padding: 10px 0px;
	`}
`

function MTchartTwo() {
	return (
		<MtChartTwoDiv>
			<Div>
				<p>Total messages sent in a month</p>
			</Div>
			<ChartContent>
				<TotalMessageSentInMonth />
			</ChartContent>
		</MtChartTwoDiv>
	)
}

export default MTchartTwo
