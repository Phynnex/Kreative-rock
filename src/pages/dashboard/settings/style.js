import styled from "styled-components/macro"
import media from "utils/media"

export const SettingsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
	${media.mobile`
        padding: 0px 0px;
	`}
`
export const ScenterDiv = styled.div`
	width: 100%;
	text-align: center;
	font-style: normal;
	font-weight: bold;
`
export const SettingsTab = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	${media.mobile`
        overflow-x: auto;
        overflow-y: hidden;
        justify-content: flex-start;
        padding:0;
        margin:0;
        &::-webkit-scrollbar {
            width: 0em;
            height: 0em;
        }
    `}
`
export const SettingsDivBtn = styled.div`
	display: flex;
	height: 28px;
	align-items: center;
	padding: 0px 0px;
	margin-top: 20px;
	margin-bottom: 30px;
	color: #000;
	flex: 0 0 auto;
	border-bottom: ${({ bm }) => (bm ? bm : "")};
	cursor: pointer;
	p {
		margin-top: 15px;
		margin-left: 5px;
	}
`

export const SettingsButton = styled.button`
	width: 85px;
	height: 39px;
	background: #ffffff;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	margin-left: 5px;
	margin-right: 5px;
	${media.tablet`
	width: 100px;
	flex: 0 0 auto;
	margin-left: 5px;
	`}
	${media.mobile`
	width: 100px;
	flex: 0 0 auto;
	margin-left: 5px;
	`}
`
