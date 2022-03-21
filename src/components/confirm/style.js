import styled from "styled-components"
import media from "utils/media"

export const VerifyFormContainer = styled.div`
	width: 25%;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 15px;
	box-shadow: 0px 0px 13px 1px rgba(63, 63, 68, 0.24), 0px 1px 3px rgba(63, 63, 68, 0.15);
	border-radius: 8px;
	${media.smallDesktopMinimum`
  width: 50%;
  `}
	${media.tablet`
  width: 50%;
  `}
	${media.mobile`
  width: 90%;
 
  
  `}
`

export const BtnContainer = styled.div`
	width: 100%;
	height: 40px;
	bottom: 0px;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
`
