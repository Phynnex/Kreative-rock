import styled from "styled-components/macro"

const MtChartLabelDiv = styled.div`
	width: 100%;
	height: 130px;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	padding: 0px 30px;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	span {
		font-family: Lora;
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 26px;
		/* identical to box height */

		color: #272d3b;
	}
`
const LabelTextSmall = styled.p`
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 18px;
	color: #272d3b;
`

function MTLabelSection() {
	return (
		<MtChartLabelDiv>
			<LabelTextSmall>Failed messages</LabelTextSmall>
			<span>$223K</span>
		</MtChartLabelDiv>
	)
}

export default MTLabelSection
