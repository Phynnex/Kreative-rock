import styled from "styled-components/macro"
import media from "utils/media"

export const CTwowayForm = styled.div`
	width: 100%;
	background: #dbf7f7;
	margin-bottom: 50px;
`
export const CTwowayFormController = styled.div`
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
export const CTwowaySelect = styled.select`
	width: 70%;
	height: 62px;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
	padding: 0px 20px;
	/* margin-left: 50px; */
	justify-self: flex-end;
	:focus {
		outline: none;
		border: none;
	}
	${media.mobile`
    width: 100%;
    `}
`
export const CTwowayTextarea = styled.textarea`
	width: 70%;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
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
export const CreateTwoWayBtn = styled.button`
	width: 251px;
	height: 46px;
	background: #ff7900;
	border-radius: 50px;
	color: #fff;
	text-transform: uppercase;
`
export const CCBtnDiv = styled.div`
	width: 90%;
	display: flex;
	margin-top: 50px;
	justify-content: flex-end;
`

export const TwoWaySelectDiv = styled.div`
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
export const TwoWayInput = styled.input`
	width: 100%;
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
