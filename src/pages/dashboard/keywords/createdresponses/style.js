import styled from "styled-components/macro"
import media from "utils/media"

export const CreatedBody = styled.div`
	width: 100%;
	display: flex;
	/* background-color: #fff; */
	padding: 0px 20px;
	margin-top: 20px;
	justify-content: space-between;
	align-items: center;
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
	p {
		margin-top: 7px;
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
