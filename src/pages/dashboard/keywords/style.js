import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const KeywordContainer = styled.div`
	width: 100%;
	display: flex;
	/* background-color: #fff; */
	flex-direction: column;
	padding: 0px 20px;
	${media.smallDesktopMinimum`
    padding: 0px 0px;
    
    `}
`
export const KHeaderText = styled.h4`
	text-align: center;
`
export const KreateContent = styled.div`
	display: flex;
	width: 100%;
	height: 30px;
	padding: 0px 20px;
	align-items: center;
	button {
		width: 25px;
		height: 19px;
		background: #ff7900;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h6 {
		font-size: 20px;
		margin-right: 15px;
		cursor: pointer;
	}
	${media.smallDesktopMinimum`
	padding: 0px 0px;
	margin-top: 25px;
	`}
	${media.tablet`
	padding: 0px 0px;
	margin-top: 25px;
	`}
	${media.mobile`
	padding: 0px 0px;
	margin-top: 25px;
	`}
`

export const LinkBtn = styled.button`
	width: 249px;
	height: 48px;
	background: #ff7900;
	border-radius: 30px;
	color: #ffffff;
	margin-top: 80px;
`
export const Underline = styled.div`
	width: 249px;
	height: 3px;
	max-width: 90px;
	border-radius: 6px;
	margin-top: -5px;
	margin: auto;
	background: ${AppColors.newsLetterBg};
`

export const ARHeadDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
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

export const KreateBtnDiv = styled.div`
	display: flex;
	align-items: center;
	padding-left: 20px;
	button {
		width: 25px;
		height: 19px;
		background: #ff7900;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h6 {
		font-size: 20px;
		margin-right: 15px;
		cursor: pointer;
	}
	/* ${media.smallDesktopMinimum`
	padding: 0px 0px;
	margin-top: 15px;
	margin-bottom: 15px;
	`} */
	${media.tablet`
	padding: 0px 0px;
	margin-top: 15px;
	margin-bottom: 15px;
	`}
	${media.mobile`
	padding: 0px 0px;
	margin-top: 15px;
	margin-bottom: 15px;
	`}
`
export const KeywordTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* ${media.smallDesktopMinimum`
	flex-direction: column;
	align-items: flex-start;

	`} */

	/* ${media.tablet`
	flex-direction: column;
	align-items: flex-start;
	
	`} */
	${media.mobile`
	flex-direction: column;
	align-items: flex-start;
	
	`}
`

export const AutoResponseTop = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.mobile`
	 flex-direction: column;
	 gap: 20px;
	`}
`
