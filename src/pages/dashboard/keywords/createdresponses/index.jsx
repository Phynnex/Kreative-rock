import { Div } from "globalStyles/style"
import React from "react"
import { KeyButton } from "../userkeywords/style"
import { CreatedBody } from "./style"

function UserCreatedResponse({ text, trial, buy }) {
	return (
		<CreatedBody>
			<p>{text}</p>
			<Div display="flex" alignI="center">
				<KeyButton bg="#00CCA7" onClick={trial}>
					Trial
				</KeyButton>
				<KeyButton onClick={buy}>Buy</KeyButton>
			</Div>
		</CreatedBody>
	)
}

export default UserCreatedResponse
