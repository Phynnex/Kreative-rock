import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { AutoResSelect } from "../autoresponse/addform/style"

function CustomSelectCountry({ value, onChange, name, ...rest }) {
	return (
		<AutoResSelect>
			<select value={value} onChange={onChange} name={name} {...rest}>
				<option value="" disabled>
					Country
				</option>
				<option value="nigeria">Nigeria</option>
				<option value="ghana">Ghana</option>
				<option value="south-africa">South Africa</option>
				<option value="kenya">Kenya</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectCountry
