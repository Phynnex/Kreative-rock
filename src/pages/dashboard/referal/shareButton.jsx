import { Img } from "globalStyles/style"
import React from "react"
import insta from "assets/images/insta_ref.svg"
import styled from "styled-components/macro"

const ShareBtn = styled.button`
	/* width: 162.86px; */
	height: 35.11px;
	display: flex;
	align-items: center;
	background: ${({ bg }) => (bg ? bg : null)};
	color: #ffffff;
	border-radius: 41px;
	padding: 0px 15px;
	gap: 0.9rem;
	img {
		width: 1.3rem;
		height: 1.3rem;
	}
	p {
		margin-top: 15px;
	}
`

function ShareButton({ bgColor = "#ea4335", text = "Instagram", icon = insta }) {
	return (
		<ShareBtn bg={bgColor}>
			<Img src={icon} alt="Share" />
			<p>{text}</p>
		</ShareBtn>
	)
}

export default ShareButton
