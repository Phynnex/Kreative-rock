import React from "react"
import CustomSelectPayment from "../custom_pselect"
import CustomPayInput from "./customPayInput"
import { BottomFormItems, PayFormBody, PayFormContainer, PayFormLeft } from "./style"

function PaynowForm() {
	return (
		<PayFormBody>
			<PayFormContainer>
				<PayFormLeft>
					<CustomPayInput name="name" label="NAME" placeholder="Victor Arenas" />
					<CustomPayInput type="email" name="email" label="EMAIL" placeholder="Victor@gmail.com" />
					<CustomPayInput label="Number" placeholder="0315237478332" />
				</PayFormLeft>
				<PayFormLeft>
					<CustomSelectPayment name="what" label="NAME" placeholder="Victor Arenas" />
					<CustomPayInput type="number" label="Purchase Quantity" />
				</PayFormLeft>
			</PayFormContainer>
			<PayFormContainer>
				<BottomFormItems>
					<CustomPayInput label="CARD NUMBER" placeholder="0315237478332" />
				</BottomFormItems>
				<BottomFormItems>
					<CustomPayInput label="Number" placeholder="0315237478332" />
				</BottomFormItems>
			</PayFormContainer>
		</PayFormBody>
	)
}

export default PaynowForm
