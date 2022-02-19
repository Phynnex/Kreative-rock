import React from "react"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
// import { AddListContainer, AddListInput, ListItemsDiv } from "./style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import { AddListContainer, AddListInput, ListItemsDiv } from "./style"

function AddContactListForm() {
	const { stopPropagation, toggleContact, handleToggleContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleContact} onClick={handleToggleContact}>
			<AddListContainer onClick={stopPropagation}>
				<ListItemsDiv>
					<KreativeP fw="bold">Add List</KreativeP>
					<AddListInput />
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton p="10px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
							Save
						</KButton>
					</Div>
				</ListItemsDiv>
			</AddListContainer>
		</CreateKeywordOverlay>
	)
}

export default AddContactListForm
