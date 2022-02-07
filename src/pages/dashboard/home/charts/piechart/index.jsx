import { Div, Img, KreativeP } from "globalStyles/style"
import styled from "styled-components/macro"
import PieChatData from "./pieData"
import { PieContainer } from "./style"
import vertElipses from "assets/images/vertElipses.svg"
const MtChartPieDiv = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: space-between;
	padding: 20px 10px;
	color: #272d3b;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
`

function MTchartPie() {
	return (
		<MtChartPieDiv>
			<PieContainer>
				<PieChatData />
			</PieContainer>
			<Div ml="-30px">
				<br />
				<h5> Status</h5>
				<KreativeP mb="30px"> Delivered messages</KreativeP>
				<h5>4.312</h5>
			</Div>
			<div>
				<br />

				<Img width="20px" height="20px" src={vertElipses} alt="Elispse" mt="20px" />
			</div>
		</MtChartPieDiv>
	)
}

export default MTchartPie
