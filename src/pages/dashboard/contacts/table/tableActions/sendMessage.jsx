import React from "react"
import { KreativeP, KButton, Div, Img, KTextArea } from "globalStyles/style"
import closebtn from "assets/images/cancel.svg"
import AppColors from "utils/colors"
import styled from "styled-components"
import media from "utils/media"


const VerifyFormContainer = styled.div`
	width: 30%;
	height: 50%;
	background: #ffffff;
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
	margin-top: 30px;
	display: flex;
	justify-content: flex-end;
`

function SendMessage({ loading, onContinue, loadingText, closeform, ref }) {
	return (
		<VerifyFormContainer>
			<Div width="100%" display="flex" justify="flex-end">
				<KButton 
					w="40px"
				 	h="40px" 
					r="50%" 
					ref={ref} 
					bc="transparent" 
					color={AppColors.brandColor}
					onClick={!loading && closeform} 
					disabled={loading}
				>
					<Img 
						width="15px" 
						height="15px"
						src={closebtn} 
						alt="Close Verification" 
					/>
				</KButton>
			</Div>

			<Div width="100%">
				<KreativeP tAlign=" left">+2347034390904</KreativeP>
			</Div>
            < KTextArea
				border={AppColors.green}
				h="100%"
				br="8px"
				p="10px"
				color={AppColors.grey}

			>

                Enter Message Here
            </KTextArea>

			<BtnContainer>
				<KButton 
					w="25%" 
					br="8px" 
					p="10px 0px" 
					border={AppColors.brandColor} 
					bc={AppColors.brandColor} 
					color={AppColors.white} 
					disabled={loading} 
					onClick={!loading && onContinue}
				>
					{loading ? loadingText : "SEND"}
				</KButton>
			</BtnContainer>
			
		</VerifyFormContainer>
	)
}

export default SendMessage;
