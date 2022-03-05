import styled from "styled-components/macro"
import media from "utils/media"

export const PersonFormDiv = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
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
