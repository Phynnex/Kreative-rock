import React from "react"
import { KreativeP, KButton, Div, Img } from "globalStyles/style"
import closebtn from "assets/images/cancel.svg"
import { BtnContainer, VerifyFormContainer } from "./style"
import AppColors from "utils/colors"

function ConfirmAction({ loading, onCancel, onContinue, loadingText, label, closeform, ref }) {
	return (
		<VerifyFormContainer>
			<Div width="100%" display="flex" justify="flex-end">
				<KButton w="40px" h="40px" br="50%" ref={ref} bc="transparent" onClick={!loading && closeform} disabled={loading}>
					<Img width="15px" height="15px" src={closebtn} alt="Close Verification" />
				</KButton>
			</Div>

			<Div width="100%" mt="10px">
				<KreativeP tAlign="center">{label ? label : "Are you sure, you want to verify this Account?"}</KreativeP>
			</Div>
			<BtnContainer>
				<KButton w="45%" p="10px 0px" br="3px" bc={AppColors.newsLetterBg} border={AppColors.newsLetterBg} color={AppColors.white} disabled={loading} onClick={!loading && closeform}>
					Cancel
				</KButton>
				<KButton w="45%" br="3px" p="10px 0px" border={AppColors.brandColor} bc={AppColors.brandColor} color={AppColors.white} disabled={loading} onClick={!loading && onContinue}>
					{loading ? loadingText : "Continue"}
				</KButton>
			</BtnContainer>
		</VerifyFormContainer>
	)
}

export default ConfirmAction
