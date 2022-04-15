import styled from "styled-components/macro"
import media from "utils/media"

export const RefContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`

export const RefBody = styled.div`
	width: 95%;
	background: #dfeaef;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	${media.smallDesktopMinimum`
    width: 100%;
    `}
`
export const RefTopDetails = styled.div`
	width: 100%;
	display: flex;
	padding: 0rem 2rem;
	height: 120px;
	justify-content: space-between;
	background: #00cca7;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px 10px 0px 0px;
	${media.mobile`
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
	padding: 0rem 1rem;
    `}
`

export const RefUserInfoSection = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	max-width: 55%;
	color: #ffffff;
	img {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
	}
	div {
		display: flex;
		flex-direction: column;
		margin-left: 0.5rem;
	}
	div h5 {
		font-weight: 700;
		font-size: 1.5em;
		line-height: 46px;
		letter-spacing: 0.03em;
	}
	${media.smallDesktopMinimum`
    max-width: 70%;
    `}
	${media.mobile`
	 max-width: 100%;
	`}
`

export const MarKetBarge = styled.div`
	width: 128px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	height: 80%;
	background: #ff7900;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 0px 0px 10px 10px;
`

export const RefCardDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-top: 3rem;
	margin-bottom: 10rem;
`
export const CopyBody = styled.div`
	width: 100%;
	display: flex;
	margin-top: 3rem;
	flex-direction: column;
`
export const CopyBodyItem = styled.div`
	width: 100%;
	height: 50px;
	padding-left: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	border: 1px solid #00cca7;
	box-sizing: border-box;
	border-radius: 50px;
	p {
		margin-top: 15px;
	}
`
export const CopyBtnRef = styled.button`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	background: #ff7900;
	gap: 1.5rem;
	padding-left: 0.5rem;
	text-transform: uppercase;
	border: none;
	outline: none;
	color: #ffffff;
	border-radius: 0px 50px 50px 0px;
`
export const CopyDiv = styled.div`
	width: 78%;
`

export const ShareButtDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	h6 {
		margin-bottom: 2rem;
	}
`
export const ShareButtContainer = styled.div`
	width: 78%;
	display: flex;
	gap: 0.5rem;
`

export const CopyButtDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`
