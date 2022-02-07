import styled from "styled-components/macro"
import media from "utils/media"
// import media from "utils/media"

export const CreateCampaignBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const CreateCampainFormBody = styled.div`
	width: 100%;
	background: #dbf7f7;
	display: flex;
	padding: 0px 20px;
	margin-top: 20px;
`
export const CHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
	margin-bottom: 10px;
	margin-top: -60px;
	${media.mobile`
    flex-direction: column;
	justify-items: flex-start;
	align-items:center;
	margin-top:20px;
    `}
`
