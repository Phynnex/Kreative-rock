import { Button, CircularProgress } from "@material-ui/core"
import axios from "axios"
import { useAuthContext } from "context/AuthContext"
import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import React, { useState } from "react"
import { baseUrl } from "routes/backendroutes"
import { DVerifyBtn, VerifyAccount, VerifyEmailInput, VerifyFormDiv } from "./style"
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom';

function Verifycode() {
	let history = useHistory();
	const { user } = useAuthContext()
	const { stopPropagation, toggleContact, handleToggleContact } = useToggleContact()

	const [otp, setOtp] = useState()
	const [loading, setLoading] = useState(false)
	const [loadingResendOtp, setLoadingResendOtp] = useState(false)

	const userToken = user?.data?.token

	const handleSendOtp = () => {
		setLoading(true)

		if (otp !== '') {
			const url = `${baseUrl}/users/auth/verify-sms-otp`
			const headers = { 'Authorization': `Bearer ${userToken}` }

			const param = {
				otp: otp
			}

			axios.post(url, param, { headers }).then(res => {
				setLoading(false)
				handleToggleContact()
				cogoToast.success("Successfully activated")
				setInterval(() => {
					history.push('/dashboard/logout')
				}, 2000)
			}).catch(error => {
				setLoading(false)
				cogoToast.error('Incorrect Verification OTP')
			})
		}
	}


	const handleResendOtp = () => {
		setLoadingResendOtp(true)

		const url = `${baseUrl}/users/auth/resend-sms-otp`
		const headers = { 'Authorization': `Bearer ${userToken}` }
		axios.post(url, { headers }).then(res => {
			setLoadingResendOtp(false)
			cogoToast.success("Resent successfully")
		}).catch(error => {
			setLoadingResendOtp(false)
			cogoToast.error('Something went wrong')

		})
	}

	return (
		<CreateKeywordOverlay open={toggleContact} onClick={handleToggleContact}>
			<VerifyFormDiv onClick={stopPropagation}>
				<p>An OTP has been sent to your phone. <br />Enter the send OTP to activate.</p>
				<VerifyAccount>
					<VerifyEmailInput
						placeholder="Enter your OTP"
						value={otp}
						onChange={(e) => setOtp(e.target.value)}
					/>
					<DVerifyBtn
						onClick={handleSendOtp}
					>
						Activate
						{loading &&
							<span style={{ marginLeft: '-5px' }}>
								<CircularProgress size={20} style={{ color: 'white' }} />
							</span>
						}
					</DVerifyBtn>

					<div>
						<br />
						<Button
							variant="outlined"
							color="primary"
							onClick={handleResendOtp}
						>
							Resend OTP
							{loadingResendOtp &&
								<span style={{ marginLeft: '5px' }}>
									<CircularProgress size={20} />
								</span>
							}
						</Button>
					</div>
				</VerifyAccount>
			</VerifyFormDiv>
		</CreateKeywordOverlay>
	)
}

export default Verifycode
