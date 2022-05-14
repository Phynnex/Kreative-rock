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
				<option value="">Country Code</option>
				<option value="NG">+234</option>
				<option value="KE">+254</option>
				<option value="GH">+233</option>
			</select>
			<div>
				<Img width="15px" height="15px" src={fsjhf} alt="select" />
			</div>
		</PaymentSelect>
	)
}

export default CustomSelectPayment
