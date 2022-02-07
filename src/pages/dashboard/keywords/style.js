import styled from "styled-components/macro"
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
	background: #ff7900;
`
