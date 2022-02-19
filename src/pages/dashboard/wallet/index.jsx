import React from "react"
import { KHeaderText, Underline } from "../keywords/style"
import WallBalance from "./ballance"
import PieCard from "./chart"
import { WalletContainer, WCardContainer, WTableDiv } from "./style"
import TransactionTable from "./table"

function WalletPage() {
	return (
		<WalletContainer>
			<KHeaderText>Wallet </KHeaderText>
			<Underline></Underline>
			<br />
			<br />
			<WCardContainer>
				<PieCard />
				<WallBalance />
			</WCardContainer>
			<WTableDiv>
				<TransactionTable />
			</WTableDiv>
		</WalletContainer>
	)
}

export default WalletPage
