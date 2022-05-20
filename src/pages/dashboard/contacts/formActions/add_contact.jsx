import React, { useState } from "react"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
// import { AddListContainer, AddListInput, ListItemsDiv } from "./style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import { AddListContainer, AddListInput, ListItemsDiv } from "./style"
import { useFormik } from "formik"
import * as Yup from 'yup'
import ErrorMessage from "components/common/ErrorMessage"
import { addContactList } from "services/contactService"
import cogoToast from "cogo-toast"
import { CircularProgress } from "@material-ui/core"

function AddContactListForm() {
	const { stopPropagation, toggleContact, handleToggleContact } = useToggleContact()
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (values) => {
		setLoading(true)
		console.log(values)
		try {
			const response = await addContactList(values)
			console.log(response)

			if (response.status === true) {
				setLoading(false)
				cogoToast.success("Contact List successfully created")
				handleToggleContact(false)
			} else {
				setLoading(false)
				cogoToast.warn("Failed")
			}
		} catch (e) {
			setLoading(false)
			cogoToast.warn("Network Error")
		}
	}

	const formik = useFormik({
		initialValues: { name: '' },
		validationSchema: Yup.object({
			name: Yup.string()
				.required("Please Enter Name")
		}),
		onSubmit: (values) => { handleSubmit(values) }
	})

	return (
		<CreateKeywordOverlay open={toggleContact} onClick={handleToggleContact}>
			<AddListContainer onClick={stopPropagation}>
				<ListItemsDiv onSubmit={formik.handleSubmit}>
					<KreativeP fw="bold">Add List</KreativeP>
					<AddListInput
						type="text"
						name='name'
						placeholder="Enter Name"
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					<ErrorMessage
						error={formik.errors.name}
						visible={formik.touched.name}
					/>
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton
							p="10px 50px"
							bc={AppColors.brandColor}
							color={AppColors.white} br="50px"
							disabled={loading}
							type="submit"
						>
							Save
							{loading ? <CircularProgress style={{ marginLeft: '0.5rem', color: '#FFFFFF' }} size={20} /> : null}
						</KButton>
					</Div>
				</ListItemsDiv>
			</AddListContainer>
		</CreateKeywordOverlay>
	)
}

export default AddContactListForm
