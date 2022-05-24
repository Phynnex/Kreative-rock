import React, { useState } from "react"
import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import uploadIconWhite from "assets/images/uploadicon_white.svg"
import { CountrySelect, ImportContactContainer, ListItemsDiv, UploadFileDIv, UploadFilePicker } from "./style"
import { getContactLists, uploadContact } from "services/contactService"
import { CircularProgress } from "@material-ui/core"
import { useQuery } from "react-query"
import cogoToast from "cogo-toast"
import fsjhf from "assets/images/arrowdown.svg"






function ImportContactsForm() {
	const { stopPropagation, toggleImportContact, handleToggleImportContact } = useToggleContact()

	const { data: contactListsData } = useQuery("contactLists", getContactLists)
	const constactLists = contactListsData?.contactLists


	const [fileName, setFileName] = useState('')
	const [message, setMessage] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [selectedListId, setSelectedListId] = useState('')
	const [loading, setLoading] = useState(false)


	const handleChange = (e) => {
		const file = e?.target.files[0]
		setFileName(file.name)
		setSelectedFile(file)
	}

	const handleSubmit = async () => {
		setLoading(true)
		
		uploadContact(selectedListId, selectedFile).then(res => {
			setLoading(false)
			console.log(res)
			cogoToast.success("Success")
		}).catch(err => {
			setLoading(false)
			console.log(err)
			cogoToast.warn("Failed")
		})
	}



	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<ImportContactContainer onClick={stopPropagation}>
				<ListItemsDiv>
					<KreativeP fw="bold">Import Contact</KreativeP>
					<Div mt="20px" width="100%" display="flex">
						<CountrySelect>
							<select
								onChange={(e) => setSelectedListId(e.target.value)}
							>
								<option value="1">Select List</option>
								{constactLists?.map((list) => (
									<option value={list.id}>{list.name}</option>
								))}
								
							</select>
							<div>
								<Img 
									width="15px" 
									height="15px" 
									src={fsjhf} 
									alt="select" 
								/>
							</div>
						</CountrySelect>
						
					</Div>
					<UploadFileDIv>
						<h6>{fileName === '' ? 'No file selected' : fileName}</h6>
						<UploadFilePicker>
							<Img src={uploadIconWhite} alt="Import Contacts" />
							Choose file
							<input
								type="file"
								style={{ width: '100%', position: 'absolute', opacity: '0' }}
								accept="text/csv"
								onChange={(e) => handleChange(e)}
								// onChange={(e) => setSelectedFile(e.target.files[0])}
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
