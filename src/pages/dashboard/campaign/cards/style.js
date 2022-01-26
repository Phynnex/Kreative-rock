import styled from "styled-components/macro"
import media from "utils/media"

export const CamPaignCardCon = styled.div`
	width: 434.45px;
	height: 390.82px;
	padding: 20px 40px;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 33px;
	${media.tablet`
    width: 80%;
	height: 100%;;
    margin-bottom: 30px;
    border-radius: 25px;
    `}
	${media.mobile`
    width: 100%;
	height: 100%;;
    margin-bottom: 30px;
    border-radius: 25px;
	border: none;
    `}
`
export const CamPaignBtn = styled.div`
	width: 163px;
	height: 39px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: capitalize;
	color: #fff;
	background: #ff7900;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 30px;
	cursor: pointer;
`
export const CTopSection = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	img {
		width: 60px;
		width: 120px;
	}
	div {
		max-width: 60%;
	}

	${media.mobile`
  flex-direction: column;
  align-items: center;
  img {
		width: 60%;
		width: 200px;
        justify-self: center;
	}
	div {
		max-width: 100%;
	}
    `}
`
export const CenterDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`
export const CardP = styled.p`
	margin-top: 20px;
`
