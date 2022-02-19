// import "../../assets/css/earning.css"

import { TTableBody, TTableBodyMain, TTableHeader, WTstatusLabel } from "./style"

const Transactions = [
	{
		name: "Elite Admin",
		status: "Successful",
		inflow: "0",
		outflow: "0",
		date: "April 18, 2017",
		withdraw: "0",
		balance: "$25"
	},
	{
		name: "Elite Admin",
		status: "Successful",
		inflow: "0",
		outflow: "0",
		date: "April 18, 2017",
		withdraw: "0",
		balance: "$25"
	},
	{
		name: "Elite Admin",
		status: "Pending",
		inflow: "0",
		outflow: "0",
		date: "April 18, 2017",
		withdraw: "0",
		balance: "$25"
	},
	{
		name: "Elite Admin",
		status: "Cancelled",
		inflow: "0",
		outflow: "0",
		date: "April 18, 2017",
		withdraw: "0",
		balance: "$25"
	}
]

const TransactionTable = () => {
	return (
		<>
			<h5>Transaction Table</h5>
			<TTableBody>
				<TTableHeader>
					<tr>
						<th scope="col">NAME</th>
						<th scope="col">STATUS</th>
						<th scope="col">INFLOW</th>
						<th scope="col">OUTFLOW</th>
						<th scope="col">DATE</th>
						<th scope="col">WITHDRAW</th>
						<th scope="col">BALANCE</th>
					</tr>
				</TTableHeader>
				<TTableBodyMain>
					{Transactions.map(row => (
						<tr>
							<td data-label="Name">{row.name}</td>
							<td data-label="status" className="status">
								<WTstatusLabel bc={row.status === "Successful" ? "#44BBA5" : row.status === "Pending" ? "#FF7900" : "#E94F37"}>{row.status}</WTstatusLabel>
							</td>

							<td data-label="Inflow">{row.inflow}</td>
							<td data-label="Outflow">{row.outflow}</td>
							<td data-label="Date">{row.date}</td>
							<td data-label="Withdraw">{row.withdraw}</td>
							<td data-label="Balance">{row.balance}</td>
						</tr>
					))}
				</TTableBodyMain>
			</TTableBody>
		</>
	)
}

export default TransactionTable
