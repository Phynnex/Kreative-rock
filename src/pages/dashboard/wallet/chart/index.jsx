import React from "react"
import WalletPieChat from "./Pie"
import { ChatDivCont, PieChartCrad, PRelate } from "./style"

function PieCard() {
	return (
		<ChatDivCont>
			<h5>Wallet Balance</h5>
			<PieChartCrad>
				<PRelate>
					<WalletPieChat />
				</PRelate>
			</PieChartCrad>
		</ChatDivCont>
	)
}

export default PieCard
