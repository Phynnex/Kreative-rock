import ActionBtnDashboard from "components/dashboard/actionbuttons"
import { DContactsHome } from "./style"

function ContactsPage() {
	return (
		<div>
			<ActionBtnDashboard />
			<DContactsHome>
				<h4>Contacts</h4>
			</DContactsHome>
			<div className="earning-header"></div>
		</div>
	)
}

export default ContactsPage
