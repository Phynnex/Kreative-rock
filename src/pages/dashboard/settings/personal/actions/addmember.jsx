import React from "react"
import { KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { AddMemberDiv } from "./style"
import { useToggleContact } from "context/ContactActionsContext"
import AddMemberTable from "./table"
import AppColors from "utils/colors"
// import AppColors from "utils/colors"

function AddMember() {
	const { stopPropagation, toggleContact, handleToggleContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleContact} onClick={handleToggleContact}>
			<AddMemberDiv onClick={stopPropagation}>
				<KreativeP color={AppColors.mutedGrey} fw="normal" tAlign="center">
					Add team member
				</KreativeP>
				<AddMemberTable />
			</AddMemberDiv>
		</CreateKeywordOverlay>
	)
}

export default AddMember
