import styled from "styled-components/macro"
import media from "utils/media"
// import AppColors from "utils/colors"

export const AddMemberDiv = styled.div`
	width: 60%;
	background: #f9fcff;
	padding: 25px 25px;
	border-radius: 2px;
	${media.smallDesktopMinimum`
	width: 90%;
	padding: 25px 25px;
	
	`}
	${media.tablet`
	width: 90%;
	padding: 25px 10px;
	
	`}
	${media.mobile`
	width: 95%;
	padding: 25px 2px;
	
	`}
`
