import React from "react"
// import { CountrySelect } from "./style"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { CountrySelect } from "./style"

function CustomSelectCountryCode({ value, onChange, name, ...rest }) {
	return (
		<CountrySelect>
			<select onChange={onChange} value={value} name={name} {...rest}>
				<option value="">+234</option>
				<option value="+234">+234</option>
				<option value="+254">+254</option>
				<option value="+233">+233</option>
				<option value="+27">+27</option>
			</select>
			<div>
				<Img width="15px" height="15px" src={fsjhf} alt="select" />
			</div>
		</CountrySelect>
	)
}

export default CustomSelectCountryCode
