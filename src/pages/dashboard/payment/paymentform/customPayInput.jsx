import React from "react"
import styled from "styled-components/macro"
import AppColors from "utils/colors"

const CustomPInputDiv = styled.div`
	width: 100%;
	height: 74.5px;
	display: flex;
	flex-direction: column;
	label {
		color: #303030;
	}
	/* background-color: #ffffff; */
`
const SpecialInput = styled.input`
	width: 100%;
	height: 90%;
	border: none;
	outline: none;
	color: #a4a4a4;
	appearance: none;
	background: transparent;
	border-bottom: 1px solid #e2e2e2;
	::active {
		border-bottom: 1px solid ${AppColors.brandColor};
	}
	::focus {
		border-bottom: 1px solid ${AppColors.brandColor};
	}
	::placeholder {
		color: #a4a4a4;
	}
`

function CustomPayInput({ name, label, value, type = "text", onChange, ...rest }) {
	return (
		<CustomPInputDiv>
			<label htmlFor={name}>{label}</label>
			<SpecialInput {...rest} onChange={onChange} name={name} type={type} value={value} />
		</CustomPInputDiv>
	)
}

export default CustomPayInput
