import React from "react"
import styled from "styled-components/macro"

const SwitchWrapper = styled.label`
	position: relative;
`
const SwitchInput = styled.input`
	position: absolute;
	left: -9999999px;
	top: -9999px;
	&:checked + span {
		background-color: #ff7900;
		&:before {
			left: calc(97%);
			transform: translateX(-100%);
			background: #ffffff;
			width: 23px;
			height: 23px;
			border-radius: 60px;
			top: 0.18px;
			z-index: 10;
		}
	}
`
const SwitchSlider = styled.span`
	display: flex;
	cursor: pointer;
	width: 66px;
	height: 25px;
	/* border-radius: 100px; */
	border-radius: 30px;
	background-color: #e7e7e7;
	position: relative;
	transition: background-color 0.2s;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

	&:before {
		content: "";
		position: absolute;
		top: 1px;
		left: 2px;
		width: 23px;
		height: 23px;
		border-radius: 45px;
		transition: 0.2s;
		background: #fff;
		z-index: 10;
		/* box-shadow: */
	}
	&:active:before {
		width: 35px;
		background: #ff7900;
	}
`
function ToggleSwitch({ handleSwitch, checkedVal }) {
	return (
		<SwitchWrapper>
			<SwitchInput type="checkbox" onChange={handleSwitch} value={checkedVal} />
			<SwitchSlider />
		</SwitchWrapper>
	)
}

export default ToggleSwitch
