import { Img, KreativeP } from "globalStyles/style";
import React, { useState } from "react";
import AppColors from "utils/colors";
import { KeywordTop } from "../keywords/style";
import { LineDiv } from "../sendId/style";
import ContactActionBtns from "./buttons";
import SearchContacts from "./search";
import {
  BottomActionsDiv,
  CButton,
  ContactFilterTab,
  ContactTop,
  DContactsHome,
  FilterDivBtn,
} from "./style";
import allContacts from "assets/images/allcontacts.svg";
import repliedContacts from "assets/images/approvedicon.svg";
import interestedContacts from "assets/images/interested.svg";
import newContacts from "assets/images/new.svg";
import corperateContacts from "assets/images/corperateclients.svg";
import employeeContacts from "assets/images/employee-group-solid.svg";
import ContactListTable from "./table";
import AddContactListForm from "./formActions/add_contact";
import CreateContactsForm from "./formActions/create_contact";
import { useToggleContact } from "context/ContactActionsContext";
import ImportContactsForm from "./formActions/import_contacts";
import pdf from "assets/images/pdf.svg";
import excel from "assets/images/excel.svg";
import csv from "assets/images/csv.svg";
function ContactsPage({isOpen, close, detail }) {
  const [filtertab, setFilterTab] = useState(0);
  const {
    handleToggleAddContact,
    handleToggleImportContact,
    handleToggleContact,
  } = useToggleContact();

  return (
    <DContactsHome>
      <KeywordTop>
        <h4>Contacts</h4>

        <SearchContacts />
      </KeywordTop>
      <br />
      <LineDiv />
      <br />
      <br />
      <ContactTop>
        <h5>My Contacts</h5>

        <ContactActionBtns
          onAddList={handleToggleContact}
          onAddContact={handleToggleAddContact}
          onImportContacts={handleToggleImportContact}
        />
        <AddContactListForm />
        <CreateContactsForm />
        <ImportContactsForm />
      </ContactTop>
      <ContactFilterTab>
        <FilterDivBtn
          bm={filtertab === 0 ? `3px solid  ${AppColors.brandColor}` : null}
          onClick={() => setFilterTab(0)}
        >
          <Img
            width="15px"
            height="15px"
            src={allContacts}
            alt="All Contacts"
          />
          <KreativeP
            fs="14px"
            fw={filtertab === 0 ? "bold" : "normal"}
            color={filtertab === 0 ? AppColors.black2 : AppColors.black2}
          >
            All (22)
          </KreativeP>
        </FilterDivBtn>
      </ContactFilterTab>
      <ContactListTable />
      <BottomActionsDiv>
        <CButton>
          Csv <Img ml="5px" src={csv} alt="action icon" />
        </CButton>
        <CButton>
          Excel <Img ml="5px" src={excel} alt="action icon" />
        </CButton>
        <CButton>
          Pdf <Img ml="5px" src={pdf} alt="action icon" />
        </CButton>
      </BottomActionsDiv>
    </DContactsHome>
  );
}

export default ContactsPage;
