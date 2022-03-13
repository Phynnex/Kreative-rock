import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { SenderDiv, SenderIDContainer, SenderIdTitleDiv, SenderNameInput } from "./style"
// import arrowDown from "assets/images/arrowdown.svg"
import { Div, KButton } from "globalStyles/style"
// import approvedStatus from "assets/images/approvedicon.svg"
import AppColors from "utils/colors"
import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "../keywords/createkeyword/style"
import { AddFormDivAResponse } from "../autoresponse/addform/style"
import CustomSelectCountry from "./selectCountry"
import ErrorMessage from "components/common/ErrorMessage"
function CreateSenderIdForm() {
	const [loading, setLoading] = useState(false)
	const { toggleImportContact, stopPropagation, handleToggleImportContact } = useToggleContact()
	const formik = useFormik({
		initialValues: {
			senderId: "",
			country: ""
		},

		onSubmit: async data => {
			setLoading(true)
			// handleCreateSendId(data)
			console.log("|||||||||||||| Send Id", data)
			setTimeout(() => {
				setLoading(false)
			}, 5000)
		},
		validationSchema: Yup.object({
			senderId: Yup.string().max(50).required("sender Id is required."),
			country: Yup.string().max(50).required("Country is required.")
		})
	})
	// const handleCreateSendId = async doc => {}
	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={!loading && handleToggleImportContact}>
			<AddFormDivAResponse onClick={stopPropagation}>
				<SenderIDContainer>
					<form onSubmit={formik.handleSubmit}>
						<SenderDiv>
							<SenderIdTitleDiv>
								<Div width="100%" display="flex" justify="center" mb="10px">
									<h4>Create Sender ID</h4>
								</Div>

								<SenderNameInput type="text" name="senderId" id="senderId" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.senderId} placeholder="Sender Id" />
								<ErrorMessage mt="5px" error={formik.errors.senderId} visible={formik.touched.senderId} />
								<CustomSelectCountry name="country" id="country" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.country} />
								<div style={{ position: "relative", marginTop: "-35px" }}>
									<ErrorMessage error={formik.errors.country} visible={formik.touched.country} />
								</div>
								{/* <SDateContainer>
									<DateInput>
										<p>Feb 29,2021</p>
										<Img src={arrowDown} alt="arrowDown" />
									</DateInput>
									<TimeInput>{`10 : 00`}</TimeInput>
									<SelectDiv>
										<option value="">AM</option>
										<option value="AM">AM</option>
										<option value="PM">PM</option>
									</SelectDiv>
								</SDateContainer> */}
								{/* <SDateContainer mt="10px">
								<KreativeP color="#393939" mt="15px">
									Status
								</KreativeP>
								<StatusDiv>
									<Img src={approvedStatus} alt="arrowDown" />
									<KreativeP color={AppColors.newsLetterBg} mt="15px">
										APPROVED
									</KreativeP>
								</StatusDiv>
							</SDateContainer> */}
								<br />
								<button style={{ display: "none" }} type="button" onClick={formik.resetForm}>
									Click
								</button>
								<Div width="100%" display="flex" justify="flex-end" mt="30px">
									<KButton type="submit" p="7px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
										{loading ? "LOADING" : "CREATE"}
									</KButton>
								</Div>
							</SenderIdTitleDiv>
						</SenderDiv>
					</form>
				</SenderIDContainer>
			</AddFormDivAResponse>
		</CreateKeywordOverlay>
	)
}

export default CreateSenderIdForm
