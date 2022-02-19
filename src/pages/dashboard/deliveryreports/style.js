import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const DReportContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
	${media.smallDesktopMinimum`
    padding: 0px 0px;
    
    `}
`
