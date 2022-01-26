import styled from "styled-components/macro"
import media from "utils/media"

export const KeywordBody = styled.div`
	width: 100%;
	display: flex;
	/* background-color: #fff; */
	padding: 0px 20px;
	margin-top: 20px;
	justify-content: space-between;
	align-items: center;
	/* p {
		margin-top: -5px;
	} */
	button {
		width: 104.5px;
		height: 35px;
		border-radius: 30px;
		margin-right: 10px;
		text-transform: uppercase;
		color: #fff;
	}
	input {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
	${media.smallDesktopMinimum`
    padding: 0px 0px;

    `}
	${media.tablet`
    padding: 0px 0px;
    flex-direction: row;
	
    button {
		width: 100.5px;
		height: 35px;
		border-radius: 30px;
		margin-right: 10px;
		text-transform: uppercase;
		color: #fff;
	}
    `}
	${media.mobile`
    padding: 0px 0px;
	width: 98%;
	/* background:red; */
    flex-direction: column;
	align-items: flex-start;

    button {
		width: 90.5px;
		height: 35px;
		border-radius: 30px;
		margin-right: 10px;
		text-transform: uppercase;
		color: #fff;
	}
    `}
`
export const KeyButton = styled.button`
	background: ${({ bg }) => (bg ? bg : "#FF7900")};
`
export const CheckBoxDiv = styled.div`
	display: flex;
	align-items: center;
	label {
		margin-right: 10px;
		margin-left: 5px;
	}
`

export const KeywordActionArea = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	${media.mobile`
	 width: 99.5%;
	`}
`

export const CustomCheckWrapper = styled.p`
	position: relative;
	margin-top: 15px;
`
export const CustomisedCheckInput = styled.input`
	position: absolute;
	left: -9999px;
	top: -9999px;
	&:checked + img {
		width: ${({ cw }) => cw || null};
		height: ${({ ch }) => ch || null};
	}
`
export const CheckImg = styled.img`
	width: ${({ w }) => w || null};
	height: ${({ h }) => h || null};
	position: relative;
	cursor: pointer;
	&:active {
		background: #e7e7e7;
	}
`
