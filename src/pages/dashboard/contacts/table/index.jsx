import React, { useState } from "react"
import { TableDetailsPageModal, TablePopupDiv, TransTableBody, TransTableContainer, TransTableContent } from "./style"

// import tableItemicon from "assets/icons/tableItemicon.svg";
import viewIcon from "assets/images/view.svg"
import deletecan from "assets/images/deleteCampaign.svg"
import Editpen from "assets/images/editCampaign.svg"
import sendMessage from "assets/images/send_message.svg"
import { Div, Img, KButton, KreativeP } from "globalStyles//style"
import cFlag from "assets/images/countryflag.png"
import downPointer from "assets/images/elipses_vert.svg"
import AppColors from "utils/colors"
import { TableScrollDiv } from "pages/dashboard/wallet/table/style"

function ContactListTable() {
	const [details, setDetails] = useState("")

	const handleShowDetails = doc => {
		setDetails(doc)

		console.log(doc, "Docjs hbhydsbyd")
	}

	return (
		<TableScrollDiv>
			<TransTableContainer>
				<TransTableContent>
					<TransTableBody>
						<tr>
							<th>
								<Div display="flex" alignI="center">
									Names
								</Div>
							</th>
							<th>
								<Div display="flex" alignI="center">
									Country
								</Div>
							</th>

							<th>
								<Div display="flex" alignI="center">
									Added
								</Div>
							</th>

							<th></th>
						</tr>
						{[...new Array(5)].map((req, i) => (
							<tr key={(req, i)}>
								<td>
									<Div display="flex" alignI="center" width="90%" height="30px">
										<Div>
											<KreativeP fw="bold" ml="10px" mb="-3px">
												Guy Hawkins
											</KreativeP>
											<KreativeP ml="10px" mb="-3px">
												2118 Thornridge Cir. Syracuse, Connecticut 35624
											</KreativeP>
										</Div>
									</Div>
								</td>

								<td>
									<Div display="flex" alignI="center" width="90%" height="30px">
										<Img within="25px" height="25px" src={cFlag} alt="Delete" />
										<Div>
											<KreativeP ml="10px" mb="-4px">
												+3479258953108
											</KreativeP>
											<KreativeP ml="10px" mb="-4px">
												Message line here
											</KreativeP>
										</Div>
									</Div>
								</td>
								<td>12/Feb/2022</td>

								<td>
									<KButton h="40px" p="2px 5px" bc="transparent" br="3px" color={AppColors.white} onClick={() => handleShowDetails(i)}>
										<Img src={downPointer} alt="indicator" />
									</KButton>

									{details === i && (
										<TableDetailsPageModal show={details === i ? true : false} onClick={() => setDetails("")}>
											<TablePopupDiv>
												<Div display="flex" mb="10px" alignI="center" cursor="pointer" width="90%" height="30px">
													<Img within="15px" height="15px" src={viewIcon} alt="View Contact" />
													<KreativeP mb="-4px" ml="5px">
														View
													</KreativeP>
												</Div>
												<Div display="flex" mb="10px" alignI="center" cursor="pointer" width="90%" height="30px">
													<Img within="20px" height="20px" src={Editpen} alt="Delete" />
													<KreativeP mb="-4px" ml="5px">
														Edit
													</KreativeP>
												</Div>
												<Div display="flex" mb="10px" alignI="center" cursor="pointer" width="90%" height="30px">
													<Img within="20px" height="20px" src={sendMessage} alt="Send Message" />
													<KreativeP mb="-3px" ml="5px">
														Send message
													</KreativeP>
												</Div>
												<Div display="flex" mb="10px" alignI="center" cursor="pointer" width="90%" height="30px">
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
	)
}

export default ContactListTable
