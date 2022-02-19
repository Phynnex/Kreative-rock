import media from "utils/media"
import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	/* margin: 0rem 1rem; */
	/* padding: 0px 20px; */
	flex-direction: row;

	${media.mobile`
	flex-direction: column;
 margin-bottom:15px;
    `}
`
export const HeaderContent = styled.div`
	padding: 0px 20px;
	${media.mobile`
	padding: 0px 0px;
  `}
`

export const HeaderText = styled.h4`
	font-weight: normal;
	/* font-size: 1.5rem; */
	line-height: 61px;
	text-transform: capitalize;
	color: #000000;
	${media.mobile`
    /* font-size: 2rem; */
  `}
`

export const InputContainer = styled.div`
	width: 280px;
	height: 50px;
	display: flex;
	justify-content: space-around;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 42px;
	// padding-left: 3rem;
	margin-bottom: 1rem;

	${media.mobile`
    height: 45px;
    `}
`

export const HeaderImg = styled.img`
	padding: 0rem;
	width: 30px;
`
export const HelpSearch = styled.input`
	background: #f1f1f1;
	border-radius: 42px;
	:focus {
		border: none;
		outline: none;
	}
`

export const Hr = styled.hr`
	margin: 0rem 1rem;
	background: #00cca7;
	border-radius: 10px;
`
