import React from "react"
import { KreativeP, KButton, Div, Img } from "globalStyles/style"
import closebtn from "assets/images/cancel.svg"
import AppColors from "utils/colors"
import styled from "styled-components"
import media from "utils/media"


const VerifyFormContainer = styled.div`
	width: 25%;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 15px;
	box-shadow: 0px 0px 13px 1px rgba(63, 63, 68, 0.24), 0px 1px 3px rgba(63, 63, 68, 0.15);
	border-radius: 8px;
	${media.smallDesktopMinimum`
  width: 50%;
  `}
	${media.tablet`
  width: 50%;
  `}
	${media.mobile`
  width: 90%;
 
  
  `}
`

const BtnContainer = styled.div`
	width: 100%;
	height: 40px;
	bottom: 0px;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
`

function DeleteContact({ loading, onCancel, onContinue, loadingText, label, closeform, ref }) {
	return (
		<VerifyFormContainer>
			<Div width="100%" display="flex" justify="flex-end">
				<KButton w="40px" h="40px" br="50%" ref={ref} bc="transparent" onClick={!loading && closeform} disabled={loading}>
					<Img width="15px" height="15px" src={closebtn} alt="Close Verification" />
				</KButton>
			</Div>

			<Div width="100%" mt="10px">
				<KreativeP tAlign="center">{label ? label : "Are you sure, you want to delete this contact?"}</KreativeP>
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

export default DeleteContact;
