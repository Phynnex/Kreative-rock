import styled from "styled-components/macro"
import media from "utils/media"

export const WalletContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const WCardContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;
	${media.tablet`
     gap:1rem;
    `}
	${media.mobile`
     flex-direction: column;
     gap:3rem;
    `}
`
export const WTableDiv = styled.div`
	width: 100%;
	padding: 0px 20px;
	margin-top: 40px;
	${media.mobile`
    padding: 0px 0px;
     
    `}
`
