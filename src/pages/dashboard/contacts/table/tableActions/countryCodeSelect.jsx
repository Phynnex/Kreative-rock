import React from "react"
// import { CountrySelect } from "./style"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { CountrySelect } from "../../formActions/style"




function CustomSelectCountryCode({ value, onChange, name, ...rest }) {
	return (
		<CountrySelect>
			<select onChange={onChange} value={value} name={name} {...rest}>
				<option value="">Country Code</option>
				<option value="NG">+234</option>
				<option value="KE">+254</option>
				<option value="GH">+233</option>
			</select>
			<div>
				<Img width="15px" height="15px" src={fsjhf} alt="select" />
			</div>
		</CountrySelect>
	)
}

export default CustomSelectCountryCode
