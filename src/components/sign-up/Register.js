import { Grid, Box, Typography, Button, TextField, FormControl, MenuItem, Select } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import cogoToast from "cogo-toast"
import { Formik } from "formik"
import * as Yup from "yup"
import logo from "../../assets/images/logoimg.png"
import signin from "../../assets/images/signin.png"
import facebook from "../../assets/images/facebook2.png"
import google from "../../assets/images/google.png"
import { makeStyles } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"
import ScrollToTop from "components/ScrollToTop"
import "./style.css"
import ErrorMessage from "components/common/ErrorMessage"
import { signupUser } from "services/AuthService"
import useGeoLocation from "react-ipgeolocation"
import { useAuthContext } from "context/AuthContext"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import { DASHBOARDHOME } from "pages/dashboard/ROUTESCONTS"
const useStyles = makeStyles(theme => ({
	items: {
		paddingTop: "4em",
		marginBottom: "4em"
	},
	box: {
		paddingTop: "4em",
		paddingLeft: "4em",
		display: "flex",
		// alignItems: 'center',
		justifyContent: "space-around",
		height: "100vh",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "0 2em",
			paddingTop: "4em",
			height: "100%"
		}
	},
	box1: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	box2: {
		boxShadow: "2px 7px 10px 2px rgba(168,161,161,0.75)",
		padding: "3em",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			padding: "1.5em"
		}
	},
	image: {
		maxWidth: "100%",
		// width: 400,
		// height: 380,
		display: "grid",
		placeSelf: "center",
		[theme.breakpoints.down("sm")]: {
			width: 300,
			height: 280
		},
		[theme.breakpoints.down("md")]: {
			width: "100%"
		}
	},
	image1: {
		maxWidth: "100%",
		width: 500,
		height: 150,
		[theme.breakpoints.down("sm")]: {
			width: 300,
			height: 280
		},
		[theme.breakpoints.down("md")]: {
			width: "100%"
		}
	},

	headerText: {
		fontSize: 30,
		fontWeight: 700,
		[theme.breakpoints.down("sm")]: {
			fontSize: 22,
			fontWeight: 700,
			marginBottom: 6,
			textAlign: "center"
		}
	},
	content: {
		fontSize: 18,
		color: "#373737",
		fontWeight: 300,
		lineHeight: "30px",
		margin: ".4em 0 ",
		[theme.breakpoints.down("sm")]: {
			fontSize: 14,
			marginBottom: 5,
			textAlign: "justify"
		}
	},
	btn: {
		color: "#fff",
		borderRadius: "10px",
		fontWeight: 600,
		marginTop: "15px",
		fontSize: 18,
		padding: "10px 25px",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	},
	formControl: {
		marginTop: "2em"
		// marginBottom: ".5em"
	},
	label: {
		paddingBottom: "5px",
		fontSize: 20,
		[theme.breakpoints.down("sm")]: {
			fontSize: 16
		}
	},
	icons: {
		marginRight: "10px",
		width: "30px",
		height: "30px",
		[theme.breakpoints.down("sm")]: {
			textAlign: "center"
		}
	},
	link: {
		color: "#373737",
		marginLeft: "5px",
		"&:hover": {
			color: "#00CCA7"
		}
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
	}
}))
const Register = () => {
	const [country, setCountry] = useState("nigeria")
	const [isLoading, setIsLoading] = useState(false)
	const { user } = useAuthContext()
	const location = useGeoLocation()
	const history = useHistory()
	const classes = useStyles()

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().min(6).max(70).required("Full Name is required").label("Full Name"),
		email: Yup.string().required("Email is required").max(255).email().label("Email"),
		phoneNumber: Yup.string().min(9).max(14).required("Phone Number is required").label("Phone Number"),
		password: Yup.string().min(8).max(255).required().label("Password"),
		c_password: Yup.string()
			.oneOf([Yup.ref("password"), null], "Confirm Password must match Password")
			.required("Confirm Password is required.")
	})

	const initialValues = {
		fullname: "",
		email: "",
		phoneNumber: "",
		password: "",
		c_password: ""
	}

	const handleChangeCountry = e => {
		setCountry(e.target.value)
	}
	function LoggedInStatus() {
		return <Redirect to={DASHBOARDHOME} />
	}
	const handleSignup = async (values, helpers) => {
		setIsLoading(true)
		if (values.password !== values.c_password) {
			cogoToast.warn("Confirm Password must be equal to password")
			setIsLoading(false)
			return
		}
		let userData = values
		let mainData = { ...userData, country }
		delete mainData.c_password
		try {
			const response = await signupUser(mainData)
			console.log(response)
			if (response.id) {
				cogoToast.success("Registration was successful")
				setIsLoading(false)
				history.push("/sign-in")
			}
			if (response.errors.length > 0) {
				cogoToast.warn(response.errors[0].message)
				setIsLoading(false)
			}
		} catch (error) {
			if (error) {
				cogoToast.warn("Network Error")
				setIsLoading(false)
			}
		}
	}

	const user_country = location?.country === "NG" ? "nigeria" : location?.country === "KE" ? "kenya" : location?.country === "GH" ? "ghana" : location?.country === "ZA" ? "south-africa" : ""

	console.log("User location: ", user_country)

	useEffect(() => {
		if (user_country) {
			setCountry(user_country)
		}
	}, [user_country])
	return (
		<>
			<ScrollToTop />
			<Box className={classes.items}>
				{user?.isAuth && LoggedInStatus()}
				<Grid container className={classes.box}>
					<Grid item xs={12} sm={12} md={5} className={classes.box2}>
						<Box style={{ marginBottom: "2em" }}>
							<Typography className={classes.headerText}>SIGN UP</Typography>
							<Typography variant="h2" className={classes.content}>
								Sign up with your Social Networks
							</Typography>
							<div>
								<img src={google} alt="google" className={classes.icons} />
								<img src={facebook} alt="facebook" className={classes.icons} />
							</div>
							<Typography variant="h2" className={classes.content}>
								Or fill the form below
							</Typography>
						</Box>
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values, helpers) => handleSignup(values, helpers)}>
							{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
								<>
									<FormControl variant="standard" className={classes.formControl}>
										{/* <label className={classes.label}>Super admin email</label> */}
										<TextField
											variant="outlined"
											color="secondary"
											type="text"
											fullWidth
											id="fullname"
											name="fullname"
											className={classes.textfield}
											placeholder="Full Name"
											disabled={isLoading}
											onBlur={() => setFieldTouched("fullname")}
											onChange={handleChange("fullname")}
										/>
									</FormControl>
									{errors.fullname && <ErrorMessage error={errors.fullname} visible={touched.fullname} />}
									<FormControl variant="standard" className={classes.formControl}>
										{/* <label className={classes.label}>Admin email</label> */}
										<TextField
											type="email"
											fullWidth
											id="email"
											name="email"
											className={classes.textfield}
											disabled={isLoading}
											onBlur={() => setFieldTouched("email")}
											onChange={handleChange("email")}
											color="secondary"
											variant="outlined"
											placeholder="Email Address"
										/>
									</FormControl>
									<ErrorMessage error={errors.email} visible={touched.email} />
									<FormControl variant="standard" className={classes.formControl}>
										<TextField
											type="tel"
											variant="outlined"
											color="secondary"
											disabled={isLoading}
											fullWidth
											id="phoneNumber"
											name="phoneNumber"
											onBlur={() => setFieldTouched("phoneNumber")}
											onChange={handleChange("phoneNumber")}
											className={classes.textfield}
											placeholder="Phone Number"
										/>
									</FormControl>
									<ErrorMessage error={errors.phoneNumber} visible={touched.phoneNumber} />
									<FormControl variant="standard" className={classes.formControl}>
										<Select
											className={classes.select}
											variant="outlined"
											disabled={isLoading}
											color="secondary"
											fullWidth
											value={country}
											MenuProps={{ color: "#F90" }}
											onChange={e => handleChangeCountry(e)}
											displayEmpty
											// inputProps={{ "aria-label": "Without label" }}
										>
											<MenuItem className="MuiSelect-selectMenu" disabled value={country}>
												<em>Country</em>
											</MenuItem>
											<MenuItem className={classes.menuitem} value="nigeria">
												Nigeria
											</MenuItem>
											<MenuItem className={classes.menuitem} value="kenya">
												Kenya
											</MenuItem>
											<MenuItem className={classes.menuitem} value="ghana">
												Ghana
											</MenuItem>
											<MenuItem className={classes.menuitem} value="south-africa">
												South Africa
											</MenuItem>
										</Select>
									</FormControl>
									{/* <ErrorMessage error={"errors.password"} visible={true} /> */}
									<FormControl variant="standard" className={classes.formControl}>
										<TextField
											type="password"
											variant="outlined"
											disabled={isLoading}
											color="secondary"
											fullWidth
											id="password"
											name="password"
											onBlur={() => setFieldTouched("password")}
											onChange={handleChange("password")}
											className={classes.textfield}
											placeholder="Password"
										/>
									</FormControl>
									<ErrorMessage error={errors.password} visible={touched.password} />
									<FormControl variant="standard" className={classes.formControl}>
										{/* <label className={classes.label}> Super admin password</label> */}
										<TextField
											type="password"
											variant="outlined"
											color="secondary"
											disabled={isLoading}
											fullWidth
											id="c_password"
											name="c_password"
											onBlur={() => setFieldTouched("c_password")}
											onChange={handleChange("c_password")}
											className={classes.textfield}
											placeholder="Confirm Password"
										/>
									</FormControl>
									<ErrorMessage error={errors.c_password} visible={touched.c_password} />
									<Button type="submit" onClick={handleSubmit} disabled={isLoading} variant="contained" color="secondary" disableElevation className={classes.btn}>
										{isLoading ? "Submitting..." : "Sign Up"}
									</Button>
								</>
							)}
						</Formik>
						<Box display="flex" gap="10px" className={classes.content}>
							<Typography>Already have an account?</Typography>
							<Link to="/sign-in">
								<Typography className={classes.link}>Sign In</Typography>
							</Link>
						</Box>
					</Grid>
					<Grid item xs={11} sm={11} md={5} className={classes.box1}>
						<img src={logo} alt="logo" className={classes.image1} />
						<img src={signin} alt="amico" className={classes.image} />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Register
