import styled from "styled-components"
import media from "utils/media"
export const FaqsRep = styled.div`
	width: 100%;
	padding: 0px 20px;
	${media.mobile`
  padding: 0px 0px;
  `}
`
export const FaqsContainer = styled.div`
	width: 100%;
	height: auto;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 33px;
	margin: 0 auto;
	margin-top: 2rem;
	padding: 1rem;
	${media.mobile`
  border:none;
  `}
`

export const FaqsDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 10rem;
	${media.tablet`
  padding-right: 2rem;
  `}
	${media.mobile`
  padding-right: 0rem;
  `}
`
export const FaqsHeader = styled.h4`
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	line-height: 38px;
	text-transform: capitalize;
	color: #000000;
	margin: 0rem 0rem 1rem 0rem;
`

export const QuestionsDiv = styled.div`
	display: flex;
	justify-content: center;
`

export const InnerDiv = styled.div`
	display: flex;
`

export const QuestionsContainer = styled.div`
	display: flex;
	gap: 20px;
`

export const QuestionNumber = styled.p`
	font-family: Lora;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	color: #000000;
`

export const ResponseDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-top: -9px;
`

export const Question = styled.p`
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 38px;
	/* text-transform: capitalize;s */
	color: #000000;
`

export const Response = styled.p`
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
	color: #6b6b6b;
	margin-top: -0.5rem;
`
