import styled from "styled-components/macro"
import media from "utils/media"

export const AllSenderListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const SendListDiv = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 30px;
	flex-direction: column;
	${media.mobile`
    padding: 0px 0px;
    `}
`
