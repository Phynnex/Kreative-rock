import styled from "styled-components/macro"
import media from "utils/media"

export const CTAButton = styled.button`
	height: 40px;
	padding: 0px 20px;
	border: 1px solid #ff7900;
	box-sizing: border-box;
	border-radius: 43px;
	margin-right: 15px;
	flex: 0 0 auto;
	margin-top: 0px;
	cursor: pointer;
	${media.tablet`
	/* width: 150px; */
	flex: 0 0 auto;
	margin-left: 5px;
	`}
	${media.mobile`
	/* width: 150px; */
	flex: 0 0 auto;
	margin-left: 5px;
	`}
`

export const CTAButtonContainer = styled.div`
	display: flex;
	position: relative;
	height: 60px;
	${media.smallDesktopMinimum`
	width: 50%;
	
	`}
	${media.tablet`
	width: 73%;
	
	`}
	${media.mobile`
	width: 100%;
	
	`}
`
export const CTAScrollDiv = styled.div`
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

export const BtnContentDiv = styled.div`
	display: flex;
	align-items: center;
	img {
		margin-right: 10px;
	}
`
