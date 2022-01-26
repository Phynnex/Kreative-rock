import styled from "styled-components/macro"
import media from "utils/media"

export const CampaignMain = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* background: red; */
`

export const CampaignTextContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background: yellow; */
`
export const CampaignTextSection = styled.div`
	width: 60%;
	display: flex;
	text-align: center;
	flex-direction: column;
	${media.mobile`
    width:100%;
    `}
`
export const CampaignCardSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 50px;
	${media.tablet`
    flex-direction: column;
	align-items: center;
    `}
	${media.mobile`
    flex-direction: column;
    `}
`
