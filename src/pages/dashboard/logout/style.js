import styled, { keyframes } from "styled-components/macro"

export const SlideIn = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`
export const LogoutdropContainer1 = styled.div`
	display: ${({ show }) => (show ? "block" : "none")};
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 500;
	left: 0;
	top: 0;

	background-color: rgba(0, 0, 0, 0.5);
	transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-100%)`)};
	animation-name: ${SlideIn};
	animation-duration: 0.3s;
`

export const LogoutdropContainer = styled.div`
	/* position: absolute; */
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0%;
	left: 0%;
	right: 0%;
	bottom: 0%;
	background: ${({ show }) => (show ? "rgba(255, 255, 255, 1)" : "transparent")};
	position: fixed;
	z-index: 5000;
	transition: all 0.5s ease-out;
	animation-name: ${SlideIn};
	animation-duration: 0.5s;
`
export const LogoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -200px;
	gap: 20px;
`
