import { useFormik } from "formik"
import * as Yup from 'yup'
import React, { useState } from "react"
import Picktimedate from "./picktimedate"
import CustomSelectIdTwo,
{
	CustomSelectRecipient,
	CustomSelectKeyword,
	recipientList,
	monthName,
	CustomSelectCampaignRecurrence
} from "./select"
import {
	CCBtnDiv,
	CreateTwoWayBtn,
	CTwowayForm,
	CTwowayFormController,
	CTwowayTextarea,
	TwoWayInput,
	TwoWaySelectDiv
} from "./style"
import ErrorMessage from "components/common/ErrorMessage"
import { createCampaign } from "services/campaignService"
import cogoToast from "cogo-toast"


function TwoWayForm() {
	const [loading, setLoading] = useState(false)
	const [schedule, setSchedule] = useState({
		time: "",
		every: "",
		dayOfTheWeek: "",
		dayOfTheMonth: 1,
		month: "",
		date: ""
	})


	const [endSchedule, setEndSchedule] = useState({
		time: "",
		every: "",
		dayOfTheWeek: "",
		dayOfTheMonth: 1,
		month: "",
		date: ""
	})


	const handleSubmit = async (values) => {
		setLoading(true)
		const recipients = recipientList?.filter((x) => x.title === values.recipients)[0]?.list

		const param = {
			senderId: values.senderId,
			recipients: recipients,
			type: "two-way",
			keyword: values.keyword,
			campaignTitle: values.campaignTitle,
			scheduleType: values.scheduleType === 'one-time' ? values.scheduleType : 'reoccuring',
			schedule: schedule,
			campaignMessage: values.campaignMessage,
		}

		try {
			const response = await createCampaign(param)

			if (response.status === 202) {
				setLoading(false)
				cogoToast.success("Campaign successfully created")
			} else {
				setLoading(false)
				cogoToast.warn("Failed")
			}
		} catch (error) {
			setLoading(false)
			cogoToast.warn("Network Error")
		}
	}


	const formik = useFormik({
		initialValues: {
			senderId: "",
			recipients: "",
			type: "two-way",
			keyword: "",
			campaignTitle: "",
			scheduleType: "",
			schedule: "",
			campaignMessage: "",
			campaignResponseMessage: ""
		},
		validationSchema: Yup.object({
			senderId: Yup.string()
				.required("Please select Sender"),

			recipients: Yup.string()
				.required("Please select Recipients"),

			campaignTitle: Yup.string()
				.required("Please enter the Campaign Title"),

			keyword: Yup.string()
				.required("Please enter Keyword"),

			scheduleType: Yup.string()
				.required("Please enter Schedule Type"),

			campaignMessage: Yup.string()
				.required("Please enter the Campaign Message"),

			campaignResponseMessage: Yup.string()
				.required("Please enter the Campaign Response Message"),
		}),
		onSubmit: (values, helpers) => {
			handleSubmit(values)
		}
	})

	return (
		<CTwowayForm onSubmit={formik.handleSubmit}>
			<CTwowayFormController>
				<p>Select Keywords</p>
				<TwoWaySelectDiv>
					<CustomSelectIdTwo
						type="text"
						name="senderId"
						value={formik.values.senderId}
						onChange={formik.handleChange}
					/>
					<ErrorMessage
						error={formik.errors.senderId}
						visible={formik.touched.senderId}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Select Recipients</p>
				<TwoWaySelectDiv>
					<CustomSelectRecipient
						type="text"
						name="recipients"
						value={formik.values.recipients}
						onChange={formik.handleChange}
					/>
					<ErrorMessage
						error={formik.errors.recipients}
						visible={formik.touched.recipients}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Select Keyword</p>
				<TwoWaySelectDiv>
					<CustomSelectKeyword
						type="text"
						name="keyword"
						value={formik.values.keyword}
						onChange={formik.handleChange}
					/>
					<ErrorMessage
						error={formik.errors.keyword}
						visible={formik.touched.keyword}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Campaign Title</p>
				<TwoWaySelectDiv>
					<TwoWayInput
						type="text"
						name="campaignTitle"
						placeholder="Enter Campaign Title"
						value={formik.values.campaignTitle}
						onChange={formik.handleChange}
					/>
					<ErrorMessage
						error={formik.errors.campaignTitle}
						visible={formik.touched.campaignTitle}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Campaign Start Date & Time</p>

				<TwoWaySelectDiv>
					<Picktimedate
						date={(date) => {
							const split = date.split('-')
							monthName(Number(split[1]))
							setSchedule({
								...schedule,
								date: date,
								dayOfTheMonth: Number(split[2]),
								month: monthName(Number(split[1]))
							})
						}}
						time={(time) => setSchedule({ ...schedule, time: time })}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Select Schedule Type</p>
				<TwoWaySelectDiv>
					<CustomSelectCampaignRecurrence
						type="text"
						name="scheduleType"
						value={formik.values.scheduleType}
						onChange={formik.handleChange}
						onMouseUp={(e) => {
							setSchedule({ ...schedule, every: e.target.value })
						}}
					/>
					<ErrorMessage
						error={formik.errors.scheduleType}
						visible={formik.touched.scheduleType}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Campaign End Date & Time</p>

				<TwoWaySelectDiv>
					<Picktimedate
						date={(date) => setEndSchedule({ ...endSchedule, date: date })}
						time={(time) => setEndSchedule({ ...endSchedule, time: time })}
					/>
				</TwoWaySelectDiv>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Campaign Message 1</p>
				<div style={{ width: '70%', }}>
					<CTwowayTextarea
						name="campaignMessage"
						placeholder="Enter Campaign Message"
						onChange={formik.handleChange}
						rows="7"
					>
						{formik.values.campaignMessage}
					</CTwowayTextarea>
					<ErrorMessage
						error={formik.errors.campaignMessage}
						visible={formik.touched.campaignMessage}
					/>
				</div>
			</CTwowayFormController>


			<CTwowayFormController>
				<p>Campaign Response Message 1</p>
				<div style={{ width: '70%', }}>
					<CTwowayTextarea
						name="campaignResponseMessage"
						onChange={formik.handleChange}
						rows="7"
					>
						{formik.values.campaignResponseMessage}
					</CTwowayTextarea>
					<ErrorMessage
						error={formik.errors.campaignResponseMessage}
						visible={formik.touched.campaignResponseMessage}
					/>
				</div>
			</CTwowayFormController>


			<CCBtnDiv>
				<CreateTwoWayBtn
					type="submit"
					disabled={loading}
				>
					{loading ? 'Creating...' : 'Create a campaign'}
				</CreateTwoWayBtn>
			</CCBtnDiv>
		</CTwowayForm>
	)
}

export default TwoWayForm
