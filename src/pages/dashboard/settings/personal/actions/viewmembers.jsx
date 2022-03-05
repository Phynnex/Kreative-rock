import React from "react"
import { KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { AddMemberDiv } from "./style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import ViewMemberTable from "./viewmemberstable"
// import AppColors from "utils/colors"

function ViewMember() {
	const { stopPropagation, toggleImportContact, handleToggleImportContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<AddMemberDiv onClick={stopPropagation}>
				<KreativeP color={AppColors.mutedGrey} fw="normal" tAlign="center">
					Team members
				</KreativeP>
				<ViewMemberTable />
			</AddMemberDiv>
		</CreateKeywordOverlay>
	)
}

export default ViewMember
