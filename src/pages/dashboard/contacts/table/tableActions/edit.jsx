import React, { useState } from "react"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import { useToggleContact } from "context/ContactActionsContext"
import AppColors from "utils/colors"
import CustomSelectCountryCode from "./countryCodeSelect"
import { AddContactDiv, AddListInput, CreateContactContainer, HalfAddInputDiv } from "../../formActions/style"
import { useFormik } from "formik"
import * as Yup from 'yup'
import ErrorMessage from "components/common/ErrorMessage"
import { createContact } from "services/contactService"
import { CircularProgress } from "@material-ui/core"
import cogoToast from "cogo-toast"

function EditContactsForm({isOpen, close, detail }) {
	const { stopPropagation,  handleToggleAddContact } = useToggleContact()
	const [loading, setLoading] = useState(false)



	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			countryCode: "",
			phoneNumber: "",
			email: "",
			jobTitle: "",
			location: "",
			note: ""
		},
		validationSchema: Yup.object({
			phoneNumber: Yup.string()
				.required("Please enter the phone numbet")
		}),
		onSubmit: (values) => { handleSubmit(values) }
	})

	const handleSubmit = async (values) => {

		setLoading(true)

		values = { ...values, phoneNumber: values.phoneNumber.toString() }
		console.log(values)
		try {
			const response = await createContact(values)

			if (response.status === true) {
				setLoading(false)
				cogoToast.success("Contact successfully created")
				handleToggleAddContact(false)
			} else {
				setLoading(false)
				cogoToast.warn("Failed")
			}
		} catch (err) {
			setLoading(false)
			cogoToast.warn("Network Error")
		}
	}

	return (
		<CreateKeywordOverlay open={isOpen} onClick={!loading && close} >
			<CreateContactContainer onClick={stopPropagation}>
				<AddContactDiv onSubmit={formik.handleSubmit}>
					<KreativeP fw="bold">Create New Contact</KreativeP>
					<HalfAddInputDiv>
						<AddListInput
							w="49%"
							type="text"
							placeholder="First Name"
							name="firstName"
							value={formik.values.firstName}
							onChange={formik.handleChange}
						/>
						<AddListInput
							w="49%"
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={formik.values.lastName}
							onChange={formik.handleChange}
						/>
					</HalfAddInputDiv>
					<AddListInput
						type="email"
						placeholder="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					<HalfAddInputDiv>
						<CustomSelectCountryCode
							type="text"
							name="countryCode"
							value={formik.values.countryCode}
							onChange={formik.handleChange}
						/>
						<AddListInput
							mw="70%"
							w="78%"
							type="number"
							placeholder="Phone Number"
							name="phoneNumber"
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
						/>
					</HalfAddInputDiv>
					<HalfAddInputDiv>
						<ErrorMessage
							error={formik.errors.phoneNumber}
							visible={formik.touched.phoneNumber}
						/>
					</HalfAddInputDiv>
					<HalfAddInputDiv>
						<AddListInput
							w="49%"
							type="text"
							placeholder="Job Title"
							name="jobTitle"
							value={formik.values.jobTitle}
							onChange={formik.handleChange}
						/>
						<AddListInput
							w="49%"
							type="text"
							placeholder="Location"
							name="location"
							value={formik.values.location}
							onChange={formik.handleChange}
						/>
					</HalfAddInputDiv>
					<AddListInput
						type="text"
						placeholder="Note"
						name="note"
						value={formik.values.note}
						onChange={formik.handleChange}
					/>
					<Div mt="20px" width="100%" display="flex" justify="flex-end">
						<KButton
							p="10px 50px"
							bc={AppColors.brandColor}
							color={AppColors.white}
							br="50px"
							disabled={loading}
							type="submit"
						>
							Save Contact
							{loading ? <CircularProgress style={{ marginLeft: '0.5rem', color: '#FFFFFF' }} size={20} /> : null}
						</KButton>
					</Div>
				</AddContactDiv>
			</CreateContactContainer>
		</CreateKeywordOverlay>
	)
}

export default EditContactsForm
