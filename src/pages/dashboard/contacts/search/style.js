import styled from "styled-components/macro"
import media from "utils/media"

export const SearchDiv = styled.div`
	width: 50%;
	height: 44px;
	display: flex;
	align-items: center;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 33px;
	padding-left: 15px;
	input {
		flex: 1;
		outline: none;
		border: none;
		padding: 0px 15px;
		height: 100%;
		background-color: transparent;
		border-top-right-radius: 33px;
		border-bottom-right-radius: 33px;
	}
	img {
		height: 50%;
	}
	${media.mobile`
    width: 100%;
    margin-top: 10px;
    `}
`
