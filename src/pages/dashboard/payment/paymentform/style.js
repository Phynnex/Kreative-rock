import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"


export const PayFormButton = styled.button`
	width: auto;
	// height: 46px;
	background: #ff7900;
	border-radius: 8px;
	color: ${AppColors.white};
	padding:0.5rem;
	text-transform: uppercase;
	&:hover{
		opacity:0.8;
	}
`

export const PayFormBody = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`
export const PayFormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	margin: 25px 0px 50px;

	${media.mobile`
    flex-direction: column;
    align-items: center;
    `}
`

export const PayFormLeft = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	${media.mobile`
    width: 90%;
    `}
`
export const BottomFormItems = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	${media.mobile`
    width: 90%;
    `}
`

export const PaymentSelect = styled.div`
	position: relative;
	height: 74.5px;
	width: 100%;
	border: none;
	padding-left: 16px;
	display: flex;
	color: ${AppColors.lightBlack};
	align-items: flex-end;
	border-radius: 5px;
	background: transparent;
	border: 1px solid rgba(0, 204, 167, 0.7);
	${media.tablet`
   width:20%;
  `}
	${media.mobile`
   width:100%;
   margin-left: 0px;
  `}

  select {
		font-size: 14px;
		height: 90%;
		width: 100%;

		background: transparent;
		color: ${AppColors.lightBlack};
		border: none;
		outline: none;
		border-radius: 3px;
		appearance: none;
		option {
			color: ${AppColors.lightBlack};
			background: ${AppColors.newsLetterBg};
			border: none;
			margin-top: 10px;
			font-size: 20px;
		}
	}
	div {
		position: absolute;
		right: 2%;
		color: ${AppColors.newsLetterBg};
		background: transparent;

		height: 100%;
		width: 2em;
		pointer-events: none;
		display: flex;
		align-items: center;
	}

	${media.mobile`
    select {
        padding: 0em 2px 0em 2px;
    }
    `}
`
