import React from "react"
import { Img, KreativeP } from "globalStyles/style"
import { CopyButtDiv, CopyDiv, MarKetBarge, RefBody, RefCardDiv, RefContainer, RefTopDetails, RefUserInfoSection, ShareButtContainer, ShareButtDiv } from "./style"
import userDp from "assets/images/userIcon1.svg"
import RefCard from "./card"
import RefCardData from "./cardData"
import Copylink from "./copylink"
import ShareButton from "./shareButton"
import ShareData from "./shareData"

function ReferalPage() {
	const { email, fb, whatsapp, linkedin, twitter } = ShareData
	return (
		<RefContainer>
			<RefBody>
				<RefTopDetails>
					<RefUserInfoSection>
						<Img src={userDp} alt="Profile picture" />
						<div>
							<h5>Refer Frinds & Earn Credit</h5>
							<KreativeP mb="0px" mt="-15px">
								Introduce a friend to fintech and you’ll be credited $100 to your account
							</KreativeP>
						</div>
					</RefUserInfoSection>
					<MarKetBarge>
						<p>5% KRD</p>
						<p>Revenue</p>
					</MarKetBarge>
				</RefTopDetails>
				<CopyButtDiv>
					<CopyDiv>
						<Copylink />
						<Copylink />
					</CopyDiv>
				</CopyButtDiv>
				<ShareButtDiv>
					<h6>Share With </h6>
					<ShareButtContainer>
						<ShareButton text={email.text} icon={email.icon} bgColor={email.bgColor} />
						<ShareButton text={fb.text} icon={fb.icon} bgColor={fb.bgColor} />
						<ShareButton />
						<ShareButton text={twitter.text} icon={twitter.icon} bgColor={twitter.bgColor} />
						<ShareButton text={linkedin.text} icon={linkedin.icon} bgColor={linkedin.bgColor} />
						<ShareButton text={whatsapp.text} icon={whatsapp.icon} bgColor={whatsapp.bgColor} />
					</ShareButtContainer>
				</ShareButtDiv>
				<RefCardDiv>
					{RefCardData?.map(i => (
						<RefCard key={i.id} text={i.text} icon={i.icon} />
					))}
				</RefCardDiv>
			</RefBody>
		</RefContainer>
	)
}

export default ReferalPage
