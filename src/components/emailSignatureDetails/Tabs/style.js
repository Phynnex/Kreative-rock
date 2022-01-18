import styled from "styled-components/macro"
import media from "utils/media"
import AppColors from "../../../utils/colors"

export const EsTabsContainer = styled.div`
	width: 50%;
	/* height: 729px; */
	background: ${AppColors.white};
	border: 1px solid ${AppColors.newsLetterBg};
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	${media.smallDesktopMinimum`
	width: 100%;
	
	`}
	${media.tablet`
	width: 100%;
	
	`}
	${media.mobile`
	width: 100%;
	
	`}
`

export const TabsHeader = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	border-bottom: 3px solid #00cca7;
	box-shadow: 0px 4px 4px rgba(0, 204, 167, 0.56);
`
