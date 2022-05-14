import React, { useEffect, useState } from "react"
import CustomSelectPayment from "../custom_pselect"
import CustomPayInput from "./customPayInput"
import { BottomFormItems, PayFormBody, PayFormButton, PayFormContainer, PayFormLeft } from "./style"
import { PaystackButton } from 'react-paystack'
import { useFormik } from "formik"
import { useAuthContext } from "context/AuthContext"
import { makePayment } from "services/paymentService"
import cogoToast from "cogo-toast"

function PaynowForm() {
	const { user } = useAuthContext()
	const [paymentChannel, setPaymentChannel] = useState('paystack')
	const [amount, setAmount] = useState(0)
	const [onPaymentSuccess, setOnPaymentSuccess] = useState(false)
	const amountPerUnit = 2

	const publicKey = "pk_test_84b3767aee8c1415ddff028d4f5ee66640fc9d5e"

	const componentProps = {
		email: user?.data?.user?.profile?.personalInformation?.email,
		amount: `${amount}`,
		metadata: {
			name: user?.data?.user?.profile?.personalInformation?.fullname,
			phone: user?.data?.user?.profile?.personalInformation?.phoneNumber,
		},
		publicKey,
		text: "Pay with Paystack",
		onSuccess: () => setOnPaymentSuccess(true),
		onClose: () => setOnPaymentSuccess(false),
	}

	console.log(onPaymentSuccess)

	const handleSelectPaymentMethod = (value) => {
		console.log(value)
		if (value === 'NG' || value === '') {
			setPaymentChannel('paystack')
		} else {
			setPaymentChannel('flutterwave')
		}
	}


	useEffect(() => {
		handlePayment()
		// eslint-disable-next-line
	}, [onPaymentSuccess])


	const handlePayment = async () => {
		try {
			if (onPaymentSuccess) {
				const param = {
					customerEmail: user?.data?.user?.profile?.personalInformation?.email,
					amountDue: amount
				}
				console.log(param)
				const response = await makePayment(param)
				console.log(response)
				if (response.status) {
					cogoToast.success("Payment submitted successfully. Your unit will be topped")
				} else {
					cogoToast.ward("Failed to subbmit payment")
				}
			}
		} catch (err) {
			cogoToast.ward("Something went wrong")
		}
	}




	const renderPaymentButton = () => {
		if (paymentChannel === 'paystack') {
			return (
				<PaystackButton
					{...componentProps}
					style={{ background: '#ff7900', border: '1px solid gray' }}
				/>
			)
		}

		if (paymentChannel === 'flutterwave') {
			return (
				<div>Pay with Flutterwav</div>
			)
		}
	}

	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			phone: '',
			countryCode: '',
			purchaseQuantity: ''
		},
		onSubmit: (values) => { }
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
						value={user?.data?.user?.profile?.personalInformation?.email}
					/>
				</PayFormLeft>
				<PayFormLeft>
					<CustomSelectPayment
						name="countryCode"
						label="Country"
						placeholder="Select Country"
						value={formik.values.countryCode}
						onChange={formik.handleChange}
						onMouseUp={(e) => handleSelectPaymentMethod(e.target.value)}
					/>
					<CustomPayInput
						type="number"
						label="Purchase Quantity"
						name="purchaseQuantity"
						value={formik.values.purchaseQuantity}
						onChange={formik.handleChange}
						onKeyUp={e => setAmount(Number(amountPerUnit * e.target.value * 100))}
					/>
				</PayFormLeft>
			</PayFormContainer>
			<PayFormContainer>
				<BottomFormItems>
					<CustomPayInput label="CARD NUMBER" placeholder="0315237478332" />
				</BottomFormItems>
				<BottomFormItems>
					{/* <CustomPayInput label="Number" placeholder="0315237478332" /> */}
					<PayFormButton type="submit">
						{renderPaymentButton()}
					</PayFormButton>
				</BottomFormItems>
			</PayFormContainer>

		</PayFormBody>
	)
}

export default PaynowForm
