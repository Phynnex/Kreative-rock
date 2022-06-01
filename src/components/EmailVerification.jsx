import React, { useState } from 'react';
import styled from 'styled-components';
import AppColors from "utils/colors"
import signin from "assets/images/signin.png"
import logo from "assets/images/logoimg.png"
import media from "utils/media"
import { useFormik } from "formik"
import * as Yup from 'yup'


import { Img, KButton } from 'globalStyles/style';
import { useAuthContext } from 'context/AuthContext';
import axios from 'axios';
import { baseUrl } from 'routes/backendroutes';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import cogoToast from 'cogo-toast';
import { CircularProgress } from '@material-ui/core';

const VerificationContainer = styled.form`
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
    text-align:center

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

const EmailVerification = () => {
    const history = useHistory()
    const { user } = useAuthContext()

    const [loading, setLoading] = useState(false)
    const [loadingCode, setLoadingCode] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)
        const combine = Object.values(values).join('')
        const url = `${baseUrl}/user/profile/verify-email`
        const headers = { 'Authorization': `Bearer ${user.token}` }

        axios.post(url, null, { headers }).then(res => {
            setLoading(false)
            cogoToast.success("Verification Successfull")

            setInterval(() => {
                history.push("/sign-in")
            }, 2000)
        }).catch(error => {
            setLoading(false)
            cogoToast.warn("Verification Failed")
        })
    }


    const handleResendCode = () => {
        setLoadingCode(true)
        const url = `${baseUrl}/user/auth/resend-verification-code`
        const headers = { 'Authorization': `Bearer ${user.token}` }

        axios.post(url, null, { headers }).then(res => {
            setLoadingCode(false)
            cogoToast.success("Sent Verification Code")

        }).catch(error => {
            setLoadingCode(false)
            cogoToast.warn("Failed to send verification code")
        })
    }


    const formik = useFormik({
        initialValues: {
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            p5: "",
            p6: "",
        },
        validationSchema: Yup.object({
            p1: Yup.string().required(""),
            p2: Yup.string().required(""),
            p3: Yup.string().required(""),
            p4: Yup.string().required(""),
            p5: Yup.string().required(""),
            p6: Yup.string().required("")
        }),
        onSubmit: (values) => { handleSubmit(values) }
    })

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <VerificationContainer onSubmit={formik.handleSubmit}>
                <Left>
                    <InputArea>
                        <TextDiv>
                            <VerifyTittle>Email Verification</VerifyTittle>
                            <VerifySubtittle>Verification code has been sent to your email. Code is valid for 15 minutes.</VerifySubtittle>
                        </TextDiv>

                        <InputDiv>
                            <Input
                                type="text"
                                name="p1"
                                value={formik.values.p1}
                                onChange={formik.handleChange}
                            />
                            <Input
                                type="text"
                                name="p2"
                                value={formik.values.p2}
                                onChange={formik.handleChange}
                            />
                            <Input
                                type="text"
                                name="p3"
                                value={formik.values.p3}
                                onChange={formik.handleChange}
                            />
                            <Input
                                type="text"
                                name="p4"
                                value={formik.values.p4}
                                onChange={formik.handleChange}
                            />
                            <Input
                                type="text"
                                name="p5"
                                value={formik.values.p5}
                                onChange={formik.handleChange}
                            />
                            <Input
                                type="text"
                                name="p6"
                                value={formik.values.p6}
                                onChange={formik.handleChange}
                            />
                        </InputDiv>
                        <KButton
                            type="submit"
                            p="7px 45%"
                            mt="50px"
                            bc={AppColors.brandColor}
                            color={AppColors.white}
                            br="4px"
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Verify
                                {loading &&
                                    <span style={{ marginLeft: '5px' }}>
                                        <CircularProgress size={20} style={{ color: 'white' }} />
                                    </span>
                                }
                            </div>
                        </KButton>
                        <FooterText>
                            Didn’t receive any code?
                            <b>
                                <button onClick={handleResendCode}>
                                    Resend code
                                    {loadingCode &&
                                        <span style={{ marginLeft: '5px' }}>
                                            <CircularProgress size={20} />
                                        </span>
                                    }
                                </button>
                            </b>
                        </FooterText>
                    </InputArea>

                </Left>

                <Right>
                    <Img src={logo} alt="logo" w="560px" h="180px" />
                    <Img src={signin} alt="verify" w="600px" h="600px" m="40px 0px 0px" />
                </Right>

            </VerificationContainer>
        </>
    )

}



export default EmailVerification;