import ActionBtnDashboard from "components/dashboard/actionbuttons"
import React from "react"
import { KeywordTop, KreateBtnDiv } from "../keywords/style"
import { LineDiv } from "../sendId/style"
import { DReportContainer } from "./style"
import DeliveryReportsTable from "./table"

function DeliveryReportsPage() {
	return (
		<DReportContainer>
			<KeywordTop>
				<KreateBtnDiv>
					<h6>Delivery Reports</h6>
				</KreateBtnDiv>

				<ActionBtnDashboard />
			</KeywordTop>
			<LineDiv />
			<br />
			<DeliveryReportsTable />
		</DReportContainer>
	)
}

export default DeliveryReportsPage
