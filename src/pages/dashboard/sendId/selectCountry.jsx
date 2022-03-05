import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { AutoResSelect } from "../autoresponse/addform/style"

function CustomSelectCountry({ value, onChange, name, ...rest }) {
	return (
		<AutoResSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option value={value}>Country</option>
				<option value="">Nigeria</option>
				<option value="">Ghana</option>
				<option value="">South Africa</option>
				<option value="">Kenya</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectCountry
