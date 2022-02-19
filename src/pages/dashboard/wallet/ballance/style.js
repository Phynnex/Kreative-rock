import styled from "styled-components/macro"
import media from "utils/media"

export const WBallanceCard = styled.div`
	width: 45%;
	height: 250px;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 20px 0px;
	${media.tablet`
     width:60%;
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
