import React, { useEffect, useState } from "react"
import CustomSelectPayment from "../custom_pselect"
import CustomPayInput from "./customPayInput"
import { BottomFormItems, PayFormBody, PayFormButton, PayFormContainer, PayFormLeft } from "./style"
import { PaystackButton } from 'react-paystack'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useFormik } from "formik"
import { useAuthContext } from "context/AuthContext"
import { makePayment } from "services/paymentService"
import cogoToast from "cogo-toast"

function PaynowForm() {
	const { user } = useAuthContext()
	const [amount, setAmount] = useState()
	const [onPaystackPaymentSuccess, setOnPaystackPaymentSuccess] = useState(false)
	const [onFlutterwavePaymentSuccess, setOnFlutterwavePaymentSuccess] = useState(false)

	const publicKey = "pk_live_1e105f5cccc44742e89176e056ba648c6ea0ff20"

	const componentProps = {
		email: user?.data?.user?.profile?.personalInformation?.email,
		amount: amount * 100,
		metadata: {
			name: user?.data?.user?.profile?.personalInformation?.fullname,
			phone: user?.data?.user?.profile?.personalInformation?.phoneNumber,
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () => setOnPaystackPaymentSuccess(true),
		onClose: () => setOnPaystackPaymentSuccess(false),
	}


	const config = {
		public_key: 'FLWPUBK-9cb2df7832b406d5568bb7a366f723d2-X',
		tx_ref: Date.now(),
		amount: amount,
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
			email: user?.data?.user?.profile?.personalInformation?.email,
			phonenumber: user?.data?.user?.profile?.personalInformation?.phoneNumber,
			name: user?.data?.user?.profile?.personalInformation?.fullname,
		},
		customizations: {
			title: 'Top your wallet',
			description: 'Payment for items in cart',
			// logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
	};


	const fwConfig = {
		...config,
		text: 'Pay Now',
		callback: (response) => {
			setOnFlutterwavePaymentSuccess(true)
			console.log(response);
			closePaymentModal() // this will close the modal programmatically
		},
		onClose: () => {
			setOnFlutterwavePaymentSuccess(false)
		},
	};


	useEffect(() => {
		handlePaystackPayment()
		// eslint-disable-next-line
	}, [onPaystackPaymentSuccess, onFlutterwavePaymentSuccess])


	const handlePaystackPayment = async () => {
		try {
			if (onPaystackPaymentSuccess || onFlutterwavePaymentSuccess) {
				console.log(`paystack: ${onPaystackPaymentSuccess}`)
				console.log(`paystack: ${onFlutterwavePaymentSuccess}`)

				const param = {
					customerEmail: user?.data?.user?.profile?.personalInformation?.email,
					amountDue: amount
				}
				const response = await makePayment(param)
				console.log(response)

				if (response.status) {
					cogoToast.success("Payment submitted successfully")
				} else {
					cogoToast.ward("Failed to subbmit payment")
				}
			}
		} catch (err) {
			cogoToast.ward("Something went wrong")
		}
	}


	const formik = useFormik({
		initialValues: {
			countryCode: '',
			amount: ''
		},
		//onSubmit: (values) => { handleSubmit(values) }
	})


	return (
		<PayFormBody onSubmit={formik.handleSubmit}>
			<PayFormContainer>
				<PayFormLeft>
					<CustomPayInput
						type="text"
						label="NAME"
						placeholder="Fullname"
						value={user?.data?.user?.profile?.personalInformation?.fullname}
					/>
					<CustomPayInput
						type="email"
						label="EMAIL"
						placeholder="Email"
						value={user?.data?.user?.profile?.personalInformation?.email}
					/>
					<CustomPayInput
						label="Number"
						type='tel'
						placeholder="Phone Number"
						value={user?.data?.user?.profile?.personalInformation?.phoneNumber}
					/>
				</PayFormLeft>
				<PayFormLeft>
					<CustomSelectPayment
						name="countryCode"
						label="Country"
						placeholder="Select Country"
						value={formik.values.countryCode}
						onChange={formik.handleChange}
					/>
					<CustomPayInput
						type="number"
						label="Purchase Amount"
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</PayFormLeft>
			</PayFormContainer>
			<PayFormContainer>
				<BottomFormItems>
					<div style={{ display: "flex", alignItems:'center' }}>
						<PayFormButton type="submit">
							<PaystackButton
								{...componentProps}
							/>
						</PayFormButton>
						<div style={{marginLeft:'10px'}}>Local Only</div>
					</div>

					<div style={{ display: "flex", alignItems:'center' }}>
						<PayFormButton type="submit">
							<FlutterWaveButton
								{...fwConfig}
							/>
						</PayFormButton>
						<div style={{marginLeft:'10px'}}>Local & International</div>
					</div>
				</BottomFormItems>
			</PayFormContainer>

		</PayFormBody>
	)
}

export default PaynowForm
