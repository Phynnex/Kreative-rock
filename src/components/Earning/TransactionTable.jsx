import "../../assets/css/earning.css"

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
			<h4>Transaction Table</h4>
			<table>
				<thead>
					<tr>
						<th scope="col">NAME</th>
						<th scope="col">STATUS</th>
						<th scope="col">INFLOW</th>
						<th scope="col">OUTFLOW</th>
						<th scope="col">DATE</th>
						<th scope="col">WITHDRAW</th>
						<th scope="col">BALANCE</th>
					</tr>
				</thead>
				<tbody>
					{Transactions.map(row => (
						<tr>
							<td data-label="Name">{row.name}</td>
							<td
								data-label="status"
								className="status"
								style={{
									backgroundColor: (row.status === "Successful" && "#44BBA5") || (row.status === "Pending" && "#FF7900") || (row.status === "Cancelled" && "#E94F37")
								}}
							>
								{row.status}
							</td>

							<td data-label="Inflow">{row.inflow}</td>
							<td data-label="Outflow">{row.outflow}</td>
							<td data-label="Date">{row.date}</td>
							<td data-label="Withdraw">{row.withdraw}</td>
							<td data-label="Balance">{row.balance}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default TransactionTable
