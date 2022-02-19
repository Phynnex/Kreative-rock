import ActionBtnDashboard from "components/dashboard/actionbuttons"
import React from "react"
import { KeywordTop } from "../keywords/style"
import { LineDiv } from "../sendId/style"
import { DReportContainer } from "./style"
import DeliveryReportsTable from "./table"

function DeliveryReportsPage() {
	return (
		<DReportContainer>
			<KeywordTop>
				<h5>Delivery Reports</h5>

				<ActionBtnDashboard />
			</KeywordTop>
			<LineDiv />
			<br />
			<DeliveryReportsTable />
		</DReportContainer>
	)
}

export default DeliveryReportsPage
