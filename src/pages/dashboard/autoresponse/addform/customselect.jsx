import React from "react"
import { AutoResSelect } from "./style"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"

function CustomSelectAutoresponse({ value, onChange, name, ...rest }) {
	return (
		<AutoResSelect>
			<select onChange={onChange} value={value} name={name} {...rest}>
				<option value="">Select Keyword</option>
				<option value="dshbdsbhbs">Keyword list</option>
				<option value="dshdshbhd">Keyword list</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectAutoresponse
