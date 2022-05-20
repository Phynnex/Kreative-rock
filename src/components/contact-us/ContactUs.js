import { Grid, Box, Typography, Button, FormControl, TextField, Divider, CircularProgress } from "@material-ui/core"
import React, { useState } from "react"
import line1 from "../../assets/images/Line1.png"
import line from "../../assets/images/Line.png"
import facebook from "../../assets/images/facebook.png"
import linkedin1 from "../../assets/images/linkedin1.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"
import map from "../../assets/images/map.png"
import background from "../../assets/images/Rectangle.png"
import { makeStyles } from "@material-ui/core"
import { Call, Email, LocationOn, WhatsApp } from "@material-ui/icons"
import ScrollToTop from "components/ScrollToTop"
import { Formik } from "formik"
import * as Yup from 'yup'
import ErrorMessage from "components/common/ErrorMessage"
import { makeEnquiry } from "services/EnquiryService"
import cogoToast from "cogo-toast"

const useStyles = makeStyles(theme => ({
	items: {
		paddingTop: "4em",
		marginBottom: "4em"
	},
	box: {
		padding: "6em 2em",
		background: `url(${background})`,
		backgroundSize: "cover",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "0 2em",
			paddingTop: "2em",
			height: "100%"
		}
	},
	box1: {
		display: "flex",
		justifyContent: "center"
	},
	box2: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			//   display: "flex",
			//   alignItems: "center",
			//   justifyContent: "space-between",
			//   flexDirection: "column",
			// height: "100%",
		}
	},

	headerText: {
		fontSize: 35,
		textAlign: "center",
		textDecoration: "underline",
		textDecorationColor: "#00CCA7",
		fontWeight: 500,
		marginTop: "3em",
		marginBottom: 20,
		[theme.breakpoints.down("sm")]: {
			fontSize: 22,
			fontWeight: 700,
			marginBottom: 6,
			textAlign: "center"
		}
	},
	content: {
		fontSize: 25,
		fontWeight: 600,
		lineHeight: "30px",
		margin: "1em 0 ",
		[theme.breakpoints.down("sm")]: {
			fontSize: 18,
			marginBottom: 5,
			textAlign: "justify"
		}
	},
	content1: {
		fontSize: 25,
		fontWeight: 600,
		lineHeight: "30px",
		margin: "1em 0 ",
		[theme.breakpoints.down("sm")]: {
			fontSize: 18,
			marginTop: "3em",
			textDecoration: "underline"
		}
	},
	btn: {
		color: "#fff",
		borderRadius: "50px",
		padding: "10px 25px",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	},
	btnGrid: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	},
	label: {
		marginBottom: "5px"
	},
	formControl: {
		maxWidth: "100%",
		width: "100%",
		marginBottom: "20px"
	},
	icons: {
		display: "inline-block",
		margin: "10px 0",
		marginLeft: "10px",
		[theme.breakpoints.down("sm")]: {
			textAlign: "justify",
			fontSize: "14px"
		}
	},
	socialIcons: {
		display: "flex",
		justifyContent: "space-around",
		marginTop: "1em"
	},
	divider: {
		height: "5px",
		width: "100%",
		background: "red"
	},
	image: {
		maxWidth: "100%",
		height: "550px",
		width: "2px",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	image1: {
		maxWidth: "100%",
		height: "2px",
		marginTop: "2em"
	},
	map: {
		maxWidth: "100%"
	},
	textfield: {
		background: "#Fff",
		outline: "none",
		border: "none"
	}
}))
const ContactUs = () => {
	const classes = useStyles()
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (values) => {
		setLoading(true)

		values = { ...values, phoneNumber: values.phoneNumber.toString() }
		console.log(values)

		try {
			const response = await makeEnquiry(values)
			console.log(response)

			if (response.status === 200) {
				setLoading(false)
				cogoToast.success("Enquiry sent successfully")
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
		<>
			<ScrollToTop />
			<Box className={classes.items}>
				<Typography variant="h2" className={classes.headerText}>
					Contact Us
				</Typography>

				<Formik
					initialValues={{
						fullName: "",
						emailAddress: "",
						phoneNumber: "",
						organizationName: "",
						country: "NaN",
						service: "Brand Management",
						website: "NaN",
						description: "",
						type: "enquiry"
					}}
					onSubmit={handleSubmit}
					validationSchema={Yup.object({
						fullName: Yup.string().required('Please Enter your Fullname'),
						phoneNumber: Yup.string().required('Please Enter your Phone Number'),
						emailAddress: Yup.string().required('Please Enter your Emaill Address').email('Enter a valid email'),
						description: Yup.string().required('Please Enter your request')
					})}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleSubmit
					}) => (
						<form onSubmit={handleSubmit}>
							<Grid container className={classes.box}>
								<Grid item container xs={12} sm={11} md={8} className={classes.box2} spacing={2}>
									<Grid item xs={12} md={10}>
										<Typography variant="h2" className={classes.content}>
											Send us a message and we respond within 24 hours
										</Typography>
									</Grid>
									<Grid item xs={12} md={5}>
										<FormControl variant="standard" className={classes.formControl}>
											<label className={classes.label}>Full Name</label>
											<TextField
												name="fullName"
												type="text"
												value={values.fullName}
												variant="outlined"
												fullWidth id="fullWidth"
												className={classes.textfield}
												onChange={handleChange}
											/>
											<ErrorMessage
												error={errors.fullName}
												visible={touched.fullName}
											/>
										</FormControl>
									</Grid>

									<Grid item xs={12} md={5}>
										<FormControl variant="standard" className={classes.formControl}>
											<label className={classes.label}>Email</label>
											<TextField
												name="emailAddress"
												type="email"
												value={values.emailAddress}
												variant="outlined"
												fullWidth
												id="fullWidth"
												className={classes.textfield}
												onChange={handleChange}
											/>
											<ErrorMessage
												error={errors.emailAddress}
												visible={touched.emailAddress}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12} md={5}>
										<FormControl variant="standard" className={classes.formControl}>
											<label className={classes.label}>Phone Number</label>
											<TextField
												name="phoneNumber"
												type="number"
												value={values.phoneNumber}
												variant="outlined"
												fullWidth id="fullWidth"
												className={classes.textfield}
												onChange={handleChange}
											/>
											<ErrorMessage
												error={errors.phoneNumber}
												visible={touched.phoneNumber}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12} md={5}>
										<FormControl variant="standard" className={classes.formControl}>
											<label className={classes.label}>Organization</label>
											<TextField
												name="organizationName"
												type="text"
												value={values.organizationName}
												variant="outlined"
												fullWidth
												id="fullWidth"
												className={classes.textfield}
												onChange={handleChange}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12} md={10}>
										<FormControl variant="standard" className={classes.formControl}>
											<label className={classes.label}>Message</label>
											<TextField
												name="description"
												type="text"
												value={values.description}
												variant="outlined"
												multiline rows={4}
												fullWidth
												className={classes.textfield}
												id="fullWidth"
												onChange={handleChange}
											/>
											<ErrorMessage
												error={errors.description}
												visible={touched.description}
											/>
										</FormControl>
									</Grid>
									<Grid item xs={12} className={classes.btnGrid}>
										<Button
											type="submit"
											variant="contained"
											color="secondary"
											disableElevation
											className={classes.btn}
											disabled={loading}
										>
											Send Message
											{loading && <CircularProgress style={{ marginLeft: '0.5rem', color: '#FFFFFF' }} size={20} />}
										</Button>
									</Grid>
								</Grid>
								<div>
									<img src={line} alt="" className={classes.image} />
								</div>
								<Grid item container xs={11} sm={11} md={4} className={classes.box1}>
									<Grid item xs={12} style={{ padding: "0 1em" }}>
										<Typography variant="h2" className={classes.content1}>
											Contact information
										</Typography>
										<Box>
											<div>
												<Call /> <Typography className={classes.icons}>+2348094200003</Typography>
											</div>
											<div>
												<WhatsApp />
												<Typography className={classes.icons}>+2348094200003</Typography>
											</div>
											<div>
												<Email />
												<Typography className={classes.icons}>www.kreativerock.com </Typography>
											</div>
											<div>
												<LocationOn /> <Typography className={classes.icons}>No. 77 Ojueleba Road, Surulere, Lagos State, Nigeria</Typography>
											</div>
										</Box>
										<div>
											<img src={line1} alt="" className={classes.image1} />
										</div>
										<div className={classes.socialIcons}>
											<img src={facebook} alt="" />
											<img src={linkedin1} alt="" />
											<img src={insta} alt="" />
											<img src={twitter} alt="" />
										</div>
									</Grid>
									<Grid item style={{ padding: "1em" }} xs={12}>
										<img src={map} alt="" className={classes.map} />
									</Grid>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>


			</Box>

			<Divider orientation="vertical" flexItem />
		</>
	)
}

export default ContactUs
