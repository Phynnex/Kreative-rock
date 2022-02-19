import { EarningHeader, FundwalletHeader, PaynowBtn, WalletBalanceBox, WalletsContainer } from "components/Earning/style"
import FundWallet from "../components/Earning/FundWallet/FundWallet"
import PieChart from "../components/Earning/PieChart"
import TransactionTable from "../components/Earning/TransactionTable"

const Earning = () => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h2>Wallet</h2>
			</div>
			<EarningHeader></EarningHeader>
			<br />
			<br />
			<br />

			<WalletsContainer>
				<div>
					<h4>Wallet Balance</h4>
					<WalletBalanceBox>
						<PieChart />
					</WalletBalanceBox>
				</div>
				<div>
					<FundwalletHeader>
						<h4>Fund Wallet</h4>
						<PaynowBtn>PAY NOW</PaynowBtn>
					</FundwalletHeader>
					<div className="fund-wallet-box">
						<FundWallet />
					</div>
				</div>
			</WalletsContainer>

			<div style={{ margin: "4rem 4rem 1rem" }}>
				<TransactionTable />
			</div>
		</>
	)
}

export default Earning
