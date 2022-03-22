// import { checkedIcon, uncheckedIcon } from "components/socialicons"
import React from "react"

import { KeyButton, KeywordActionArea, KeywordBody } from "./style"

function UserKeyword({ text, edit, auto, renew, deleteKey, handleChange }) {
	return (
		<KeywordBody>
			<p>{text}</p>
			<KeywordActionArea>
				{/* <CheckBoxDiv>
					<CustomCheckBox2 value={auto} handleCheck={handleChange} checkedSrc={auto ? checkedIcon : uncheckedIcon} />
					<label for="auto">Auto</label>
				</CheckBoxDiv> */}
				{/* <KeyButton onClick={edit}>Edit</KeyButton> */}
				<KeyButton bg="#00CCA7" onClick={renew}>
					RENEW
				</KeyButton>
				<KeyButton onClick={deleteKey}>Delete</KeyButton>
			</KeywordActionArea>
		</KeywordBody>
	)
}

export default UserKeyword
