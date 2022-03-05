import { Div, KButton } from "globalStyles/style"
import React from "react"
import AppColors from "utils/colors"
import { AccountFormContainer, AccountInput, FormControlDiv, InputControllerDiv } from "./style"

function AccountSettingsForm() {
	return (
		<AccountFormContainer>
			<InputControllerDiv>
				<FormControlDiv w="48%">
					<label>First Name</label>
					<AccountInput w="100%" mt="5px" placeholder="John" />
				</FormControlDiv>
				<FormControlDiv w="48%">
					<label>Last Name</label>
					<AccountInput w="100%" mt="5px" placeholder="Doe" />
				</FormControlDiv>
			</InputControllerDiv>

			<FormControlDiv w="100%" mt="20px">
				<label>Email</label>
				<AccountInput type="email" mt="5px" placeholder="john@gmail.com" />
			</FormControlDiv>
			<FormControlDiv w="100%" mt="20px">
				<label>Contacts</label>
				<AccountInput type="tel" mt="5px" placeholder="+2349064545344" />
			</FormControlDiv>
			<FormControlDiv w="100%" mt="20px">
				<label>Address</label>
				<AccountInput type="text" mt="5px" placeholder="Address" />
			</FormControlDiv>
			<InputControllerDiv mt="20px">
				<FormControlDiv w="48%">
					<label>City</label>
					<AccountInput w="100%" mt="5px" placeholder="Lagos" />
				</FormControlDiv>
				<FormControlDiv w="48%">
					<label>State</label>
					<AccountInput w="100%" mt="5px" placeholder="Lagos" />
				</FormControlDiv>
			</InputControllerDiv>
			<InputControllerDiv mt="20px">
				<FormControlDiv w="48%">
					<label>Zip Code</label>
					<AccountInput w="100%" mt="5px" placeholder="506784" />
				</FormControlDiv>
				<FormControlDiv w="48%">
					<label>Country</label>
					<AccountInput mt="5px" w="100%" placeholder="Nigeria" />
				</FormControlDiv>
			</InputControllerDiv>
			<Div width="100%" display="flex" justify="center" mt="40px" mb="50px">
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="150px">
					Save Changes
				</KButton>
			</Div>
		</AccountFormContainer>
	)
}

export default AccountSettingsForm
