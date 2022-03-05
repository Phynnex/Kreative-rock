import { useToggleContact } from "context/ContactActionsContext"
import { Div, KButton, KreativeP } from "globalStyles/style"
import React from "react"
import AppColors from "utils/colors"
import { AddBtnContainer, ButtonItemContainer, FormItemContainer, SettingsInput } from "../form/settingsInput"
import AddMember from "./actions/addmember"
import ViewMember from "./actions/viewmembers"
import { PersonFormDiv } from "./style"

function PersonalTab() {
	const { handleToggleContact, handleToggleImportContact } = useToggleContact()
	return (
		<PersonFormDiv>
			<AddMember />
			<ViewMember />
			<KreativeP fw="bold" fs="18px" mt="20px">
				Change Password
			</KreativeP>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Old password
				</KreativeP>
				<SettingsInput
					type="password"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					New password
				</KreativeP>
				<SettingsInput
					type="password"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Confirm password
				</KreativeP>
				<SettingsInput
					type="password"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<ButtonItemContainer>
				<KreativeP color={AppColors.blackish} fw="bold" mb="-3px">
					Add a team member
				</KreativeP>
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} onClick={handleToggleContact}>
					Add member
				</KButton>
			</ButtonItemContainer>
			<ButtonItemContainer>
				<KreativeP color={AppColors.blackish} fw="bold" mb="-3px">
					View team members
				</KreativeP>
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} onClick={handleToggleImportContact}>
					View members
				</KButton>
			</ButtonItemContainer>
			<KreativeP fw="bold" fs="18px" mt="20px">
				Delete account
			</KreativeP>
			<KreativeP fw="normal" fs="14px" mt="0px">
				i want to Delete my kreative ACCOUNT permaenantly
			</KreativeP>
			<AddBtnContainer>
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="170px">
					Delete Account
				</KButton>
			</AddBtnContainer>
			<Div width="100%" display="flex" justify="center" mt="30px" mb="50px">
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="150px">
					Save Changes
				</KButton>
			</Div>
		</PersonFormDiv>
	)
}

export default PersonalTab
