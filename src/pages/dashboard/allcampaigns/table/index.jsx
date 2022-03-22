import React, { useState } from "react"
import { useQuery } from "react-query"
import { TableDetailsPageModal, TablePopupDiv, TransTableBody, TransTableContainer, TransTableContent, ViewCampBtn } from "./style"
import { TableScrollDiv } from "pages/dashboard/wallet/table/style"
// import tableItemicon from "assets/icons/tableItemicon.svg";
import deletecan from "assets/images/deleteCampaign.svg"
import Editpen from "assets/images/editCampaign.svg"
import { Div, Img, KButton, KreativeP } from "globalStyles//style"
import downPointer from "assets/images/elipses_vert.svg"
import AppColors from "utils/colors"
import { Link } from "react-router-dom"
import { CAMPAIGN_DETAILS_PROPS } from "pages/dashboard/ROUTESCONTS"
import Pagination from "Utilities/pagination"
import cFlag from "assets/images/countryflag.png"
import { getCampaigns } from "services/campaignService"
import ErrorDataUi from "components/Error"
import LoadingDataUi from "components/loading"
import EmptyDataUi from "components/emptydoc"
function AllCampTable() {
	const [details, setDetails] = useState("")
	const { data: campaigns, isLoading, isError } = useQuery("campaigns", getCampaigns)
	console.log(campaigns, isLoading, isError)

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
							{campaigns?.payload?.map((campaign, i) => (
								<tr key={campaign?.id}>
									<td>"Campaign Id"</td>
									<td>Hey! Merry Christmas.</td>
									<td>
										<Div display="flex" alignI="center" width="90%" height="30px">
											<Img within="25px" height="25px" src={cFlag} alt="Delete" />
											<KreativeP ml="10px" mb="-4px">
												+3479258953108
											</KreativeP>
										</Div>
									</td>
									<td>12/Feb/2022</td>

									<td>
										<Link to={`${CAMPAIGN_DETAILS_PROPS}Hey! Merry Christmas/${i}`}>
											<ViewCampBtn>View </ViewCampBtn>
										</Link>
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
															Edit Campaign
														</KreativeP>
													</Div>
													<Div display="flex" alignI="center" cursor="pointer" width="90%" height="30px">
														<Img within="20px" height="20px" src={deletecan} alt="Delete" />
														<KreativeP mb="-4px" ml="5px">
															Delete Campaign
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
			<Pagination pageSize={150} itemsCount={16} currentPage={1} />
			{campaigns?.payload && campaigns?.payload.length <= 0 && <EmptyDataUi />}
			{isLoading && <LoadingDataUi />}
			{isError && <ErrorDataUi text="Error retrieving data" />}
		</>
	)
}

export default AllCampTable
