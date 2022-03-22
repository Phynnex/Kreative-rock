import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import React from "react"
import { DVerifyBtn, VerifyAccount, VerifyEmailInput, VerifyFormDiv } from "./style"

function Verifycode() {
	const { stopPropagation, toggleContact, handleToggleContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleContact} onClick={handleToggleContact}>
			<VerifyFormDiv onClick={stopPropagation}>
				<p>Enter Code</p>
				<VerifyAccount>
					<VerifyEmailInput placeholder="enter your email" />
					<DVerifyBtn onClick={handleToggleContact}>Activate</DVerifyBtn>
				</VerifyAccount>
			</VerifyFormDiv>
		</CreateKeywordOverlay>
	)
}

export default Verifycode
