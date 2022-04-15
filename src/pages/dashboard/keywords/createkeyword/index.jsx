import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Div, Img, KButton, KreativeP } from "globalStyles/style"
import { CampaignInput, CampaignInputLabel, CreateKeywordContainer, CreateKeywordOverlay, KreateButton, KreateFormBody } from "./style"
import closeIcon from "assets/images/closeIcon.svg"
import { createKeyword } from "services/keywordService"
import cogoToast from "cogo-toast"
import { useQueryClient } from "react-query"
// import ErrorMessage from "components/common/ErrorMessage"
// import ToggleSwitch from "./customswitch"
function CreateKeyword({ close, open }) {
	const [loading, setLoading] = useState(false)
	const queryClient = useQueryClient()

	const formik = useFormik({
		initialValues: {
			keyword: ""
		},

		onSubmit: async (data, helpers) => {
			setLoading(true)
			let keywordPayload = { ...data, duration: 30 }
			const response = await createKeyword(keywordPayload)
			console.log(response)
			if (response?.message && response.message.status === 500) {
				setLoading(false)
				cogoToast.error(response.message.error, { hideAfter: 5 })
			}
			if (response?.message && response.message.status === 400) {
				setLoading(false)
				cogoToast.error(response.message.error, { hideAfter: 5 })
			}
			if (response?.message && response.message.status === 412) {
				setLoading(false)
				cogoToast.error(response.message.error, { hideAfter: 5 })
			}
			if (response?.status === 200) {
				setLoading(false)
				cogoToast.success("Keyword added successfully", { hideAfter: 5 })
				close()
				helpers.resetForm()
				queryClient.invalidateQueries("keywords")
			}
		},
		validationSchema: Yup.object({
			keyword: Yup.string().max(10).required("Keyword is required.").label("Keyword")
		})
	})
	return (
		<CreateKeywordOverlay open={open}>
			<CreateKeywordContainer>
				<Div width="100%" display="flex" justify="flex-end">
					<KButton bc="transparent" onClick={!loading && close}>
						<Img src={closeIcon} alt="Closed" />
					</KButton>
				</Div>
				<KreateFormBody onSubmit={formik.handleSubmit}>
					<KreativeP fs="24px" tAlign="center">
						Keyword
					</KreativeP>
					<div>
						<Div width="100%" display="flex" mb="2px" justify="space-between">
							<CampaignInputLabel>Keyword Name</CampaignInputLabel>
							<CampaignInputLabel>{100 - formik.values.keyword.length}</CampaignInputLabel>
						</Div>
						<CampaignInput type="text" name="keyword" id="keyword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.keyword} />
						<Div width="100%" display="flex" justify="flex-end" mt="10px" mb="10px">
							<CampaignInputLabel fs="10px">Mixture of Alphanumeric characters ranging from 20 to 100</CampaignInputLabel>
						</Div>
						{/* <ErrorMessage mt="-40px" error={formik.errors.keyword} visible={formik.touched.keyword} /> */}
					</div>
					{/* <div>
						<CampaignInputLabel>Auto Response</CampaignInputLabel>
						<CampaignInput />
					</div>
					<Div mt="5px" mb="3px">
						<CampaignInputLabel>Auto Confirmation Message </CampaignInputLabel>
					</Div> */}
					{/* <ToggleSwitch /> */}
					<Div width="100%" display="flex" justify="center" mt="10px" mb="10px">
						<KreativeP mt="5px" textAlign="center">
							Your keyword is avilabe for 30 days
						</KreativeP>
					</Div>
					<Div width="100%" display="flex" mb="20px" justify="flex-end">
						<KreateButton type="submit" disabled={loading}>
							{loading ? "Loading..." : "Create"}
						</KreateButton>
					</Div>
				</KreateFormBody>
			</CreateKeywordContainer>
		</CreateKeywordOverlay>
	)
}

export default CreateKeyword
