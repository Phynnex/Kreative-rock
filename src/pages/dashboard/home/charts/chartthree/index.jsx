import { Div } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
// import media from "utils/media"

const MtChartThreeDiv = styled.div`
	width: 100%;
	height: 350px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
`

function MTchartThree() {
	return (
		<MtChartThreeDiv>
			<Div>
				<h5> Status</h5>
				<Div display="flex">
					<p>Clicks</p>
					<p>Responses</p>
				</Div>
			</Div>
		</MtChartThreeDiv>
	)
}

export default MTchartThree
