import React from "react"
import { Div, Img, KreativeP } from "globalStyles/style"
import { TransTableBody, TransTableContainer, TransTableContent } from "./style"
import cFlag from "assets/images/countryflag.png"
import { TableScrollDiv } from "pages/dashboard/wallet/table/style"
import Pagination from "Utilities/pagination"
function ReportPage() {
	return (
		<>
			<TableScrollDiv>
				<TransTableContainer>
					<TransTableContent>
						<TransTableBody>
							<tr>
								<th>
									<Div display="flex" alignI="center">
										Contacts
									</Div>
								</th>

								<th>
									<Div display="flex" alignI="center">
										Delivery Status
									</Div>
								</th>
							</tr>

							<td colSpan={2}>Guy Hawkins</td>
							{[...new Array(5)].map((req, i) => (
								<tr key={(req, i)}>
									<td>
										<Div display="flex" alignI="center" width="90%" height="30px">
											<Img within="25px" height="25px" src={cFlag} alt="Delete" />
											<KreativeP ml="10px" mb="-4px">
												+3479258953108
											</KreativeP>
										</Div>
									</td>

									<td>Pending</td>
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

export default ReportPage
