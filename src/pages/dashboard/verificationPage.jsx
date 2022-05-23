import React from 'react';
import styled from 'styled-components';
import AppColors from "utils/colors"
import signin from "assets/images/signin.png"
import logo from "assets/images/logoimg.png"
import media from "utils/media"


import { KButton } from 'globalStyles/style';

const VerificationContainer = styled.div `
    display: flex;
    justify-content: space-around;
  
`

const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TextDiv = styled.div`
    text-align: center;
`

const VerifyTittle = styled.p`
    color: "#27AE60";
    font-size: 52px;
`

const VerifySubtittle = styled.p`
    color: #000;
    width: 400px;
    margin-bottom: 50px;
`

const InputDiv = styled.div`
    width: 100%
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`

const Input = styled.input`
    border: 1px solid ${AppColors.green};
    width: 64px;
    height: 64px;
    border-radius : 8px;

`
const FooterText = styled.p`
    margin-top: 30px;
    text-align:center;
`

const Right = styled.div`
display: flex;
flex-direction: column;

${media.tablet`
  display:none;
`}
${media.mobile`
display:none;
`}
`

const verificationPage = () => {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <VerificationContainer>
            <Left>
                <InputArea>
                    <TextDiv>
                        <VerifyTittle>Email Verification</VerifyTittle>
                        <VerifySubtittle>Verification code has been sent to your email. Code is valid for 15 minutes.</VerifySubtittle>
                    </TextDiv>
                    
                    <InputDiv>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Input/>
                    </InputDiv>
                    <KButton
                        type="submit"
                        p="7px 45%"
                        mt="50px"
                        bc={AppColors.brandColor}
                        color={AppColors.white}
                        br="4px"
                    
                    >
                        Verify
                    </KButton>
                    <FooterText>Didn’t receive any code? <b>Resend code</b></FooterText>
                </InputArea>
                
            </Left>
         
            <Right>
				<img src={logo} alt="logo" width="600px" height="120px" />
                <img src={signin} alt= "verify" width="640px" height="490px"/>
            </Right>
            
        </VerificationContainer>
        </>
    )
    
}



export default verificationPage;