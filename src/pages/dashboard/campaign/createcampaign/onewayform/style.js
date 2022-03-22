import styled from "styled-components/macro"
import media from "utils/media"

export const COnewayForm = styled.div`
	width: 100%;
	background: #dbf7f7;
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`
export const OnewayFormCOntroller = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	${media.mobile`
	width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    `}
`
export const OnewayFormCOntrollerT = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	p {
		margin-top: 25px;
	}
	${media.mobile`
	width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    `}
`

export const OneWayInput = styled.input`
	width: 78%;
	height: 62px;
	padding: 0px 10px;
	outline: none;
	border: none;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
	:focus {
		outline: none;
		border: none;
	}
	${media.mobile`
    width: 100%;
    `}
`
export const OnewayTextarea = styled.textarea`
	width: 78%;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
	margin-top: 20px;
	padding: 0px 20px;
	/* margin-left: 50px; */
	:focus {
		outline: none;
		border: none;
	}
	${media.mobile`
    width: 100%;
    `}
`
export const TextAreaCount = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	margin-top: -50px;
	margin-left: -10px;
	justify-content: flex-end;
`
export const CObuttonArea = styled.div`
	width: 100%;
	display: flex;
	margin-top: 30px;
	margin-bottom: 50px;
	gap: 15px;
	justify-content: flex-end;
`

export const SendIdInput = styled.div`
	width: 40%;
	display: flex;
	gap: 5px;
	height: 62px;
	padding-right: 10px;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
	input {
		flex: 1;
		padding: 0px 5px;
		outline: none;
		border: none;
	}
`
export const SenderSelectDiv = styled.div`
	width: 51%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		margin-bottom: -0px;
		min-width: 20%;
	}
	${media.tablet`
	width: 100%;
	p{
		margin-bottom: -0px;
		min-width: 20%;
	}
	`}
	${media.mobile`
	width: 100%;
	align-items: flex-start;
	justify-items:flex-start;
	flex-direction: column;
	gap: -20%;
	p{
		margin-bottom: -30px;
	}
	`}
`

export const TopSelDiv = styled.div`
	width: 90%;
	display: flex;
	margin-top: 20px;
	justify-content: space-between;

	${media.tablet`
	flex-direction: column;
	`}
	${media.mobile`
	flex-direction: column;
	width: 100%;
	`}
`

export const SenderIdDiv = styled.div`
	display: flex;
	width: 56%;
	flex-direction: column;
	${media.tablet`
	flex-direction: column;
	width: 78%;
	`}
	${media.mobile`
	width: 100%;
	
	`}
`
export const RecipientDiv = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	${media.tablet`
	width: 78%;
	flex-direction: column;
	`}
	${media.mobile`
	width: 100%;
	`}
`
export const RecipientSelectDiv = styled.div`
	width: 48%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		margin-bottom: -0px;
		min-width: 20%;
	}
	${media.tablet`
	width: 100%;
	/* gap: 10%; */
	p{
		margin-bottom: -0px;
		min-width: 20%;
	}
	`}
	${media.mobile`
	width: 100%;
	align-items: flex-start;
	justify-items:flex-start;
	flex-direction: column;
	gap: -20%;
	p{
		margin-bottom: -30px;
	}
	`}
`
