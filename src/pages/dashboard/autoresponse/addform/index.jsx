import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useCreateKeyword } from "context/createKewordContext"
import { Div, KButton, KreativeP } from "globalStyles/style"
import { CObuttonArea } from "pages/dashboard/campaign/createcampaign/onewayform/style"
import { SenderNameInput } from "pages/dashboard/sendId/style"
import AppColors from "utils/colors"
import CustomSelectAutoresponse from "./customselect"
import {
	AddFormDivAResponse,
	// AutoResForm,
	// AutoResFormDiv,
	AutoResTextArea
} from "./style"
// import alarmIcon from "assets/images/alarm.svg"
import SetTimerCampaign from "pages/dashboard/campaign/createcampaign/onewayform/timer"
import { useToggleContact } from "context/ContactActionsContext"
import { CreateKeywordOverlay } from "pages/dashboard/keywords/createkeyword/style"
import ErrorMessage from "components/common/ErrorMessage"

function AddAutoResponse() {
	const [loading, setLoading] = useState(false)
	const { createkeyword, setCreateKeyword } = useCreateKeyword()
	const { toggleImportContact, stopPropagation, handleToggleImportContact } = useToggleContact()

	const toggleCreateKeyword = () => setCreateKeyword(!createkeyword)

	const formik = useFormik({
		initialValues: {
			name: "",
			keyword: "",
			message: ""
		},

		onSubmit: async data => {
			setLoading(true)
			try {
				const response = await AddAutoResponse(data)
				console.log("|||||||||||||| Auto Response", response)
				setTimeout(() => {
					setLoading(false)
				}, 5000)
			} catch (error) {
				console.log(error, "Error ||||||||||||")
				setTimeout(() => {
					setLoading(false)
				}, 5000)
			}
		},
		validationSchema: Yup.object({
			name: Yup.string().max(50).required("Name is required."),
			keyword: Yup.string().max(100).required("Keyword is required."),
			message: Yup.string().max(255).required("Message is required.")
		})
	})

	return (
		<CreateKeywordOverlay open={toggleImportContact} onClick={handleToggleImportContact}>
			<AddFormDivAResponse onClick={stopPropagation}>
				<form onSubmit={formik.handleSubmit}>
					{/* <AutoResFormDiv> */}
					<SetTimerCampaign open={createkeyword} close={toggleCreateKeyword} />
					{/* <AutoResForm> */}
					<Div display="flex" width="100%" justify="center">
						<KreativeP fs="18px" color={AppColors.black2}>
							Auto Response
						</KreativeP>
					</Div>
					<SenderNameInput h="40px" type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Name" />
					<ErrorMessage mt="0px" error={formik.errors.name} visible={formik.touched.name} />
					<CustomSelectAutoresponse name="keyword" id="keyword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.keyword} />

					<div style={{ position: "relative", marginTop: "-40px", height: "40px" }}>
						<ErrorMessage mt="10px" error={formik.errors.keyword} visible={formik.touched.keyword} />
					</div>

					<AutoResTextArea name="message" id="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} rows={3} placeholder="Auto response message" />
					<ErrorMessage error={formik.errors.message} visible={formik.touched.message} />
					<CObuttonArea>
						{/* <KButton color="white" br="50px" p="5px 20px;" bc={createkeyword ? AppColors.footerBlue : AppColors.brandColor} onClick={toggleCreateKeyword}>
					<Img width="25px" height="25px" src={alarmIcon} alt="Schedule time" />
				</KButton> */}
						<KButton type="submit" color="white" bc={AppColors.brandColor} br="50px" p="7px 30px;">
							{loading ? "Loading..." : "Create"}
						</KButton>
					</CObuttonArea>
					{/* </AutoResForm> */}
					{/* </AutoResFormDiv> */}
				</form>
			</AddFormDivAResponse>
		</CreateKeywordOverlay>
	)
}

export default AddAutoResponse
