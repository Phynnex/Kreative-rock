import React from "react"
import { Img } from "globalStyles/style"

import AddIcon from "assets/images/addIconyellow.svg"
import uploadIcon from "assets/images/uploadIconyellow.svg"
import { BtnContentDiv, CTAButton, CTAButtonContainer, CTAScrollDiv } from "./style"

function ContactActionBtns() {
	return (
		<CTAButtonContainer>
			<CTAScrollDiv>
				<CTAButton>
					<BtnContentDiv>
						<Img width="20px" height="20px" src={AddIcon} alt="Add Contact" />
						{"Add Contact"}
					</BtnContentDiv>
				</CTAButton>
				<CTAButton>
					<BtnContentDiv>
						<Img width="20px" height="20px" src={AddIcon} alt="Add List" />
						{"Add list"}
					</BtnContentDiv>
				</CTAButton>
				<CTAButton>
					<BtnContentDiv>
						<Img src={uploadIcon} alt="Import Contact" />
						{"Import Contacts"}
					</BtnContentDiv>
				</CTAButton>
			</CTAScrollDiv>
		</CTAButtonContainer>
	)
}
export default ContactActionBtns
