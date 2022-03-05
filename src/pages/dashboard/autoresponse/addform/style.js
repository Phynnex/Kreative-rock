import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const AutoResForm = styled.div`
	width: 100%;
	background: linear-gradient(270deg, #ffffff 50%, rgba(225, 237, 247, 0) 103.88%);
	border: 1px solid #80e6d3;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 40px 70px;
	${media.mobile`
	padding: 40px 10px;
  `}
`
export const AutoResFormDiv = styled.div`
	width: 100%;
	padding: 0px 20px;
	margin-top: 10px;
	${media.smallDesktopMinimum`
	padding: 0px 0px;
  `}
	${media.tablet`
	padding: 0px 0px;
  `}
	${media.mobile`
	padding: 0px 0px;
  `}
`
export const AutoResSelect = styled.div`
	position: relative;
	height: 60px;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
	border: none;
	display: flex;
	color: ${AppColors.lightBlack};
	/* box-sizing: border-box; */
	border-radius: 5px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	${media.tablet`
   width:100%;
  `}
	${media.mobile`
   width:100%;
   margin-left: 0px;
  `}

  select {
		font-size: 14px;
		height: 100%;
		width: 100%;
		padding: 0em 1em 0em 1.5em;
		background: transparent;
		color: ${AppColors.lightBlack};
		border: none;
		outline: none;
		border-radius: 3px;
		appearance: none;
		option {
			color: ${AppColors.lightBlack};
			background: transparent;
			border: none;
		}
	}
	div {
		position: absolute;
		right: 2%;
		color: ${AppColors.white};
		background: #f1f1f1;

		height: 100%;
		width: 2em;
		pointer-events: none;
		display: flex;
		align-items: center;
	}
`

export const AutoResTextArea = styled.textarea`
	width: 100%;
	background: #f1f1f1;
	padding: 5px 15px;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	color: ${AppColors.lightBlack};
	border-radius: 5px;
	outline: none;
`

export const AddFormDivAResponse = styled.div`
	width: 50%;
	padding-top: 20px;
	padding-left: 40px;
	padding-right: 40px;
	padding-bottom: 40px;
	background: linear-gradient(113.35deg, #ffffff 86.42%, #00cca7 130.2%, rgba(225, 237, 247, 0) 130.2%);
	border: 1px solid #80e6d3;
	box-sizing: border-box;
	border-radius: 10px;
	${media.smallDesktopMinimum`
		width: 70%;
  	`}
	${media.tablet`
		width: 90%;
  	`}
	${media.mobile`
	width: 90%;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
	
	`}
`
