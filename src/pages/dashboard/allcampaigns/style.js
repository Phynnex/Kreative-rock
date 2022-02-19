import styled from "styled-components/macro"
import media from "utils/media"

export const AllCampaignContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const AllCampaignDiv = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 30px;
	flex-direction: column;
	${media.mobile`
    padding: 0px 0px;
    `}
`
export const AllCampaignTopSection = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 40px;
	justify-content: space-between;
	align-items: center;
	height: 250px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	img {
		height: 80%;
		margin-left: -30px;
	}
	${media.mobile`
    flex-direction: column;
    padding: 20px 0px;
    justify-content: space-around;
    img {
		height: 80%;
        width: 100%;
		margin-left: 0px;
	}
    `}
`

export const ActionBtnsCampaign = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
`
