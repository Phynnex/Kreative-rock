import React, { useState } from "react"
import { DReportBody, DRTableContainer, DRTableContent, DRViewCampBtn } from "./style"

// import tableItemicon from "assets/icons/tableItemicon.svg";
// import deletecan from "assets/images/deleteCampaign.svg"
import Editpen from "assets/images/editCampaign.svg"
import { Div, Img, KreativeP } from "globalStyles//style"

// import downPointer from "assets/images/elipses_vert.svg"
// import AppColors from "utils/colors"

function DeliveryReportsTable() {
	// const [details, setDetails] = useState("")

	// const handleShowDetails = doc => {
	// 	setDetails(doc)

	// 	console.log(doc, "Docjs hbhydsbyd")
	// }

	return (
		<DRTableContainer>
			<DRTableContent>
				<DReportBody>
					<tr>
						<th>
							<Div display="flex" alignI="center">
								Campaign ID
							</Div>
						</th>
						<th>
							<Div display="flex" alignI="center">
								Campaign Type
							</Div>
						</th>
						<th>Delivery Status</th>
						<th>
							<Div display="flex" alignI="center">
								Contacts
							</Div>
						</th>
						<th>
							<Div display="flex" alignI="center">
								Date
							</Div>
						</th>
						<th>
							<Div display="flex" alignI="center">
								Fee
							</Div>
						</th>
						<th></th>
					</tr>
					{[...new Array(5)].map((req, i) => (
						<tr key={(req, i)}>
							<td>Guy Hawkins</td>
							<td>One way Texting</td>
							<td>Delivered</td>
							<td>
								<Div display="flex" alignI="center" width="90%" height="30px">
									<Img within="25px" height="25px" src={Editpen} alt="Delete" />
									<KreativeP ml="10px" mb="-4px">
										+3479258953108
									</KreativeP>
								</Div>
							</td>
							<td>12/Feb/2022</td>
							<td>$22</td>

							<td>
								<DRViewCampBtn>Report </DRViewCampBtn>
							</td>
						</tr>
					))}
				</DReportBody>
			</DRTableContent>
		</DRTableContainer>
	)
}

export default DeliveryReportsTable
