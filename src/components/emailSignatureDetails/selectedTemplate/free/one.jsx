import React from "react"
import styled from "styled-components/macro"
import bg from "assets/images/freetempbg.png"
import userpic from "assets/images/freeMan.png"
import { Img } from "globalStyles/style"
const FreetempContainer = styled.div`
	width: 60%;
	margin: auto;
	height: 228px;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 5px;
`
const FreetempBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	background-image: url(${bg});
	background-repeat: no-repeat;
	border-radius: 5px;
`

const ClipDiv = styled.div`
	width: 110px;
	height: 110px;
	background: red;
	clip-path: polygon(50% 0%, 86% 22%, 100% 57%, 77% 100%, 19% 99%, 0 59%, 10% 20%);
`

function FreeTemp1() {
	return (
		<FreetempContainer>
			<FreetempBody>
				<ClipDiv>
					<Img width="100%" height="100%" src={userpic} alt="free template" />
				</ClipDiv>
			</FreetempBody>
		</FreetempContainer>
	)
}

export default FreeTemp1
