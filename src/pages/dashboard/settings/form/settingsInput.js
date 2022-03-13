import media from "utils/media"
import styled from "styled-components/macro"
import AppColors from "utils/colors"

export const SettingsInput = styled.input`
	width: ${({ w }) => (w ? w : "70%")};
	height: 50px;
	padding: 0px 15px;
	background: #ffffff;
	border: 1px solid ${({ error }) => (error ? "red" : AppColors.newsLetterBg)};
	border-radius: 5px;
	${media.mobile`
        width: 100%;
  `}

	::placeholder {
		color: #797b80;
		padding-left: 3%;
	}

	&:focus {
		outline: none;
		border: 1px solid ${AppColors.brandColor};
	}
`

export const InputControllerDiv = styled.div`
	width: 100%;
	display: flex;
	/* background: green; */

	padding: 0;
	flex-direction: column;
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

export const FormItemContainer = styled.div`
	width: 100%;
	margin-top: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		max-width: 20%;
	}
	${media.mobile`
  align-items: start;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top:1px;
  p {
    max-width: 100%;
    margin-bottom:5px;
  }
  `}
`
export const ButtonItemContainer = styled.div`
	width: 100%;
	margin-top: 40px;
	display: flex;
	align-items: center;
	gap: 115px;
	/* justify-content: space-between; */
	p {
		max-width: 20%;
	}
	${media.smallDesktopMinimum`
	gap: 147px;
	`}
	${media.tablet`
	gap: 70px;
	`}
	${media.mobile`
  align-items: start;
  margin-bottom: 10px;
  margin-top:20px;
  gap: 0px;
  justify-content: space-between;
  p {
    max-width: 100%;
    margin-bottom:5px;
  }
  `}
`
export const AddBtnContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	button {
		margin-left: 255px;
	}

	${media.smallDesktopMinimum`
	button {
		margin-left: 290px;
	}
	`}
	${media.tablet`
	button {
		margin-left: 220px;
	}
	`}
	${media.mobile`
		align-items: start;
		margin-bottom: 10px;
		margin-top:20px;
		justify-content: flex-end;
		button {
				margin-left: 0px;
			}
	`}
`
export const WithErrorDiv = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	${media.mobile`
        width: 100%;
  `}
`
