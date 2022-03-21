import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { SenderIdSelect } from "./twoWaySelect"

function CustomSelectIdTwo({ value, onChange, name, ...rest }) {
	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option value={value}>User create Id 1</option>
				<option value="">User create Id 2</option>
				<option value="">User create Id 3</option>
				<option value="">User create Id 4</option>
				<option value="">Kenya</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}

export default CustomSelectIdTwo

export function CustomSelectRecipient({ value, onChange, name, ...rest }) {
	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option value={value}>User create Id 1</option>
				<option value="">Recipients 2</option>
				<option value="">Recipients 3</option>
				<option value="">Recipients 4</option>
				<option value="">Recipients</option>
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}
