import { Img } from "globalStyles/style"
import React from "react"
import { RefCardBody } from "./style"

function RefCard({ text, icon }) {
	return (
		<RefCardBody>
			<Img src={icon} alt="Referal Icons" />
			<p>{text}</p>
		</RefCardBody>
	)
}

export default RefCard
