import styled from "styled-components/macro"
import media from "utils/media"

export const COnewayForm = styled.div`
	width: 100%;
	background: #dbf7f7;
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

export const OneWayInput = styled.input`
	width: 760px;
	height: 62px;
	padding: 0px 10px;
	outline: none;
	border: none;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
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