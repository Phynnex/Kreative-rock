import React, { useState } from "react"
import { TableDetailsPageModal, TablePopupDiv, TransTableBody, TransTableContainer, TransTableContent, ViewCampBtn } from "./style"

// import tableItemicon from "assets/icons/tableItemicon.svg";
import deletecan from "assets/images/deleteCampaign.svg"
import Editpen from "assets/images/editCampaign.svg"
import { Div, Img, KButton, KreativeP } from "globalStyles//style"

import downPointer from "assets/images/elipses_vert.svg"
import AppColors from "utils/colors"

function AllCampTable() {
	const [details, setDetails] = useState("")

	const handleShowDetails = doc => {
		setDetails(doc)

		console.log(doc, "Docjs hbhydsbyd")
	}

	return (
		<TransTableContainer>
			<TransTableContent>
				<TransTableBody>
					<tr>
						<th>
							<Div display="flex" alignI="center">
								Campaign ID
							</Div>
						</th>
						<th>
							<Div display="flex" alignI="center">
								Your Keyword
							</Div>
						</th>
						<th>Contacts</th>
						<th>
							<Div display="flex" alignI="center">
								Created Date
							</Div>
						</th>
						<th>
							<Div display="flex" alignI="center">
								Status
							</Div>
						</th>
						<th></th>
					</tr>
					{[...new Array(5)].map((req, i) => (
						<tr key={(req, i)}>
							<td>"Campaign Id"</td>
							<td>Hey! Merry Christmas.</td>
							<td>
								<Div display="flex" alignI="center" width="90%" height="30px">
									<Img within="25px" height="25px" src={Editpen} alt="Delete" />
									<KreativeP ml="10px" mb="-4px">
										+3479258953108
									</KreativeP>
								</Div>
							</td>
							<td>12/Feb/2022</td>

							<td>
								<ViewCampBtn>View </ViewCampBtn>
							</td>
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
													Edite Campaign
												</KreativeP>
											</Div>
											<Div display="flex" alignI="center" cursor="pointer" width="90%" height="30px">
												<Img within="20px" height="20px" src={deletecan} alt="Delete" />
												<KreativeP mb="-4px" ml="5px">
													Delect Campaign
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
	)
}

export default AllCampTable
