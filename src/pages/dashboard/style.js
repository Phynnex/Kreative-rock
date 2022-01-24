//
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const DashboardContainer = styled.div`
	/* background-color: ${AppColors.newsLetterBg}; */

	display: flex;
	flex-wrap: wrap;
	${media.tablet`
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    `}

	${media.mobile`
        flex-direction: column;
        overflow: hidden;
        height: 100%;
       
    `}
`

export const DashboardBody = styled.div`
	height: 100vh;
	/* width: calc(100% - 260px); */
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	padding-top: 0;
	/* background: red; */
	/* margin-top: 15px; */

	${media.smallDesktopMinimum`
        width: 100%;
        height:100%;
        padding: 10px;
        margin-top: 130px;
        margin-left: 0;
        margin-right:0;
    `}
	${media.tablet`
        width: 100%;
        height:100%;
        padding: 10px;
        margin-top: 150px;
        margin-left: 0;
        margin-right:0;
    `}
	${media.mobile`
        width: 100%;
        height:100%;
        overflow-y: scroll;
        margin-top:125px;
    `} 
	${media.smallMobile`
        width: 100%;
        height:100%;
    `}
`
