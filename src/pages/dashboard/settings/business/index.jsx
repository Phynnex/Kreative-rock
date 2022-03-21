import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Div, KButton, KreativeP } from "globalStyles/style"
import AppColors from "utils/colors"
import { FormItemContainer, SettingsInput } from "../form/settingsInput"
import { BusiCertDiv, BusinessCertImg, BusinessInfoContainer, UploadCertDiv } from "./style"
import uploadCert from "assets/images/uploadwhite.svg"

function BusinessTab() {
	const formik = useFormik({
		initialValues: {
			name: "",
			address: "",
			website: "",
			email: ""
		},

		onSubmit: async data => {
			// setLoading(true)
			// handleCreateSendId(data)
			console.log("|||||||||||||| Send Id", data)
			setTimeout(() => {
				// setLoading(false)
			}, 5000)
		},
		validationSchema: Yup.object({
			name: Yup.string().max(40).required("sender Id is required."),
			address: Yup.string().max(50).required("Category is required."),
			website: Yup.string().max(50).required("Category is required."),
			email: Yup.string().max(50).required("Category is required.")
		})
	})

	return (
		<BusinessInfoContainer onSubmit={formik.handleSubmit}>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Name
				</KreativeP>
				<SettingsInput type="text" error={formik.touched.name && formik.errors.name} name="name" id="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Email Address
				</KreativeP>
				<SettingsInput type="email" error={formik.touched.email && formik.errors.email} name="email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Address
				</KreativeP>
				<SettingsInput
					type="text"
					error={formik.touched.address && formik.errors.address}
					name="address"
					id="address"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.address}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Website
				</KreativeP>
				<SettingsInput
					type="website"
					error={formik.touched.website && formik.errors.website}
					name="website"
					id="website"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.website}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Upload Company Registration Certificate
				</KreativeP>
				<UploadCertDiv>
					<KreativeP color={AppColors.mutedGrey} mt="20px">
						No file selected
					</KreativeP>
					{/* <UploadInput type="text" name="hello" placeholder="Attachments" /> */}
					<BusiCertDiv>
						<BusinessCertImg src={uploadCert} alt="attach cert" />{" "}
						<KreativeP mt="20px" color={AppColors.white}>
							Choose File
						</KreativeP>
					</BusiCertDiv>
				</UploadCertDiv>
			</FormItemContainer>

			<Div width="100%" display="flex" justify="center" mt="40px" mb="50px">
				<KButton type="submit" bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="150px">
					Save Changes
				</KButton>
			</Div>
		</BusinessInfoContainer>
	)
}

export default BusinessTab
