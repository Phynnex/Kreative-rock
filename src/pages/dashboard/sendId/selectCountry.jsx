import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { AutoResSelect } from "../autoresponse/addform/style"

function CustomSelectCountry({ value, onChange, name, ...rest }) {
	return (
		<AutoResSelect>
			<select value={value} onChange={onChange} name={name} {...rest}>
				<option value="" disabled selected>
					Select Category
				</option>
				<option value="Transactional">Transactional</option>
				<option value="Promotional">Promotional</option>
				<option value="Both">Both</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectCountry
