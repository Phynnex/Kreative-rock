import { Div } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import { DivDot, DotsContainer } from "./style"
// import media from "utils/media"

const MtChartThreeDiv = styled.div`
	width: 100%;
	height: 350px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	padding: 10px 10px;
`

function MTchartThree() {
	return (
		<MtChartThreeDiv>
			<Div>
				<h5> Status</h5>
				<DotsContainer>
					<Div display="flex" alignI="center">
						<DivDot bg={AppColors.brandColor}></DivDot>
						<p>Clicks</p>
					</Div>
					<Div display="flex" alignI="center">
						<DivDot></DivDot>
						<p>Responses</p>
					</Div>
				</DotsContainer>
			</Div>
		</MtChartThreeDiv>
	)
}

export default MTchartThree
