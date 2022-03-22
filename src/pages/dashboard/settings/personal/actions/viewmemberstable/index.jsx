// import "../../assets/css/earning.css"

import { Img, KreativeP } from "globalStyles/style"
import { AddMemberTBody, TableScrollDiv, TTableBodyMain, TTableHeader, WTstatusLabel } from "./style"
import nigeriaflag from "assets/images/nigeriaflag.svg"

import AppColors from "utils/colors"
import { useQuery } from "react-query"
import { getTeamMembers } from "services/userService"

const ViewMemberTable = () => {
	const { data: team, isLoading, isError } = useQuery("team", getTeamMembers)
	console.log(team, isLoading, isError)
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
							<th scope="col">Remove</th>
						</tr>
					</TTableHeader>
					{isLoading && <p>Loading...</p>}
					{!isLoading && team.length > 0 && (
						<TTableBodyMain>
							{team?.map(member => (
								<tr>
									<td data-label="Name">{member?.profile?.personalInformation?.fullname}</td>
									<td data-label="status" className="status">
										{member?.profile?.personalInformation?.phoneNumber}
									</td>

									<td data-label="Inflow">{member?.profile?.personalInformation?.email}</td>
									<td data-label="Outflow">
										<Img height="20px" src={nigeriaflag} alt={member?.profile?.personalInformation?.fullname} />
									</td>
									<td data-label="Date">
										<WTstatusLabel bc={AppColors.brandColor}>
											<KreativeP mt="5px" color={AppColors.white}>
												Yes
											</KreativeP>
										</WTstatusLabel>
									</td>
								</tr>
							))}
						</TTableBodyMain>
					)}
				</AddMemberTBody>
			</TableScrollDiv>
		</>
	)
}

export default ViewMemberTable
