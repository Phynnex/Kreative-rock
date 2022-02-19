import React from "react"
import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
// import { ImportContactContainer, ListItemsDiv, UploadFileDIv, UploadFilePicker } from "./style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import uploadIconWhite from "assets/images/uploadicon_white.svg"
import { ImportContactContainer, ListItemsDiv, UploadFileDIv, UploadFilePicker } from "./style"

function ImportContactsForm() {
	const { stopPropagation, toggleImportContact, handleToggleImportContact } = useToggleContact()
	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<ImportContactContainer onClick={stopPropagation}>
				<ListItemsDiv>
					<KreativeP fw="bold">Import Contact</KreativeP>
					<UploadFileDIv>
						<h6>No file selected</h6>
						<UploadFilePicker>
							<Img src={uploadIconWhite} alt="Import Contacts" />
							Choose file
						</UploadFilePicker>
					</UploadFileDIv>

					<Div mt="20px" width="100%" display="flex">
						<KreativeP fs="12px" fw="normal">
							I agree to Kreative Terms and conditions, which require that all my subscribers have given prior express written cinsent to receive Messages from me.
						</KreativeP>
					</Div>
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton p="10px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
							Upload file
						</KButton>
					</Div>
				</ListItemsDiv>
			</ImportContactContainer>
		</CreateKeywordOverlay>
	)
}

export default ImportContactsForm
