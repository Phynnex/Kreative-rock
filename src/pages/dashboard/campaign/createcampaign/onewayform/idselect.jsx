import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { SenderIdSelect } from "./cselectStyles"

function CustomSelectId({ value, onChange, name, ...rest }) {
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

export default CustomSelectId
