import { Div } from "globalStyles/style"
import React from "react"
import ProfileIcon from "../ProfileIcon"
import AccountSettingsForm from "./form"
import { AccountContainer } from "./style"

function AccountTab() {
	return (
		<AccountContainer>
			<Div width="100%" display="flex" justify="center" mb="40px">
				<ProfileIcon />
			</Div>
			<AccountSettingsForm />
		</AccountContainer>
	)
}

export default AccountTab
