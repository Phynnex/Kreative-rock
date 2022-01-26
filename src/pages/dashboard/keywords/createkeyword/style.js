import styled, { keyframes } from "styled-components/macro"
import media from "utils/media"

export const SlideInPopUp = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`

export const CreateKeywordContainer = styled.div`
	width: 35%;
	background: #f9fcff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 20px;
	${media.smallDesktopMinimum`
    width: 55%;
    padding: 15px 10px;
    
    `}
	${media.tablet`
    width: 75%;
	padding: 20px 20px;
    
    `}
	${media.mobile`
    width: 98%;
	padding: 20px 20px;
    
    `}
`
export const CreateKeywordOverlay = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: fixed;
	z-index: 600;
	background: rgba(0, 0, 0, 0.42);
	display: ${({ open }) => (open ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease-out;
	animation-name: ${SlideInPopUp};
	animation-duration: 0.5s;
`

export const CampaignInput = styled.input`
	width: 100%;
	height: 47px;
	background: #eaeaea;
	outline: none;
	border: none;
	padding: 0px 10px;
`
export const CampaignInputLabel = styled.label`
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 13px;
	color: #000000;
`
export const KreateButton = styled.button`
	background: #ff7900;
	width: 104.5px;
	height: 35px;
	border-radius: 30px;
	margin-right: 10px;
	text-transform: capitalize;
	color: #fff;
`
export const KreateFormBody = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
