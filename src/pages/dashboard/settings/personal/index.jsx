import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useToggleContact } from "context/ContactActionsContext"
import { Div, KButton, KreativeP } from "globalStyles/style"
import AppColors from "utils/colors"
import { AddBtnContainer, ButtonItemContainer, FormItemContainer, SettingsInput, WithErrorDiv } from "../form/settingsInput"
import AddMember from "./actions/addmember"
import ViewMember from "./actions/viewmembers"
import { PersonFormDiv } from "./style"
import ErrorMessage from "components/common/ErrorMessage"
import { changePassword } from "services/userService"
import cogoToast from "cogo-toast"

function PersonalTab() {
	const [loading, setLoading] = useState(false)
	const { handleToggleContact, handleToggleImportContact } = useToggleContact()

	const formik = useFormik({
		initialValues: {
			oldPassword: "",
			newPassword: "",
			confirm_newPassword: ""
		},

		onSubmit: async (data, helpers) => {
			let payload = { ...data }
			delete payload.confirm_newPassword
			setLoading(true)
			try {
				const result = await changePassword(payload)
				if (result?.status === 200) {
					setLoading(false)
					helpers.setSubmitting(false)
					cogoToast.success(`${result?.data}`, { hideAfter: 5 })
					helpers.resetForm()
				}

				if (result.response.data) {
					cogoToast.error(`${result.response.data.errors[0].message}`, { hideAfter: 5 })
					setLoading(false)
					helpers.setSubmitting(false)
				} else if (!result.response) {
					setLoading(false)
					helpers.setSubmitting(false)
					cogoToast.error("Network Error", { hideAfter: 5 })
				}
			} catch (error) {
				console.log(error)
				if (error) {
					setLoading(false)
					helpers.setSubmitting(false)
					// cogoToast.error("Network Error", { hideAfter: 5 })
				}
			}
		},
		validationSchema: Yup.object({
			oldPassword: Yup.string().min(8).max(255).required("Old password is required."),
			newPassword: Yup.string().min(8).max(255).required("New Password is required."),
			confirm_newPassword: Yup.string()
				.oneOf([Yup.ref("newPassword"), null], "Confirm Password must match New Password")
				.required("Confirm Password is required.")
		})
	})
	return (
		<PersonFormDiv>
			<AddMember />
			<ViewMember />
			<form onSubmit={formik.handleSubmit}>
				<KreativeP fw="bold" fs="18px" mt="20px">
					Change Password
				</KreativeP>
				<FormItemContainer>
					<KreativeP mb="-3px" color={AppColors.blackish}>
						Old password
					</KreativeP>
					<WithErrorDiv>
						<SettingsInput
							w="100%"
							type="password"
							disabled={loading}
							id="oldPassword"
							error={formik.touched.oldPassword && formik.errors.oldPassword}
							name="oldPassword"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.oldPassword}
						/>
						<ErrorMessage mt="5px" error={formik.errors.oldPassword} visible={formik.touched.oldPassword} />
					</WithErrorDiv>
				</FormItemContainer>
				<FormItemContainer>
					<KreativeP mb="-3px" color={AppColors.blackish}>
						New password
					</KreativeP>
					<WithErrorDiv>
						<SettingsInput
							w="100%"
							type="password"
							disabled={loading}
							error={formik.touched.newPassword && formik.errors.newPassword}
							name="newPassword"
							id="newPassword"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.newPassword}
						/>
						<ErrorMessage mt="5px" error={formik.errors.newPassword} visible={formik.touched.newPassword} />
					</WithErrorDiv>
				</FormItemContainer>
				<FormItemContainer>
					<KreativeP mb="-3px" color={AppColors.blackish}>
						Confirm password
					</KreativeP>
					<WithErrorDiv>
						<SettingsInput
							w="100%"
							type="password"
							disabled={loading}
							error={formik.touched.confirm_newPassword && formik.errors.confirm_newPassword}
							name="confirm_newPassword"
							id="confirm_newPassword"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.confirm_newPassword}
						/>
						<ErrorMessage mt="5px" error={formik.errors.confirm_newPassword} visible={formik.touched.confirm_newPassword} />
					</WithErrorDiv>
				</FormItemContainer>
				<ButtonItemContainer>
					<KreativeP color={AppColors.blackish} fw="bold" mb="-3px">
						Add a team member
					</KreativeP>
					<KButton type="button" bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} onClick={handleToggleContact}>
						Add member
					</KButton>
				</ButtonItemContainer>
				<ButtonItemContainer>
					<KreativeP color={AppColors.blackish} fw="bold" mb="-3px">
						View team members
					</KreativeP>
					<KButton type="button" bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} onClick={handleToggleImportContact}>
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
					<KButton type="button" bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="170px">
						Delete Account
					</KButton>
				</AddBtnContainer>
				<Div width="100%" display="flex" justify="center" mt="30px" mb="50px">
					<KButton
						// disabled={loading}
						type="submit"
						bc={AppColors.brandColor}
						p="7px 20px"
						br="50px"
						color={AppColors.white}
						w="150px"
					>
						{loading ? "Loading..." : "Save Changes"}
					</KButton>
				</Div>
			</form>
		</PersonFormDiv>
	)
}

export default PersonalTab
