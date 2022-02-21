import React from "react"
import { Div, Img, KreativeP } from "globalStyles/style"
import { TransTableBody, TransTableContainer, TransTableContent } from "../table/style"
import { TableScrollDiv } from "pages/dashboard/wallet/table/style"
import cFlag from "assets/images/countryflag.png"
import Pagination from "Utilities/pagination"
function DetailsTable() {
	return (
		<>
			<TableScrollDiv>
				<TransTableContainer>
					<TransTableContent>
						<TransTableBody>
							<tr>
								<th>
									<Div display="flex" alignI="center">
										ID
									</Div>
								</th>
								<th>
									<Div display="flex" alignI="center">
										Contacts
									</Div>
								</th>
								<th>Total Message</th>
								<th>
									<Div display="flex" alignI="center">
										Fee
									</Div>
								</th>
							</tr>
							{[...new Array(5)].map((req, i) => (
								<tr key={(req, i)}>
									<td>{i + 1}</td>
									<td>
										<Div display="flex" alignI="center" width="90%" height="30px">
											<Img within="25px" height="25px" src={cFlag} alt="Delete" />
											<KreativeP ml="10px" mb="-4px">
												+3479258953108
											</KreativeP>
										</Div>
									</td>
									<td>54</td>
									<td>NIR22</td>
								</tr>
							))}
						</TransTableBody>
					</TransTableContent>
				</TransTableContainer>
			</TableScrollDiv>
			<Pagination pageSize={7} itemsCount={16} currentPage={1} />
		</>
	)
}

export default DetailsTable
