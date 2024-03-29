import React from "react"
import { KreativeP, KButton, Div } from "globalStyles/style"
import AppColors from "utils/colors"
import styled from "styled-components"
import media from "utils/media"


const VerifyFormContainer = styled.div`
	width: 20%;
	height: 50%;
	background: #ecf4f7;
	display: flex;
	flex-direction: column;
	padding: 25px;
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
	// margin-top: 30px;
	display: flex;
	justify-content: flex-end;
`

function ViewContact({ loading, onContinue, loadingText, closeform, ref, detail }) {
	return (
		<VerifyFormContainer>
			<Div 
				width="100%" 
				display="flex"
				fd="column"
				justify="center"
			>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">First Name :</KreativeP>
					<KreativeP ml="12px">{detail?.firstName}</KreativeP>
				</Div>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">Last Name :</KreativeP>
					<KreativeP ml="12px">{detail?.lastName}</KreativeP>

				</Div>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">Email :</KreativeP>
					<KreativeP ml="12px">{detail?.email}</KreativeP>
				</Div>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">Phone Number :</KreativeP>
					<KreativeP ml="12px">{detail?.phoneNumber}</KreativeP>
				</Div>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">Job Title:</KreativeP>
					<KreativeP ml="12px">{detail?.jobTitle}</KreativeP>
				</Div>
				<Div 
					display="flex"
					mb="8px"
				>
					<KreativeP tAlign=" left" fw="bold">Location:</KreativeP>
					<KreativeP ml="12px">{detail?.location}</KreativeP>
				</Div>
				
			</Div>

			<BtnContainer>
				<KButton 
					w="25%" 
					br="8px" 
					p=" 0px" 
					border={AppColors.brandColor} 
					bc={AppColors.brandColor} 
					color={AppColors.white} 
					disabled={loading} 
					onClick={!loading && closeform} 

				>
					{loading ? loadingText : "Close"}
				</KButton>
			</BtnContainer>
			
		</VerifyFormContainer>
	)
}

export default ViewContact;
