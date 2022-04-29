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
import { useQueryClient } from "react-query"
import { updateSenderId } from "services/senderIdService"
import cogoToast from "cogo-toast"

function EditSenderIdForm({ isOpen, close, detail }) {
	const [loading, setLoading] = useState(false)
	const { stopPropagation } = useToggleContact()
	const queryClient = useQueryClient()
	console.log("Edit from ", detail)
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			senderId: detail?.senderId || "",
			category: detail?.category || "",
		},

		onSubmit: async (data, helpers) => {
			const payload = data
			setLoading(true)

			const response = await updateSenderId(detail.id, payload)
			console.log(response, "rese")

			if (response.error) {
				setLoading(false)
				cogoToast.success(response.error, { hideAfter: 5 })
			}

			if (response.status === 200) {
				setLoading(false)
				cogoToast.success("Sender Id updated successfully", { hideAfter: 5 })
				queryClient.invalidateQueries("senderIds")
				helpers.resetForm()
				close()
			}
			console.log("|||||||||||||| Send Id", data, response)
		},
		validationSchema: Yup.object({
			senderId: Yup.string().max(40).required("sender Id is required."),
			category: Yup.string().max(50).required("Category is required.")
		})
	})
	// const handleCreateSendId = async doc => {}
	return (
		<CreateKeywordOverlay open={isOpen} onClick={!loading && close}>
			<AddFormDivAResponse onClick={stopPropagation}>
				<SenderIDContainer>
					<form onSubmit={formik.handleSubmit}>
						<SenderDiv>
							<SenderIdTitleDiv>
								<Div width="100%" display="flex" justify="center" mb="10px">
									<h4>Edit Sender ID</h4>
								</Div>

								<SenderNameInput type="text" name="senderId" id="senderId" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.senderId} placeholder="Sender Id" />
								<ErrorMessage mt="5px" error={formik.errors.senderId} visible={formik.touched.senderId} />
								<CustomSelectCountry name="category" id="category" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.category} />
								<div style={{ position: "relative", marginTop: "-35px" }}>
									<ErrorMessage error={formik.errors.category} visible={formik.touched.category} />
								</div>

								<br />
								<button style={{ display: "none" }} type="button" onClick={formik.resetForm}>
									Click
								</button>
								<Div width="100%" display="flex" justify="flex-end" mt="30px">
									<KButton type="submit" p="7px 50px" bc={AppColors.brandColor} color={AppColors.white} br="50px">
										{loading ? "LOADING..." : "CREATE"}
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

export default EditSenderIdForm
