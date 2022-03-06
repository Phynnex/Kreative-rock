import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const LoginTextField = styled.input`
	width: 100%;
	height: 51px;
	outline: none;
	border: 1px solid #dfdfdf;
	box-sizing: border-box;
	padding: 0px 10px;
	border-radius: 5px;
	:focus {
		border: 1px solid ${({ error }) => (error ? "#dd0e3b" : AppColors.brandColor)};
	}
	:active {
		border: 1px solid ${({ error }) => (error ? "#dd0e3b" : AppColors.brandColor)};
	}
	&:placeholder {
		padding: 0px 10px;
	}
`

export const LoginBtn = styled.button`
	width: 100%;
	height: 51px;
	border: 1px solid #ff7900;
	background-color: #ff7900;
	box-sizing: border-box;
	font-size: 20px;
	text-transform: uppercase;
	color: #fff;
	border-radius: 5px;
	margin-top: 15px;
`
export const LoginContDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	${media.mobile`
	gap: 30px;
    `}
	${media.smallMobile`
	gap: 60px;
    `}
`
