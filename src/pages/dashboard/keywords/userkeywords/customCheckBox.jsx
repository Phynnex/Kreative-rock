import { Div } from "globalStyles/style"
import React from "react"
import { CustomisedCheckInput, CheckImg, CustomCheckWrapper } from "./style"

function CustomCheckBox2({ handleCheck, checkedSrc, value }) {
	return (
		<CustomCheckWrapper>
			<CustomisedCheckInput type="checkbox" value={value} />
			<Div display="flex" alignI="center">
				<CheckImg src={checkedSrc} alt="Custom Check" w="20px" height="20px" onClick={handleCheck} />
			</Div>
		</CustomCheckWrapper>
	)
}

export default CustomCheckBox2
