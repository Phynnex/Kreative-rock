import React from "react"
import styled from "styled-components/macro"
import bg from "assets/images/freetempbg.png"
import userpic from "assets/images/freeMan.png"
import fb from "assets/images/fbgreen.svg"
import cam from "assets/images/greencam.svg"
import insta from "assets/images/greeninstagram.svg"
import twitter from "assets/images/twittergreen.svg"

import { Img, KreativeP } from "globalStyles/style"
import media from "utils/media"
import AppColors from "utils/colors"
const FreetempContainer = styled.div`
	width: 60%;
	margin: auto;
	height: 228px;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 5px;
	${media.mobile`
		width:95%;
	`}
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
const FreeOneWriteDiv = styled.div`
	/* width: 50%; */
	height: 100%;
	display: flex;
	flex-direction: column;
	/* background: yellow; */
`

const ClipDiv = styled.div`
	width: 120px;
	height: 100px;
	clip-path: polygon(50% 0%, 86% 22%, 100% 57%, 77% 100%, 19% 99%, 0 59%, 10% 20%);
	margin-left: 20px;
	margin-right: 2px;
`
const TitleDiv = styled.div`
	width: 70px;
	max-width: 80%;
	height: 21.74px;
	background: #00a386;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffff;
`

const OneDiv = styled.div`
	display: flex;
	min-height: 10px;
	height: 21.74px;
	/* background-color: red; */
	margin-top: 5px;
	p {
		font-size: 12px;
	}
`
const SocialIconsOne = styled.div`
	display: flex;
	margin-top: 18px;
	img {
		margin-right: 10px;
		cursor: pointer;
	}
`
function FreeTemp1() {
	return (
		<FreetempContainer>
			<FreetempBody>
				<ClipDiv>
					<Img width="100%" height="100%" src={userpic} alt="free template" />
				</ClipDiv>
				<FreeOneWriteDiv>
					<KreativeP color={AppColors.brandColor} mt="5px">
						Justin
					</KreativeP>
					<TitleDiv>Ceo</TitleDiv>
					<OneDiv>
						<p>Phone:</p>
						<KreativeP ml="10px">+2348094200003</KreativeP>
					</OneDiv>
					<OneDiv>
						<p>Email:</p>
						<KreativeP ml="10px">info@kreativerock.com</KreativeP>
					</OneDiv>
					<OneDiv>
						<p>Website:</p>
						<KreativeP ml="10px">https://kreativerock.com/</KreativeP>
					</OneDiv>
					<OneDiv>
						<p>Address:</p>
						<KreativeP ml="10px">No. 77 Ojueleba Road, Surulere, Lagos State, Nigeria</KreativeP>
					</OneDiv>
					<SocialIconsOne>
						<Img width="25px" height="25px" src={fb} alt="facebook" />
						<Img width="25px" height="25px" src={cam} alt="Cam" />
						<Img width="25px" height="25px" src={insta} alt="Instagram" />
						<Img width="25px" height="25px" src={twitter} alt="Twitter" />
					</SocialIconsOne>
				</FreeOneWriteDiv>
			</FreetempBody>
		</FreetempContainer>
	)
}

export default FreeTemp1
