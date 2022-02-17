import React from "react"
import { AutoResSelect } from "./style"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"

function CustomSelectAutoresponse({ value, onChange, name, ...rest }) {
	return (
		<AutoResSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option value={value}>Keyword list</option>
				<option value="">Keyword list</option>
				<option value="">Keyword list</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectAutoresponse
