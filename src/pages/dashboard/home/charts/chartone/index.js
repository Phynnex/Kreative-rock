import { Div } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
import media from "utils/media"
import ChartTotal from "./areaChart"
// import ChartOneData from "./chartOnedata"
// import media from "utils/media"

const MtChartOneDiv = styled.div`
	width: 100%;
	height: 350px;
	background: #ffffff;
	border-radius: 25px;
	padding: 10px;
	${media.mobile`
	padding: 10px 0px;
	`}
`
export const ChartContent = styled.div`
	width: 100%;
	height: 78%;
	position: relative;
	/* background: #f90; */
	border-radius: 25px;
`

function MTchartone() {
	return (
		<MtChartOneDiv>
			<Div>
				<h5>9.564</h5>
				<p>Total messages sent in a month</p>
			</Div>
			<ChartContent>
				<ChartTotal />
			</ChartContent>
		</MtChartOneDiv>
	)
}

export default MTchartone
