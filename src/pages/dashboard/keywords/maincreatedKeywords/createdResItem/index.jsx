import { Div } from "globalStyles/style"
import React from "react"
import { CreatedBody } from "../../createdresponses/style"
import { KeyButton } from "../../userkeywords/style"

function MainCreatedResponse({ text, trial, buy }) {
	return (
		<CreatedBody>
			<p>{text}</p>
			<Div display="flex" alignI="center">
				<KeyButton bg="#00CCA7" onClick={trial}>
					Free Trial
				</KeyButton>
				<KeyButton onClick={buy}>Buy</KeyButton>
			</Div>
		</CreatedBody>
	)
}

export default MainCreatedResponse
