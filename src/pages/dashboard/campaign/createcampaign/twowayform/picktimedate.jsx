import React from "react"
import arrowdownIcon from "assets/images/arrowdown.svg"
import { SelectTimeBody, TimerBodyBtn, TimerBtn } from "./picktimeStyles"
import { Img } from "globalStyles/style"
function Picktimedate() {
	return (
		<SelectTimeBody>
			<TimerBodyBtn>
				<TimerBtn>
					Nov 20 2021 <Img src={arrowdownIcon} alt="select date" />
				</TimerBtn>
				<TimerBtn>
					10 : 21 AM <Img src={arrowdownIcon} alt="select date" />
				</TimerBtn>
			</TimerBodyBtn>
		</SelectTimeBody>
	)
}

export default Picktimedate
