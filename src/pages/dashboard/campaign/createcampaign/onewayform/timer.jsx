import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import React from "react"
// import { CreateKeywordContainer, CreateKeywordOverlay, KreateFormBody } from "./style"
import closeIcon from "assets/images/closeIcon.svg"
import { CreateKeywordOverlay, KreateFormBody } from "pages/dashboard/keywords/createkeyword/style"
import { TimerBody, TimerBodyBtn, TimerBtn } from "./timerStyle"
import arrowdownIcon from "assets/images/arrowdown.svg"

function SetTimerCampaign({ close, open }) {
	return (
		<CreateKeywordOverlay open={open}>
			<TimerBody>
				<Div width="100%" display="flex" justify="flex-end">
					<KButton bc="transparent" onClick={close}>
						<Img src={closeIcon} alt="Closed" />
					</KButton>
				</Div>
				<KreateFormBody>
					<KreativeP fs="16px" mt="30px" tAlign="center">
						Schedule message
					</KreativeP>
					<TimerBodyBtn>
						<TimerBtn>
							Nov 20 2021 <Img src={arrowdownIcon} alt="select date" />
						</TimerBtn>
						<TimerBtn>
							10 : 21 <Img src={arrowdownIcon} alt="select date" />
						</TimerBtn>
						<TimerBtn>
							AM <Img src={arrowdownIcon} alt="select date" />
						</TimerBtn>
					</TimerBodyBtn>
				</KreateFormBody>
			</TimerBody>
		</CreateKeywordOverlay>
	)
}

export default SetTimerCampaign
