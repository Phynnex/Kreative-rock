import { useAuthContext } from "context/AuthContext"
import { useToggleContact } from "context/ContactActionsContext"

import React, { useState } from "react"
import { DVerifyBtn, VerifyAccount, VerifyEmailInput } from "./style"
import axios from 'axios';
import { baseUrl } from 'routes/backendroutes';
import cogoToast from 'cogo-toast';
import { CircularProgress } from '@material-ui/core';
//import { useHistory } from 'react-router-dom';

function VerifyAccountInput() {
	//let history = useHistory();
	const { user } = useAuthContext()
	const { handleToggleContact } = useToggleContact()


	const [phone, setPhone] = useState()
	const [loading, setLoading] = useState(false)


	const userToken = user?.data?.token


	const handleVerifyPhoneNumber = () => {
		setLoading(true)
		
		if (phone !== '') {
			const url = `${baseUrl}/user/auth/resend-verification-code`
			const headers = { 'Authorization': `Bearer ${userToken}` }

			axios.post(url, { headers }).then(res => {
				setLoading(false)				
				handleToggleContact()
			}).catch(error => {
				setLoading(false)
				cogoToast.error("Something went wrong. Please try again!!")
				handleToggleContact()
			})
		}
	}

	return (
		<>
			<p style={{ marginBottom: "4px" }}>Enter your Phone Number for verification</p>
			<VerifyAccount>
				<VerifyEmailInput
					placeholder="Enter your phone number"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<DVerifyBtn
					onClick={handleVerifyPhoneNumber}
				>
					Verify
					{loading &&
						<span style={{ marginLeft: '5px' }}>
							<CircularProgress size={20} style={{ color: 'white' }} />
						</span>
					}
				</DVerifyBtn>
			</VerifyAccount>
		</>
	)
}

export default VerifyAccountInput
