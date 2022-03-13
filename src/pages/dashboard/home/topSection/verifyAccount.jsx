import { useToggleContact } from "context/ContactActionsContext"

import React from "react"
import { DVerifyBtn, VerifyAccount, VerifyEmailInput } from "./style"

function VerifyAccountInput() {
	const { handleToggleContact } = useToggleContact()
	return (
		<>
			<p style={{ marginBottom: "4px" }}>Enter your Email/Phone Number</p>
			<VerifyAccount>
				<VerifyEmailInput placeholder="enter your email" />
				<DVerifyBtn onClick={handleToggleContact}>Verify</DVerifyBtn>
			</VerifyAccount>
		</>
	)
}

export default VerifyAccountInput
