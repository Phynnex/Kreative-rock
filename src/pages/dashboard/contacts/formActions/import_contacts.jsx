import React, { useState } from "react"
import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import uploadIconWhite from "assets/images/uploadicon_white.svg"
import { ImportContactContainer, ListItemsDiv, UploadFileDIv, UploadFilePicker } from "./style"
import { uploadContact } from "services/contactService"
import { CircularProgress } from "@material-ui/core"

function ImportContactsForm() {
	const { stopPropagation, toggleImportContact, handleToggleImportContact } = useToggleContact()


	const [fileName, setFileName] = useState('')
	const [message, setMessage] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [loading, setLoading] = useState(false)


	const csvType = 'text/csv'


	const handleChange = (e) => {
		const file = e?.target.files[0]
		if (file?.type !== csvType) {
			setMessage('Uploaded File must be an excel format')
		} else {
			setFileName(file.name)
			setSelectedFile(file)
			console.log(file)
		}

	}


	const handleSubmit = async () => {
		setLoading(true)
		try {
			const response = await uploadContact("1", selectedFile)
			console.log(response)
		} catch (e) {

		}
	}



	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<ImportContactContainer onClick={stopPropagation}>
				<ListItemsDiv>
					<KreativeP fw="bold">Import Contact</KreativeP>
					<UploadFileDIv>
						<h6>{fileName === '' ? 'No file selected' : fileName}</h6>
						<UploadFilePicker>
							<Img src={uploadIconWhite} alt="Import Contacts" />
							Choose file
							<input
								type="file"
								style={{ width: '100%', position: 'absolute', opacity: '0' }}
								onChange={(e) => handleChange(e)}
								onClick={() => setMessage('')}
							/>
						</UploadFilePicker>
					</UploadFileDIv>

					<Div mt="20px" width="100%" display="flex">
						<KreativeP fs="12px" fw="normal">
							I agree to Kreative Terms and conditions, which require that all my subscribers have given prior express written cinsent to receive Messages from me.

							<div style={{ padding: '0.5rem 0 0.5rem 0', fontSize: '10px', color: 'red' }}>{message}</div>
						</KreativeP>
					</Div>
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton
							p="10px 50px"
							bc={AppColors.brandColor}
							color={AppColors.white}
							br="50px"
							onClick={handleSubmit}
							type="button"
						>
							Upload file
							{loading ? <CircularProgress style={{ marginLeft: '0.5rem', color: '#FFFFFF' }} size={20} /> : null}
						</KButton>
					</Div>
				</ListItemsDiv>
			</ImportContactContainer>
		</CreateKeywordOverlay>
	)
}

export default ImportContactsForm
