import React from "react"
// import { CountrySelect } from "./style"
import fsjhf from "assets/images/payment_select.svg"
import { Img } from "globalStyles/style"
import { PaymentSelect } from "./paymentform/style"
// import { PaymentSelect } from "./style"

function CustomSelectPayment({ value, onChange, name, label, ...rest }) {
	return (
		<PaymentSelect>
			<select onChange={onChange} value={value} name={name} {...rest}>
				<option value="">Country</option>
				<option value="NG">Nigeria</option>
				<option value="KE">Kenya</option>
				<option value="GH">Ghana</option>
				<option value="SA">South Africa</option>
			</select>
			<div>
				<Img width="15px" height="15px" src={fsjhf} alt="select" />
			</div>
		</PaymentSelect>
	)
}

export default CustomSelectPayment
