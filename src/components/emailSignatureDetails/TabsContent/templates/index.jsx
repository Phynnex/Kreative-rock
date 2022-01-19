import FreeCards from "components/email-templates/FreeCards/FreeCards"
// import freeEmailsData from "components/email-templates/FreeCards/freecardsData"
import ProCards from "components/email-templates/proCards"
import { Div } from "globalStyles/style"
import { TempBody } from "./style"

function EsTemplates() {
	return (
		<TempBody>
			<Div width="100%">
				<h5 className="mt-3">Free Temaplates</h5>
			</Div>
			<FreeCards />
			<Div width="100%">
				<h5>Pro Temaplates</h5>
			</Div>
			<ProCards />
		</TempBody>
	)
}

export default EsTemplates
