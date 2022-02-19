import React from "react"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { useToggleContact } from "context/ContactActionsContext"
// import { AddContactDiv, AddListInput, CreateContactContainer, HalfAddInputDiv } from "./style"
import AppColors from "utils/colors"
import CustomSelectCountryCode from "./countryCodeSelect"
import { AddContactDiv, AddListInput, CreateContactContainer, HalfAddInputDiv } from "./style"

function CreateContactsForm() {
	const { stopPropagation, toggleaddContact, handleToggleAddContact } = useToggleContact()

	return (
		<CreateKeywordOverlay open={toggleaddContact} onClick={handleToggleAddContact}>
			<CreateContactContainer onClick={stopPropagation}>
				<AddContactDiv>
					<KreativeP fw="bold">Create New Contact</KreativeP>
					<HalfAddInputDiv>
						<AddListInput w="49%" type="text" placeholder="First Name" />
						<AddListInput w="49%" type="text" placeholder="Last Name" />
					</HalfAddInputDiv>
					<AddListInput type="email" placeholder="Email" />
					<HalfAddInputDiv>
						<CustomSelectCountryCode />
						<AddListInput mw="70%" w="78%" type="tel" placeholder="Phone Number" />
					</HalfAddInputDiv>
					<HalfAddInputDiv>
						<AddListInput w="49%" type="text" placeholder="Job Title" />
						<AddListInput w="49%" type="text" placeholder="Location" />
					</HalfAddInputDiv>
					<AddListInput type="text" placeholder="Note" />
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton p="10px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
							Save Contact
						</KButton>
					</Div>
				</AddContactDiv>
			</CreateContactContainer>
		</CreateKeywordOverlay>
	)
}

export default CreateContactsForm
