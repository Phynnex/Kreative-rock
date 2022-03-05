import React from "react"
import { SenderDiv, SenderIDContainer, SenderIdTitleDiv, SenderNameInput } from "./style"
// import arrowDown from "assets/images/arrowdown.svg"
import { Div, KButton } from "globalStyles/style"
// import approvedStatus from "assets/images/approvedicon.svg"
import AppColors from "utils/colors"
import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "../keywords/createkeyword/style"
import { AddFormDivAResponse } from "../autoresponse/addform/style"
import CustomSelectCountry from "./selectCountry"
function CreateSenderIdForm() {
	const { toggleImportContact, stopPropagation, handleToggleImportContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<AddFormDivAResponse onClick={stopPropagation}>
				<SenderIDContainer>
					<SenderDiv>
						<SenderIdTitleDiv>
							<Div width="100%" display="flex" justify="center" mb="10px">
								<h4>Create Sender ID</h4>
							</Div>

							<SenderNameInput type="text" placeholder="Sender Id" />
							<CustomSelectCountry />
							{/* <SDateContainer>
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
								</SDateContainer> */}
							{/* <SDateContainer mt="10px">
								<KreativeP color="#393939" mt="15px">
									Status
								</KreativeP>
								<StatusDiv>
									<Img src={approvedStatus} alt="arrowDown" />
									<KreativeP color={AppColors.newsLetterBg} mt="15px">
										APPROVED
									</KreativeP>
								</StatusDiv>
							</SDateContainer> */}
							<Div width="100%" display="flex" justify="flex-end">
								<KButton p="7px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
									CREATE
								</KButton>
							</Div>
						</SenderIdTitleDiv>
					</SenderDiv>
				</SenderIDContainer>
			</AddFormDivAResponse>
		</CreateKeywordOverlay>
	)
}

export default CreateSenderIdForm
