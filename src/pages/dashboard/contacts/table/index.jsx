import React, { useState } from "react";
import {
  TableDetailsPageModal,
  TablePopupDiv,
  TransTableBody,
  TransTableContainer,
  TransTableContent,
  ContactsOverlay,
} from "./style";
// import tableItemicon from "assets/icons/tableItemicon.svg";
import viewIcon from "assets/images/view.svg";
import deletecan from "assets/images/deleteCampaign.svg";
import Editpen from "assets/images/editCampaign.svg";
import sendMessage from "assets/images/send_message.svg";
import { Div, Img, KButton, KreativeP } from "globalStyles/style";
// import cFlag from "assets/images/countryflag.png"
import cUser from "assets/images/userdp.png";
import downPointer from "assets/images/elipses_vert.svg";
import AppColors from "utils/colors";
import { TableScrollDiv } from "pages/dashboard/wallet/table/style";
import { ContactPhoto } from "./style";
import { getContacts } from "services/contactService";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import DeleteContact from "./tableActions/delete";
import EditContactsForm from "./tableActions/edit";
import SendMessage from "./tableActions/sendMessage";
import ViewContact from "./tableActions/view";


function ContactListTable() {
  const { data: contacts } = useQuery("contacts", getContacts);
  const [details, setDetails] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState({});
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState(false);
	const [viewContact, setViewContact] = useState(false);




  const handleShowDetails = (doc) => {
    setDetails(doc);
  };

  const handleDeleteContact = (id) => {
    setContact(id);
    setShow(true);
  };

  const closeDelete = () => {
    setShow(false);
    // setAdmin({});
  };

  const handleEditContact = (id) => {
    setContact(id);
    setIsOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsOpen(!isOpen);
    setContact({});
  };

  const handleSendMessage = (id) => {
    setContact(id);
    setMessage(true);
  };

  const closeSendMessage = () => {
    setMessage(false);
    // setAdmin({});
  };

  const handleViewContact = (id) => {
    setContact(id);
    setViewContact(true);
  };

  const closeViewContact = () => {
    setViewContact(false);
    // setAdmin({});
  };
 

  


  const handleDisplay = () => {
    if (!contacts) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={20} />
        </div>
      );
    }

    if (contacts && contacts.status) {
      return contentDisplay();
    }
  };

  const contentDisplay = () => {
    return (
      <>
      <EditContactsForm
        isOpen={isOpen}
        detail={contact}
        close={handleCloseEditForm}
      />
      <ContactsOverlay open={viewContact} >
        <ViewContact
          closeform={closeViewContact}
          loadingText="Deleting..."
        //  onContinue={handleDeletePrices}
          loading={isSubmiting}
        />
      </ContactsOverlay>

      <ContactsOverlay open={message} >
        <SendMessage
          closeform={closeSendMessage}
          loadingText="Deleting..."
        //  onContinue={handleDeletePrices}
          loading={isSubmiting}
        />
      </ContactsOverlay>

      <ContactsOverlay open={show} >
        <DeleteContact
          closeform={closeDelete}
          loadingText="Deleting..."
        //  onContinue={handleDeletePrices}
          loading={isSubmiting}
        />
      </ContactsOverlay>

      
      
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

            {contacts?.contacts?.map((item) => (
              <tr key={item.id}>
                <td>
                  <Div display="flex" alignI="center" width="90%" height="30px">
                    <ContactPhoto>
                      <Img
                        within="25px"
                        height="25px"
                        src={cUser}
                        alt="Delete"
                      />
                    </ContactPhoto>
                    <Div>
                      <KreativeP fw="bold" ml="10px" mb="-3px">
                        {item.firstName} {item.lastName}
                      </KreativeP>
                      <KreativeP ml="10px" mb="-3px">
                        {item.jobTitle}
                      </KreativeP>
                    </Div>
                  </Div>
                </td>

                <td>
                  <Div display="flex" alignI="center" width="90%" height="30px">
                    {/* <Img within="25px" height="25px" src={cFlag} alt="Delete" /> */}

                    <Div>
                      <KreativeP ml="10px" mb="-4px">
                        {item.phoneNumber}
                      </KreativeP>
                      <KreativeP ml="10px" mb="-4px">
                        {item.location}
                      </KreativeP>
                    </Div>
                  </Div>
                </td>

                <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                <td>
                  <KButton
                    h="40px"
                    p="2px 5px"
                    bc="transparent"
                    br="3px"
                    color={AppColors.white}
                    onClick={() => {
                      handleShowDetails(item.id);
                    }}
                  >
                    <Img src={downPointer} alt="indicator" />
                  </KButton>

                  {details === item.id && (
                    <TableDetailsPageModal 
                      onClick={() => setDetails("")}>
                      <TablePopupDiv>
                        <Div
                          display="flex"
                          mb="10px"
                          alignI="center"
                          cursor="pointer"
                          width="90%"
                          height="30px"
                          onClick={() => handleViewContact (item)}


                        >
                          <Img
                            within="15px"
                            height="15px"
                            src={viewIcon}
                            alt="View Contact"
                          />
                          <KreativeP mb="-4px" ml="5px">
                            View
                          </KreativeP>
                        </Div>
                        <Div
                          display="flex"
                          mb="10px"
                          alignI="center"
                          cursor="pointer"
                          width="90%"
                          height="30px"
                          onClick={() => handleEditContact (item)}

                        >
                          <Img
                            within="20px"
                            height="20px"
                            src={Editpen}
                            alt="Delete"
                          />
                          <KreativeP mb="-4px" ml="5px">
                            Edit
                          </KreativeP>
                        </Div>
                        <Div
                          display="flex"
                          mb="10px"
                          alignI="center"
                          cursor="pointer"
                          width="90%"
                          height="30px"
                          onClick={() => handleSendMessage(item)}

                        >
                          <Img
                            within="20px"
                            height="20px"
                            src={sendMessage}
                            alt="Send Message"
                          />
                          <KreativeP mb="-3px" ml="5px">
                            Send message
                          </KreativeP>
                        </Div>
                        <Div
                          display="flex"
                          mb="10px"
                          alignI="center"
                          cursor="pointer"
                          width="90%"
                          height="30px"
                          onClick={() => handleDeleteContact(item)}

                        >
                          <Img
                            within="20px"
                            height="20px"
                            src={deletecan}
                            alt="Delete"
                          />
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
    </>
    );
  };

  return (
    <TableScrollDiv>
      <TransTableContainer>
        {handleDisplay()}
        {/* <TransTableContainer>
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
										<ContactPhoto>
											<Img within="25px" height="25px" src={cUser} alt="Delete" />
										</ContactPhoto>
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
        </TransTableContainer>*/}
      </TransTableContainer>
    </TableScrollDiv>
  );
}
export default ContactListTable;
