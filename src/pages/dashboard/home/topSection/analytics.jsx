import React from "react"
import { MTcardBody } from "./style"

import { Img, KButton, KreativeP } from "globalStyles/style"

function MobileTextingCard({ onClick, icon, textBolod, desc }) {
	return (
		<MTcardBody>
			<KButton onClick={onClick}>
				<Img src={icon} alt="Action Btn" />
			</KButton>
			<h5>{textBolod}</h5>
			<KreativeP mt="-5px">{desc}</KreativeP>
		</MTcardBody>
	)
}

export default MobileTextingCard
