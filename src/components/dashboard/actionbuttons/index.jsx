import { Img } from "globalStyles/style"
import React from "react"
import styled from "styled-components/macro"
import media from "utils/media"
import btnActionData from "./actionbtnData"
import greaterThan from "assets/images/forwarrownotif.svg"

const AButton = styled.button`
	width: 85px;
	height: 39px;
	background: #ffffff;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	margin-right: 15px;
	${media.mobile`
	width: 100px;
	flex: 0 0 auto;
	margin-left: 5px;
	`}
`

const AButtonContainer = styled.div`
	display: flex;
	position: relative;
	height: 70px;
	${media.smallDesktopMinimum`
	width: 50%;
	
	`}
	${media.tablet`
	width: 60%;
	
	`}
	${media.mobile`
	width: 100%;
	
	`}
`
const ScrollDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	/* box-sizing: content-box; */
	overflow: hidden;
	overflow-x: scroll;
	/* z-index: 300; */
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
`
const ToggleBtn = styled.div`
	width: 40px;
	height: 40px;
	background: #ffffff;
	display: flex;
	display: none;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	position: fixed;
	z-index: 300;
	img {
		width: 50%;
		height: 50%;
	}
	${media.smallDesktopMinimum`
	display: flex;
	top:90px;
	`}
	${media.tablet`
	display: flex;
	top:90px;
	`}
`

export function ToggleMobileDashboardBtn({ onClick }) {
	return (
		<ToggleBtn onClick={onClick}>
			<Img src={greaterThan} alt="Toggle Menu" onClick={onClick} />
		</ToggleBtn>
	)
}

function ActionBtnDashboard() {
	return (
		<AButtonContainer>
			<ScrollDiv>
				{btnActionData.map(action => (
					<AButton key={action.id}>
						{action.title} <Img ml="5px" src={action.icon} alt="action icon" />
					</AButton>
				))}
			</ScrollDiv>
		</AButtonContainer>
	)
}

export default ActionBtnDashboard
