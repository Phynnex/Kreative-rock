import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const AccountFormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	${media.smallDesktopMinimum`
	width: 100%;
	`}
	${media.tablet`
	width: 100%;
	`}
	${media.mobile`
	width: 100%;
	`}
`

export const FormControlDiv = styled.div`
	width: ${({ w }) => (w ? w : "100%")};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	display: flex;
	flex-direction: column;
`

export const AccountInputDiv = styled.div`
	width: 100%;
	display: flex;
`
export const AccountInput = styled.input`
	width: ${({ w }) => (w ? w : "100%")};
	height: 50px;
	padding: 0px 10px;
	background: #f1f1f1;
	border: 1px solid ${({ error }) => (error ? "#f70" : AppColors.newsLetterBg)};
	border-radius: 5px;
	margin-top: ${({ mt }) => (mt ? mt : null)};
	${media.mobile`
        width: 100%;
  `}

	:placeholder {
		color: #797b80;
		padding: 0px 10px;
	}

	&:focus {
		outline: none;
		border: 1px solid ${({ error }) => (error ? "#f70" : AppColors.brandColor)};
	}
`

export const InputControllerDiv = styled.div`
	width: 100%;
	margin-top: ${({ mt }) => (mt ? mt : null)};
	display: flex;
	justify-content: space-between;

	padding: 0;

	p {
		margin-left: 26.5%;
		margin-top: -12px;
	}
	${media.mobile`
  width: 100%;
  p {
    margin-left: 1%;
  }
  `}
`
