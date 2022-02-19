import React from "react"
import WallBalance from "./ballance"
import PieCard from "./chart"
import { WCardContainer } from "./style"
import TransactionTable from "./table"

function WalletPage() {
	return (
		<div>
			<WCardContainer>
				<PieCard />
				<WallBalance />
			</WCardContainer>
			<TransactionTable />
		</div>
	)
}

export default WalletPage
