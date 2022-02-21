import React from "react"
import { Img } from "globalStyles/style"

import AddIcon from "assets/images/addIconyellow.svg"
import uploadIcon from "assets/images/uploadIconyellow.svg"
import { BtnContentDiv, CTAButton, CTAButtonContainer, CTAScrollDiv } from "./style"
import { CButton } from "../style"
import csv from "assets/images/csv.svg"
import excel from "assets/images/excel.svg"
import pdf from "assets/images/pdf.svg"

function ContactActionBtns({ onAddContact, onAddList, onImportContacts }) {
	return (
		<CTAButtonContainer>
			<CTAScrollDiv>
				<CButton>
					Csv <Img ml="5px" src={csv} alt="action icon" />
				</CButton>
				<CButton>
					Excel <Img ml="5px" src={excel} alt="action icon" />
				</CButton>
				<CButton>
					Pdf <Img ml="5px" src={pdf} alt="action icon" />
				</CButton>
				<CTAButton onClick={onAddContact}>
					<BtnContentDiv>
						<Img width="20px" height="20px" src={AddIcon} alt="Add Contact" />
						{"Add Contact"}
					</BtnContentDiv>
				</CTAButton>
				<CTAButton onClick={onAddList}>
					<BtnContentDiv>
						<Img width="20px" height="20px" src={AddIcon} alt="Add List" />
						{"Add list"}
					</BtnContentDiv>
				</CTAButton>
				<CTAButton onClick={onImportContacts}>
					<BtnContentDiv>
						<Img src={uploadIcon} alt="Import Contact" />
						{"Import Contacts"}
					</BtnContentDiv>
				</CTAButton>
			</CTAScrollDiv>
		</CTAButtonContainer>
	)
}
export default ContactActionBtns
