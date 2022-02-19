import React from "react"
import { Header, HeaderContent, HeaderText } from "./style"
import SearchContacts from "pages/dashboard/contacts/search"
import { LineDiv } from "pages/dashboard/sendId/style"

const HelpHeader = () => {
	return (
		<>
			<HeaderContent>
				<Header>
					<HeaderText>How Can We Help ?</HeaderText>
					<SearchContacts />
				</Header>
				<LineDiv />
			</HeaderContent>
			<br />
		</>
	)
}

export default HelpHeader
