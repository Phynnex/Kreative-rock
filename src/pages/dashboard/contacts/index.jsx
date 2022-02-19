import { Img, KreativeP } from "globalStyles/style"
import React, { useState } from "react"
import AppColors from "utils/colors"
import { KeywordTop } from "../keywords/style"
import { LineDiv } from "../sendId/style"
import ContactActionBtns from "./buttons"
import SearchContacts from "./search"
import { ContactFilterTab, DContactsHome, FilterDivBtn } from "./style"
import allContacts from "assets/images/allcontacts.svg"
import repliedContacts from "assets/images/approvedicon.svg"
import interestedContacts from "assets/images/interested.svg"
import newContacts from "assets/images/new.svg"
import corperateContacts from "assets/images/corperateclients.svg"
import employeeContacts from "assets/images/employee-group-solid.svg"
import ContactListTable from "./table"
import AddContactListForm from "./formActions/add_contact"
import CreateContactsForm from "./formActions/create_contact"
import { useToggleContact } from "context/ContactActionsContext"
import ImportContactsForm from "./formActions/import_contacts"
function ContactsPage() {
	const [filtertab, setFilterTab] = useState(0)
	const { handleToggleAddContact, handleToggleImportContact, handleToggleContact } = useToggleContact()

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
			<KeywordTop>
				<h6>My Contacts</h6>

				<ContactActionBtns onAddList={handleToggleContact} onAddContact={handleToggleAddContact} onImportContacts={handleToggleImportContact} />
				<AddContactListForm />
				<CreateContactsForm />
				<ImportContactsForm />
			</KeywordTop>
			<ContactFilterTab>
				<FilterDivBtn bm={filtertab === 0 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(0)}>
					<Img width="15px" height="15px" src={allContacts} alt="All Contacts" />
					<KreativeP fs="14px" fw={filtertab === 0 ? "bold" : "normal"} color={filtertab === 0 ? AppColors.black2 : AppColors.black2}>
						All (22)
					</KreativeP>
				</FilterDivBtn>
				<FilterDivBtn bm={filtertab === 1 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(1)}>
					<Img width="15px" height="15px" src={repliedContacts} alt="Replied Contacts" />
					<KreativeP fs="14px" fw={filtertab === 1 ? "bold" : "normal"} color={filtertab === 1 ? AppColors.black2 : AppColors.black2}>
						Replied (12)
					</KreativeP>
				</FilterDivBtn>
				<FilterDivBtn bm={filtertab === 2 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(2)} fg="0 0 70px">
					<Img width="15px" height="15px" src={interestedContacts} alt="Interested" />
					<KreativeP fs="14px" fw={filtertab === 2 ? "bold" : "normal"} color={filtertab === 2 ? AppColors.black2 : AppColors.black2}>
						Interested(30)
					</KreativeP>
				</FilterDivBtn>
				<FilterDivBtn bm={filtertab === 3 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(3)}>
					<Img width="15px" height="15px" src={corperateContacts} alt="Corperate Client" />
					<KreativeP fs="14px" fw={filtertab === 3 ? "bold" : "normal"} color={filtertab === 3 ? AppColors.black2 : AppColors.black2}>
						Corporate Clients (22)
					</KreativeP>
				</FilterDivBtn>
				<FilterDivBtn bm={filtertab === 5 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(5)}>
					<Img width="15px" height="15px" src={newContacts} alt="Corperate Client" />
					<KreativeP fs="14px" fw={filtertab === 5 ? "bold" : "normal"} color={filtertab === 5 ? AppColors.black2 : AppColors.black2}>
						New (22)
					</KreativeP>
				</FilterDivBtn>
				<FilterDivBtn bm={filtertab === 6 ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => setFilterTab(6)}>
					<Img width="15px" height="15px" src={employeeContacts} alt="Corperate Client" />
					<KreativeP fs="14px" fw={filtertab === 6 ? "bold" : "normal"} color={filtertab === 6 ? AppColors.black2 : AppColors.black2}>
						Employee{" "}
					</KreativeP>
					<KreativeP fs="11px" mt="-15px" fw={filtertab === 6 ? "bold" : "normal"} color={filtertab === 6 ? AppColors.black2 : AppColors.black2}>
						( 22 )
					</KreativeP>
				</FilterDivBtn>
			</ContactFilterTab>
			<ContactListTable />
		</DContactsHome>
	)
}

export default ContactsPage
