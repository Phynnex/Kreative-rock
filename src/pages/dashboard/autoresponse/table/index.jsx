import React, { useState } from "react"
import { TableDetailsPageModal, TablePopupDiv, TransTableBody, TextwrappingDiv, TransTableContainer, TransTableContent } from "./style"
import { TableScrollDiv } from "pages/dashboard/wallet/table/style"
// import tableItemicon from "assets/icons/tableItemicon.svg";
import deletecan from "assets/images/deleteCampaign.svg"
import Editpen from "assets/images/editCampaign.svg"
import { Div, Img, KButton, KreativeP } from "globalStyles//style"

import downPointer from "assets/images/elipses_vert.svg"
import AppColors from "utils/colors"
import Pagination from "Utilities/pagination"

function AutoResponseTable() {
	const [details, setDetails] = useState("")

	const handleShowDetails = doc => {
		setDetails(doc)

		console.log(doc, "Docjs hbhydsbyd")
	}

	return (
		<>
			<TableScrollDiv>
				<TransTableContainer>
					<TransTableContent>
						<TransTableBody>
							<tr>
								<th>
									<Div display="flex" alignI="center">
										Auto response Name
									</Div>
								</th>
								<th>
									<Div display="flex" alignI="center">
										Auto respose Message
									</Div>
								</th>
								<th>Date</th>
								<th>
									<Div display="flex" alignI="center">
										Times
									</Div>
								</th>

								<th></th>
							</tr>
							{[...new Array(5)].map((req, i) => (
								<tr key={(req, i)}>
									<td>Kreative</td>
									<td col-span={2}>
										<TextwrappingDiv>We are a complete marketing management company that leverage technology.</TextwrappingDiv>
									</td>
									<td>
										{/* <Div display="flex" alignI="center" width="90%" height="30px"> */}
										<KreativeP ml="10px" mb="-4px">
											22/feb/2022
										</KreativeP>
										{/* </Div> */}
									</td>
									<td>10: 50 am</td>

									<td>
										<KButton h="40px" p="2px 5px" bc="transparent" br="3px" color={AppColors.white} onClick={() => handleShowDetails(i)}>
											<Img src={downPointer} alt="indicator" />
										</KButton>

										{details === i && (
											<TableDetailsPageModal show={details === i ? true : false} onClick={() => setDetails("")}>
												<TablePopupDiv>
													<Div display="flex" alignI="center" cursor="pointer" width="90%" height="30px">
														<Img within="20px" height="20px" src={Editpen} alt="Delete" />
														<KreativeP mb="-4px" ml="5px">
															Edit
														</KreativeP>
													</Div>
													<Div display="flex" alignI="center" cursor="pointer" width="90%" height="30px">
														<Img within="20px" height="20px" src={deletecan} alt="Delete" />
														<KreativeP mb="-4px" ml="5px">
															Delete
														</KreativeP>
													</Div>
												</TablePopupDiv>
											</TableDetailsPageModal>
										)}
									</td>
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

export default AutoResponseTable
