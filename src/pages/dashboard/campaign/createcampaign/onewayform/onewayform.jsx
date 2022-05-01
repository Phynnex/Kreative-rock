import React, { useState } from "react"
import {
	CObuttonArea,
	COnewayForm,
	OnewayFormCOntroller,
	OnewayFormCOntrollerT,
	RecipientDiv,
	RecipientSelectDiv,
	SenderIdDiv,
	TextAreaCount
} from "./style"
import SetTimerCampaign from "./timer"
import { useCreateKeyword } from "context/createKewordContext"
import { SenderSelectDiv, TopSelDiv } from "./style"
import { Formik } from "formik"
import * as Yup from 'yup'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	Icon,
	IconButton,
	makeStyles,
	MenuItem,
	Select,
	TextField,
	Tooltip
} from "@material-ui/core"
import { useQuery } from "react-query"
import { getUserSenderIds } from "services/senderIdService"
import ErrorMessage from "components/common/ErrorMessage"
import cogoToast from "cogo-toast"
import { AccessAlarm, Close } from "@material-ui/icons"
import { createCampaign } from "services/campaignService"
import { getUserKeywords } from "services/keywordService"
import { campaignRecurrence, recipientList } from "../twowayform/select"


function OneWayForm() {
	const classes = useStyles()
	const { createkeyword } = useCreateKeyword()
	const { data: senderId } = useQuery("senderIds", getUserSenderIds)
	const { data: keywords } = useQuery("keywords", getUserKeywords)

	
	const [isLoading, setIsLoading] = useState(false)
	const [dialog, setDialog] = useState(false)
	const [schedule, setSchedule] = useState({
		time: "",
		every: "",
		dayOfTheWeek: "",
		dayOfTheMonth: 1,
		month: "",
		date: ""
	})


	function toggleCreateKeyword() {
		console.log(createkeyword)
	}

	const handleDateChange = (e) => {
		const { value } = e.target
		const split = value.split('-')
		setSchedule({ ...schedule, date: value, dayOfTheMonth: Number(split[2]) })
	};

	const handleTimeChange = (e) => {
		const { value } = e.target
		setSchedule({ ...schedule, time: value })
	};

	const handleChangeOccurence = (e) => {
		const { value } = e.target
		setSchedule({ ...schedule, every: value })
	}

	const openDialog = () => {
		setDialog(true)
	}

	const closeDialog = () => {
		setDialog(false)
	}

	const handleClearTimer = () => {
		setSchedule({ ...schedule, time: "" })
	}

	const handleClearDate = () => {
		setSchedule({ ...schedule, date: "" })
	}

	const handleSubmit = async (values) => {
		setIsLoading(true)

		const filter = recipientList?.filter(x => x.id = values.recipients)

		values = {
			...values,
			schedule: schedule,
			recipients: filter[0]?.list
		}


		try {
			const response = await createCampaign(values)

			if (response.status === 202) {
				setIsLoading(false)
				cogoToast.success("Campaign successfully created")
			} else {
				setIsLoading(false)
				cogoToast.warn("Failed")
			}
		} catch (error) {
			setIsLoading(false)
			cogoToast.warn("Network Error")
		}
	}


	const renderDateTimeSelectionDialog = () => {
		return (
			<Dialog
				open={dialog}
				maxWidth={'sm'}
				fullWidth={true}
			>
				<Box style={{ display: 'flex', alignItems: 'center' }}>
					<DialogTitle>Select Date & Time</DialogTitle>
					<div className='ml-auto pr-2' style={{ marginLeft: 'auto', padding: '0.5rem' }}>
						<IconButton onClick={closeDialog}>
							<Icon style={{ display: 'flex', alignItems: 'center' }}><Close /></Icon>
						</IconButton>
					</div>
				</Box>
				<DialogContent>
					<Grid container>
						<Grid item lg={6} md={6} sm={12} xs={12} style={{ padding: '0.5rem' }}>
							<p>Select Date</p>
							<FormControl variant="standard" className={classes.formControl}>
								<TextField
									className={classes.textfield}
									type="date"
									placeholder="Select Date"
									value={schedule.date}
									variant="outlined"
									onChange={handleDateChange}
									InputProps={{
										startAdornment: (
											<span className="mr-2">
												<IconButton
													size="small"
													onClick={handleClearDate}
												>
													<Close fontSize="small" />
												</IconButton>
											</span>
										),
									}}
								/>
							</FormControl>
						</Grid>
						<Grid item lg={6} md={6} sm={12} xs={12} style={{ padding: '0.5rem' }}>
							<p>Select Time</p>
							<FormControl variant="standard" className={classes.formControl}>
								<TextField
									className={classes.textfield}
									type="time"
									placeholder="Select Time"
									value={schedule.time}
									variant="outlined"
									onChange={handleTimeChange}
									InputProps={{
										startAdornment: (
											<span className="mr-2">
												<IconButton
													size="small"
													onClick={handleClearTimer}
												>
													<Close fontSize="small" />
												</IconButton>
											</span>
										),
									}}
								/>
							</FormControl>
						</Grid>
					</Grid>


					<Grid container>
						<Grid item lg={12} md={12} sm={12} xs={12} style={{ padding: '0.5rem' }}>
							<p>Occurence</p>
							<FormControl variant="standard" className={classes.formControl}>
								<TextField
									className={classes.textfield}
									type="text"
									placeholder="Select Time"
									value={schedule.every}
									variant="outlined"
									select
									onChange={handleChangeOccurence}
								>
									{campaignRecurrence.map((item) => (
										<MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
									))}
								</TextField>
							</FormControl>
						</Grid>
					</Grid>
				</DialogContent>

				<DialogActions style={{ padding: '0.5rem 2rem' }}>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={closeDialog}
					>
						Ok
					</Button>
				</DialogActions>

			</Dialog>
		)
	}


	return (
		<COnewayForm>
			<Formik
				initialValues={{
					senderId: "",
					recipients: "",
					type: "one-way",
					keyword: "",
					campaignTitle: "",
					scheduleType: "one-time",
					schedule: "",
					campaignMessage: "",
				}}
				validationSchema={Yup.object({
					senderId: Yup.string().required("Please select Sender"),

					recipients: Yup.string().required("Please select Recipients"),

					campaignTitle: Yup.string().required(
						"Please enter the Campaign Title"
					),

					keyword: Yup.string().required(
						"Please enter Keyword"
					),

					campaignMessage: Yup.string().required(
						"Please enter the Campaign Message"
					),
				})}
				enableReinitialize={true}
				onSubmit={handleSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleSubmit,
					handleChange,
					setFieldTouched,
				}) => (
					<form onSubmit={handleSubmit}>
						<SetTimerCampaign
							open={createkeyword}
							close={toggleCreateKeyword}
						/>
						<TopSelDiv>
							<SenderSelectDiv>
								<p>Sender ID</p>
								<SenderIdDiv>
									<FormControl
										variant="standard"
										className={classes.formControl}
									>
										<Select
											className={classes.select}
											variant="outlined"
											disabled={isLoading}
											color="secondary"
											fullWidth
											value={values.senderId}
											MenuProps={{ color: "#F90" }}
											onChange={handleChange}
											displayEmpty
											name="senderId"
										>
											<MenuItem
												className="MuiSelect-selectMenu"
												disabled
												value={``}
											>
												Select Sender ID
											</MenuItem>

											{senderId?.payload?.map((item) => (
												<MenuItem
													className={classes.menuitem}
													value={item.senderId}
													key={item.senderId}
												>
													{item.senderId}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<ErrorMessage
										error={errors.senderId}
										visible={touched.senderId}
									/>
								</SenderIdDiv>
							</SenderSelectDiv>

							<RecipientSelectDiv>
								<p>Select Recipients</p>
								<RecipientDiv>
									<FormControl
										variant="standard"
										className={classes.formControl}
									>
										<Select
											className={classes.select}
											variant="outlined"
											disabled={isLoading}
											color="secondary"
											fullWidth
											value={values.recipients}
											MenuProps={{ color: "#F90" }}
											onChange={handleChange}
											displayEmpty
											name="recipients"
										>
											<MenuItem
												className="MuiSelect-selectMenu"
												disabled
												value={``}
											>
												Select Recipient
											</MenuItem>

											{recipientList?.map((item) => (
												<MenuItem
													className={classes.menuitem}
													value={item.id}
													key={item.id}
												>
													{item.title}
												</MenuItem>
											))}
										</Select>
									</FormControl>
									<ErrorMessage
										error={errors.recipients}
										visible={touched.recipients}
									/>
								</RecipientDiv>
							</RecipientSelectDiv>
						</TopSelDiv>

						<OnewayFormCOntroller>
							<p>Keyword</p>
							<div style={{ width: "78%", margin: "1em 0" }}>
								<FormControl variant="standard" className={classes.formControl}>
									<Select
										className={classes.select}
										variant="outlined"
										disabled={isLoading}
										color="secondary"
										fullWidth
										value={values.keyword}
										MenuProps={{ color: "#F90" }}
										onChange={handleChange}
										displayEmpty
										name="keyword"
									>
										<MenuItem
											className="MuiSelect-selectMenu"
											disabled
											value={``}
										>
											Select Keyword
										</MenuItem>
										{keywords?.payload?.map((item) => (
											<MenuItem
												key={item.id}
												value={item.keyword}
											>
												{item.keyword}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<ErrorMessage
									error={errors.Keyword}
									visible={touched.Keyword}
								/>
							</div>
						</OnewayFormCOntroller>
						<OnewayFormCOntroller>
							<p>Campaign Title</p>
							<div style={{ width: "78%", margin: "1em 0 2em" }}>
								<FormControl variant="standard" className={classes.formControl}>
									<TextField
										variant="outlined"
										color="secondary"
										type="text"
										fullWidth
										id="campaignTitle"
										name="campaignTitle"
										className={classes.textfield}
										placeholder="campaign Title"
										disabled={isLoading}
										onBlur={() => setFieldTouched("campaignTitle")}
										onChange={handleChange("campaignTitle")}
									/>
								</FormControl>
								{errors.campaignTitle && (
									<ErrorMessage
										error={errors.campaignTitle}
										visible={touched.campaignTitle}
									/>
								)}
							</div>
						</OnewayFormCOntroller>
						<OnewayFormCOntrollerT>
							<p>Campaign Message</p>
							<div style={{ width: "78%" }}>
								<FormControl
									variant="standard"
									className={classes.formControl}
									style={{ width: "100%" }}
								>
									<TextField
										variant="outlined"
										color="secondary"
										type="text"
										fullWidth
										id="campaignMessage"
										name="campaignMessage"
										className={classes.textfield}
										placeholder="campaign Message"
										disabled={isLoading}
										onBlur={() => setFieldTouched("campaignMessage")}
										onChange={handleChange("campaignMessage")}
										multiline
										rows={5}
										value={values.campaignMessage}
									/>
								</FormControl>
								{errors.campaignMessage && (
									<ErrorMessage
										error={errors.campaignMessage}
										visible={touched.campaignMessage}
									/>
								)}
							</div>
						</OnewayFormCOntrollerT>
						<OnewayFormCOntroller>
							<TextAreaCount>
								<p>300</p>
							</TextAreaCount>
						</OnewayFormCOntroller>
						<OnewayFormCOntroller>
							<CObuttonArea>
								<Tooltip title="Choose Date and Time">
									<IconButton
										onClick={openDialog}
										className={classes.iconButton}
									>
										<AccessAlarm />
									</IconButton>
								</Tooltip>
								<Button
									type="submit"
									onClick={handleSubmit}
									disabled={isLoading}
									variant="contained"
									color="secondary"
									disableElevation
									className={classes.btn}
								>
									{isLoading ? "Sending..." : "Send now"}
								</Button>
							</CObuttonArea>
						</OnewayFormCOntroller>
					</form>
				)}
			</Formik>
			{renderDateTimeSelectionDialog()}
		</COnewayForm>
	);
}


const useStyles = makeStyles(theme => ({
	btn: {
		color: "#fff",
		borderRadius: "10px",
		fontWeight: 600,
		marginTop: "15px",
		fontSize: 18,
		padding: "10px 25px",
	},
	formControl: {
		width: '100%'
	},
	textfield: {
		backgroundColor: "#FFFFFF"
	},
	select: {
		backgroundColor: "#FFFFFF",
		color: "#373737"
	},
	menuitem: {
		backgroundColor: "#FFFFFF",
		color: "#373737"
	},
	iconButton: {
		width: "50px",
		height: "50px",
		marginTop: '20px',
		backgroundColor: 'orange',
		'&:hover': {
			backgroundColor: 'orange',
			opacity: '0.7'
		}
	}
}))

export default OneWayForm
