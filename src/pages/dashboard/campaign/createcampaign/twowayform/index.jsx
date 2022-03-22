import React from "react"
import Picktimedate from "./picktimedate"
import CustomSelectIdTwo, { CustomSelectRecipient } from "./select"
import { CCBtnDiv, CreateTwoWayBtn, CTwowayForm, CTwowayFormController, CTwowayTextarea, TwoWayInput, TwoWaySelectDiv } from "./style"

function TwoWayForm() {
	return (
		<CTwowayForm>
			<CTwowayFormController>
				<p>Select Keywords</p>
				<TwoWaySelectDiv>
					<CustomSelectIdTwo />
				</TwoWaySelectDiv>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Select Recipients</p>
				<TwoWaySelectDiv>
					<CustomSelectRecipient />
				</TwoWaySelectDiv>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Title</p>
				<TwoWaySelectDiv>
					<TwoWayInput />
				</TwoWaySelectDiv>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Start Date & Time</p>

				<TwoWaySelectDiv>
					<Picktimedate />
				</TwoWaySelectDiv>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign End Date & Time</p>

				<TwoWaySelectDiv>
					<Picktimedate />
				</TwoWaySelectDiv>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Message 1</p>
				<CTwowayTextarea rows="7"></CTwowayTextarea>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Response Message 1</p>
				<CTwowayTextarea rows="7"></CTwowayTextarea>
			</CTwowayFormController>
			<CCBtnDiv>
				<CreateTwoWayBtn>Create a campaign</CreateTwoWayBtn>
			</CCBtnDiv>
		</CTwowayForm>
	)
}

export default TwoWayForm
