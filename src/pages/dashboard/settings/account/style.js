import styled from "styled-components/macro"
import media from "utils/media"

export const AccountContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
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
