import React from "react"
import { CCBtnDiv, CreateTwoWayBtn, CTwowayForm, CTwowayFormController, CTwowaySelect, CTwowayTextarea } from "./style"

function TwoWayForm() {
	return (
		<CTwowayForm>
			<CTwowayFormController>
				<p>Select Keywords</p>
				<CTwowaySelect>
					<option>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</option>
				</CTwowaySelect>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Select Recipients</p>
				<CTwowaySelect>
					<option>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</option>
				</CTwowaySelect>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Title</p>
				<CTwowaySelect>
					<option>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</option>
				</CTwowaySelect>
			</CTwowayFormController>
			<CTwowayFormController>
				<p>Campaign Start Date & Time</p>
				<CTwowaySelect>
					<option>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</option>
				</CTwowaySelect>
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
