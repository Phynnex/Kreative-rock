import { Div, KButton, KreativeP } from "globalStyles/style"
import React from "react"
import AppColors from "utils/colors"
import { FormItemContainer, SettingsInput } from "../form/settingsInput"
import { BusiCertDiv, BusinessCertImg, BusinessInfoContainer, UploadCertDiv } from "./style"
import uploadCert from "assets/images/uploadwhite.svg"

function BusinessTab() {
	return (
		<BusinessInfoContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Name
				</KreativeP>
				<SettingsInput
					type="text"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Email Address
				</KreativeP>
				<SettingsInput
					type="email"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Address
				</KreativeP>
				<SettingsInput
					type="text"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
				/>
			</FormItemContainer>
			<FormItemContainer>
				<KreativeP mb="-3px" color={AppColors.blackish}>
					Business Website
				</KreativeP>
				<SettingsInput
					type="website"
					//   error={touched.discount && errors.discount}
					//   name="discount"
					//   onBlur={() => setFieldTouched('discount')}
					//   onChange={handleChange('discount')}
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
				<KButton bc={AppColors.brandColor} p="7px 20px" br="50px" color={AppColors.white} w="150px">
					Save Changes
				</KButton>
			</Div>
		</BusinessInfoContainer>
	)
}

export default BusinessTab
