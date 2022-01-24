import styled from "styled-components/macro"
import media from "utils/media"

export const EsocialContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
`

export const SocialInputContent = styled.div`
	width: 100%;
	/* background: red; */
	display: flex;
	align-items: center;
	/* justify-content: center; */
	margin-bottom: 20px;
	img {
		margin-right: 70px;
		width: 35px;
		height: 35px;
		margin-left: 100px;
	}
	${media.mobile`
	img {
		margin-right: 40px;
		width: 35px;
		height: 35px;
		margin-left: 10px;
		
	}
	`}
`
export const SocialInput = styled.input`
	width: 50%;
	height: 45px;
	background: #f3f3f3;
	border: 1px solid rgba(0, 204, 167, 0.25);
	box-sizing: border-box;
	border-radius: 5px;
	padding: 0px 10px;
	&:focus {
		border: transparent;
	}
	${media.mobile`

		width: 73%;
	`}
`
export const CaptionContent = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 20px;
	align-items: center;
	p {
		margin-right: 55px;
		margin-left: 90px;
	}
	${media.mobile`
	p {
		margin-right: 10px;
		margin-left: 10px;
	}
	button {
		width:50%;
	}
	`}
`
export const AddMoreBtn = styled.button`
	width: 30%;
	height: 48px;
	background: #f3f3f3;
	border-radius: 5px;
`
