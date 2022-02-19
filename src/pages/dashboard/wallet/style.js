import styled from "styled-components/macro"
import media from "utils/media"

export const WalletContainer = styled.div``
export const WCardContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;
	${media.mobile`
     flex-direction: column;
    `}
`
