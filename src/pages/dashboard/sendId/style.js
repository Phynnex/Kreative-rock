import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const SenderIDContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const SenderDiv = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 30px;
	flex-direction: column;
	${media.mobile`
	 padding:0px 0px;
	`}
`
export const SenderIdTitleDiv = styled.div`
	width: 100%;
	padding: 0px 30px;
	flex-direction: column;
	${media.mobile`
	 padding:0px 0px;
	`}
`
export const LineDiv = styled.div`
	width: 100%;
	height: 3px;
	background-color: ${AppColors.newsLetterBg};
`
export const SendIdCard = styled.div`
	width: 100%;
	padding: 50px 40px;
	display: flex;
	flex-direction: column;
	background: linear-gradient(270deg, #ffffff 50%, rgba(225, 237, 247, 0) 103.88%);
	border: 1px solid #b8b8b8;
	box-sizing: border-box;
	border-radius: 10px;
	margin-top: 30px;
	${media.tablet`
	 margin-bottom: 5rem;
	`}
	${media.mobile`
	 padding:50px 15px;
	`}
`
export const SenderNameInput = styled.input`
	width: 100%;
	height: 60px;
	outline: none;
	padding: 0px 15px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
`
export const DateInput = styled.button`
	width: 45%;
	height: 60px;
	align-items: center;
	justify-content: space-between;
	display: flex;
	padding: 0px 30px 0px 15px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	color: #393939;
	p {
		margin-top: 15px;
	}
	${media.mobile`
	width: 100%;

	`}
`
export const TimeInput = styled.button`
	width: 25%;
	height: 60px;
	align-items: center;
	justify-content: center;
	display: flex;
	text-align: center;
	outline: none;
	padding: 0px 30px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	color: #393939;
	${media.mobile`
	width: 48%;
	margin-top:30px;
	`}
`
export const SelectDiv = styled.select`
	width: 15%;
	height: 60px;
	align-items: center;
	outline: none;
	justify-content: space-between;
	display: flex;
	padding: 0px 30px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	color: #393939;
	${media.mobile`
	margin-top:30px;
	width: 48%;
	`}
`
export const SDateContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: ${({ mt }) => (mt ? mt : "30px")};
	${media.mobile`
	flex-wrap: wrap;
	`}
`
export const StatusDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
