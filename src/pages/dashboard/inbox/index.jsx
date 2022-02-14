import React from "react"
import Header from "./header"
import "../../../assets/css/inbox.css"
import InboxLayout from "./InboxLayout/InboxLayout"

function InboxPage() {
	return (
		<div>
			<div>
				<Header />
				<InboxLayout />
			</div>
		</div>
	)
}

export default InboxPage
