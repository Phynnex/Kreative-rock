import styled from "styled-components/macro"
import media from "utils/media"

export const WBallanceCard = styled.div`
	width: 100%;
	height: 100%;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 20px 0px;
	${media.tablet`
     width:100%;
    `}
	${media.mobile`
     width:100%;
    `}
`

export const BalItemContainer = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 20px;
	color: #202020;
	justify-content: space-between;
	margin-bottom: 5px;
	${media.mobile`
     font-size: 13px;
    `}
`
export const BalItemImgDiv = styled.div`
	width: 54px;
	height: 54px;
	border-radius: 50%;
	/* background-color: red; */

	img {
		max-width: 100%;
		max-height: 100%;
		border-radius: 50%;
	}
	${media.mobile`
     width: 44px;
	height: 44px;
    `}
`
export const LeftContent = styled.div`
	display: flex;
	align-items: center;
	color: #202020;
	gap: 15px;
`
export const BallanceDivCont = styled.div`
	width: 45%;
	height: 250px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	${media.smallDesktopMinimum`
     width:45%;
    `}
	${media.tablet`
     width:60%;
    `}
	${media.mobile`
     width:100%;
    `}
`
export const BHeadCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`
export const PayNowBtn = styled.button`
	outline: none;
	background: #ff7900;
	color: #fff;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	padding: 3px 20px;
`
