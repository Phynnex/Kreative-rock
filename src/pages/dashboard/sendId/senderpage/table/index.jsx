import React, { useState } from "react";
import * as dayjs from "dayjs";
import {
  TableDetailsPageModal,
  TablePopupDiv,
  TransTableBody,
  TransTableContainer,
  TransTableContent,
} from "./style";
import { TableScrollDiv } from "pages/dashboard/wallet/table/style";
import EmptyDataUi from "components/emptydoc";
import deletecan from "assets/images/deleteCampaign.svg";
import Editpen from "assets/images/editCampaign.svg";
import { Div, Img, KButton, KreativeP } from "globalStyles//style";

import EditSenderIdForm from "pages/dashboard/sendId/editsenderid";
import downPointer from "assets/images/elipses_vert.svg";
import AppColors from "utils/colors";
import Pagination from "Utilities/pagination";
import LoadingDataUi from "components/loading";
import ErrorDataUi from "components/Error";
import { useQuery, useQueryClient } from "react-query";
import { deleteSenderId, getUserSenderIds } from "services/senderIdService";
import ConfirmAction from "components/confirm/confirmAction";
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style";
import cogoToast from "cogo-toast";
// import { useToggleContact } from "context/ContactActionsContext"

function SenderIdListTable() {
  const [isSummiting, setIsSubmiiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState("");
  const [sendaID, setsendaID] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const queryClient = useQueryClient();

  // const { stopPropagation } = useToggleContact()
  const handleShowDetails = (doc) => {
    setDetails(doc);
    console.log(doc, "Docjs hbhydsbyd");
  };
  const handleSelectItem = (id) => {
    setsendaID(id);
    setShowConfirm(true);
  };
  const handleSelectItemEdit = (id) => {
    setsendaID(id);
    setIsOpen(true);
  };

  const closeConfirm = () => {
    setShowConfirm(false);
    setsendaID({});
  };
  const handleCloseEditForm = () => {
    setIsOpen(!isOpen);
    setsendaID({});
  };
  const handleDeleteSenderId = async () => {
    setIsSubmiiting(true);
    try {
      const { data } = await deleteSenderId(sendaID?.id);
      if (data.status === 200) {
        cogoToast.success("Sender Id deleted successfully");
        queryClient.invalidateQueries("senderIds");
        setShowConfirm(false);
        setsendaID({});
        setIsSubmiiting(false);
      }
      console.log("Response from Delete", data);
    } catch (err) {
      if (err.response) {
        setIsSubmiiting(false);
        cogoToast.error("There was an error");
      } else {
        cogoToast.error("Network Error");
        setIsSubmiiting(false);
      }
    }
  };

  const {
    data: senderId,
    isLoading,
    isError,
  } = useQuery("senderIds", getUserSenderIds);
  // console.log(senderId, isLoading, isError)
  // console.log(sendaID, "This the id")
  return (
    <>
      <EditSenderIdForm
        isOpen={isOpen}
        detail={sendaID}
        close={handleCloseEditForm}
      />
      <CreateKeywordOverlay open={showConfirm}>
        <ConfirmAction
          closeform={closeConfirm}
          loadingText="Deleting..."
          onContinue={handleDeleteSenderId}
          loading={isSummiting}
        />
      </CreateKeywordOverlay>
      <TableScrollDiv>
        <TransTableContainer>
          <TransTableContent>
            <TransTableBody>
              <tr>
                <th>
                  <Div display="flex" alignI="center">
                    ID No
                  </Div>
                </th>
                <th>
                  <Div display="flex" alignI="center">
                    Sender ID
                  </Div>
                </th>
                <th>Date</th>
                <th>
                  <Div display="flex" alignI="center">
                    Time
                  </Div>
                </th>
                <th>
                  <Div display="flex" alignI="center">
                    Status
                  </Div>
                </th>
                <th></th>
              </tr>

              {senderId?.payload?.map((id, i) => (
                <tr key={(id, i)}>
                  <td>{i + 1}</td>
                  <td>{id.senderId}</td>
                  <td>
                    <Div
                      display="flex"
                      alignI="center"
                      width="90%"
                      height="30px"
                    >
                      <KreativeP mb="-4px">{`${dayjs(id?.createdOn).format(
                        "DD"
                      )}/${dayjs(id?.createdOn).format("MMM")}/${dayjs(
                        id?.createdOn
                      ).format("YYYY")}`}</KreativeP>
                    </Div>
                  </td>
                  <td>{`${dayjs(id?.createdOn).format("hh")}:${dayjs(
                    id?.createdOn
                  ).format("mm")} ${dayjs(id?.createdOn).format("a")}`}</td>

                  <td>{id?.status}</td>
                  <td>
                    <KButton
                      h="40px"
                      p="2px 5px"
                      bc="transparent"
                      br="3px"
                      color={AppColors.white}
                      onClick={() => handleShowDetails(i)}
                    >
                      <Img src={downPointer} alt="indicator" />
                    </KButton>

                    {details === i && (
                      <TableDetailsPageModal
                        show={details === i ? true : false}
                        onClick={() => handleSelectItemEdit(id)}
                      >
                        <TablePopupDiv>
                          <Div
                            display="flex"
                            alignI="center"
                            cursor="pointer"
                            width="90%"
                            height="30px"
                          >
                            <Img
                              within="20px"
                              height="20px"
                              src={Editpen}
                              alt="Delete"
                            />
                            <KreativeP mb="-4px" ml="5px">
                              Edit sender Id
                            </KreativeP>
                          </Div>
                          <Div
                            display="flex"
                            alignI="center"
                            cursor="pointer"
                            width="90%"
                            height="30px"
                            onClick={() => handleSelectItem(id)}
                          >
                            <Img
                              within="20px"
                              height="20px"
                              src={deletecan}
                              alt="Delete"
                            />
                            <KreativeP mb="-4px" ml="5px">
                              Delete sender Id
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
      <Pagination pageSize={40} itemsCount={16} currentPage={1} />
      {senderId?.payload && senderId?.payload.length <= 0 && <EmptyDataUi />}
      {isLoading && <LoadingDataUi />}
      {isError && <ErrorDataUi text="Error retrieving data" />}
    </>
  );
}

export default SenderIdListTable;
