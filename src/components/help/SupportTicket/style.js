import styled from "styled-components"
import media from "utils/media"

export const SupportHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	margin-bottom: 20px;
	padding: 0px 20px;
	${media.tablet`
	padding: 0px 0px;
  `}
	${media.mobile`
	padding: 0px 0px;
    `}
`

export const SupportTitle = styled.p`
	font-weight: normal;
	font-size: 24px;
	line-height: 46px;
	color: #000000;
`

export const SupportInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* background: #f80; */
`

export const SupportSubject = styled.input`
	width: 70%;
	height: 50px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	font-size: 16px;
	line-height: 31px;
	color: #9d9d9d;
	padding: 0rem 1rem;
	:focus {
		border: 1px solid #00cca7;
		outline: none;
	}
	${media.mobile`
  width:100%;
  `}
`

export const SupportDescription = styled.textarea`
	width: 70%;
	height: 196px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	margin-top: 1rem;
	padding: 1rem 1rem 0rem;
	:focus {
		border: 1px solid #00cca7;
		outline: none;
	}
	${media.mobile`
  width:100%;
  `}
`

export const AttachDiv = styled.div`
	width: 70%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	background: #f1f1f1;
	box-sizing: border-box;
	border-radius: 5px;
	margin: 2rem 0rem;
	${media.mobile`
  width: 100%;
  `}
`

export const AttachInput = styled.input`
	width: 100%;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	color: #f1f1f1;
	border-radius: 5px;
	padding-left: 0.5rem;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	:focus {
		border: 1px solid #00cca7;
		outline: none;
	}
`

export const SupportImgDiv = styled.div`
	width: 100px;
	height: 100%;
	display: flex;
	align-items: center;
	background: #00cca7;
	border-top-right-radius: 5px;
	cursor: pointer;
	border-bottom-right-radius: 5px;
	display: flex;
	justify-content: center;
`

export const SupportImg = styled.img`
	width: 30%;
	height: 30%;
`
