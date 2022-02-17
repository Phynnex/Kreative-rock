import React from "react"
import { DateInput, LineDiv, SDateContainer, SelectDiv, SenderDiv, SenderIDContainer, SenderIdTitleDiv, SenderNameInput, SendIdCard, StatusDiv, TimeInput } from "./style"
import arrowDown from "assets/images/arrowdown.svg"
import { Img, KreativeP } from "globalStyles/style"
import approvedStatus from "assets/images/approvedicon.svg"
import AppColors from "utils/colors"
function SenderIdPage() {
	return (
		<SenderIDContainer>
			<SenderDiv>
				<SenderIdTitleDiv>
					<h4>Sender ID</h4>
					<LineDiv />
					<SendIdCard>
						<SenderNameInput type="text" placeholder="Name" />
						<SDateContainer>
							<DateInput>
								<p>Feb 29,2021</p>
								<Img src={arrowDown} alt="arrowDown" />
							</DateInput>
							<TimeInput>{`10 : 00`}</TimeInput>
							<SelectDiv>
								<option value="">AM</option>
								<option value="AM">AM</option>
								<option value="PM">PM</option>
							</SelectDiv>
						</SDateContainer>
						<SDateContainer mt="10px">
							<KreativeP color="#393939" mt="15px">
								Status
							</KreativeP>
							<StatusDiv>
								<Img src={approvedStatus} alt="arrowDown" />
								<KreativeP color={AppColors.newsLetterBg} mt="15px">
									APPROVED
								</KreativeP>
							</StatusDiv>
						</SDateContainer>
					</SendIdCard>
				</SenderIdTitleDiv>
			</SenderDiv>
		</SenderIDContainer>
	)
}

export default SenderIdPage
