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
	p {
		margin-right: 15px;
		margin-top: 15px;
	}
	${media.mobile`
	padding: 0px 0px;
	margin-top: 25px;
	`}
`
