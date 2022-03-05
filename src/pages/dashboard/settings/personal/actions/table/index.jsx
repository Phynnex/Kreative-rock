// import "../../assets/css/earning.css"

import { Img } from "globalStyles/style"
import { AddMemberTBody, TableScrollDiv, TTableBodyMain, TTableHeader, WTstatusLabel } from "./style"
import nigeriaflag from "assets/images/nigeriaflag.svg"
import addIcon from "assets/images/addIcon.svg"
import AppColors from "utils/colors"
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

const AddMemberTable = () => {
	return (
		<>
			<TableScrollDiv>
				<AddMemberTBody>
					<TTableHeader>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Number</th>
							<th scope="col">Email</th>
							<th scope="col">Country</th>
							<th scope="col">Add</th>
						</tr>
					</TTableHeader>
					<TTableBodyMain>
						{Transactions.map(row => (
							<tr>
								<td data-label="Name">{row.name}</td>
								<td data-label="status" className="status">
									+1434182017
								</td>

								<td data-label="Inflow">name@gmail.com</td>
								<td data-label="Outflow">
									<Img height="20px" src={nigeriaflag} alt="Nigeria" />
								</td>
								<td data-label="Date">
									<WTstatusLabel bc={AppColors.brandColor}>
										<Img src={addIcon} alt="add member" />
									</WTstatusLabel>
								</td>
							</tr>
						))}
					</TTableBodyMain>
				</AddMemberTBody>
			</TableScrollDiv>
		</>
	)
}

export default AddMemberTable
