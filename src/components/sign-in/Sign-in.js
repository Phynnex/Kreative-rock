import React, { useEffect, useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { Grid, Box, Typography } from "@material-ui/core"
import logo from "../../assets/images/logoimg.png"
import signin from "../../assets/images/signin.png"
import facebook from "../../assets/images/facebook2.png"
import google from "../../assets/images/google.png"
import { makeStyles } from "@material-ui/core"
import { LoginBtn, LoginContDiv, LoginTextField } from "./style"
import { Link, Redirect, useHistory } from "react-router-dom"
import cogoToast from "cogo-toast"
import ErrorMessage from "components/common/ErrorMessage"
import { loginUser } from "services/AuthService"
import { useKreativeUser } from "context/userDetailsContext"
import { useAuthContext } from "context/AuthContext"
import { DASHBOARDHOME } from "pages/dashboard/ROUTESCONTS"
const useStyles = makeStyles(theme => ({
	items: {
		paddingTop: "4em",
		marginBottom: "1em"
	},
	box: {
		paddingTop: "2em",
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
			paddingTop: "-4em"
			// paddingTop: "2em"
			// height: "100%",
		}
	},
	box1: {
		display: "flex",
		// justifyContent: "center",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	box2: {
		boxShadow: "2px 7px 10px 2px rgba(168,161,161,0.75)",
		padding: "3em",
		display: "flex",
		gap: "30px",
		flexDirection: "column",
		// justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			justifyContent: "center",
			padding: "20px 0px",
			height: "60vh",
			gap: "30px",
			flexDirection: "column"
			// padding: "1.5em"
		},
		[theme.breakpoints.down("xs")]: {
			display: "flex",
			justifyContent: "center",
			height: "80vh",
			gap: "40px",
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
		fontSize: 18,
		marginBottom: "-3rem",
		// marginTop: "-7rem",
		// padding: "10px 25px",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	},
	formControl: {
		// marginBottom: "-3rem"
	},
	label: {
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
		"&:hover": {
			color: "#00CCA7"
		}
	},
	LinkArea: {
		display: "flex",
		gap: "10px",
		color: "#373737"
	},
	textfield: {
		marginTop: "-70px"
	}
}))
const SignIn = () => {
	const [isLoading, setisLoading] = useState(false)
	const classes = useStyles()
	const { kreativerUser, setKreativeUser } = useKreativeUser()
	const { user, setUser } = useAuthContext()
	const history = useHistory()

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Email is a required field").email().label("email"),
		password: Yup.string().min(8).required().label("Password")
	})
	const handleLogin = async (data, helpers) => {
		setisLoading(true)
		try {
			const response = await loginUser(data)
			if (response?.errors?.length > 0) {
				setisLoading(false)
				helpers.setSubmitting(false)
				cogoToast.error(`${response?.errors[0]?.message}`, { hideAfter: 5 })
			}
			if (response?.token) {
				setisLoading(false)
				helpers.setSubmitting(false)

				setUser({
					isAuth: true,
					data: { user: response?.user, token: response?.token }
				})
				setKreativeUser({
					...kreativerUser
				})
				cogoToast.success("Login was Success!", { hideAfter: 5 })
				setTimeout(() => {
					history.push(DASHBOARDHOME)
				}, 2000)
				return
			}
		} catch (error) {
			if (error) {
				setisLoading(false)
				helpers.setSubmitting(false)
				cogoToast.error("Network Error", { hideAfter: 5 })
				// console.log(error)
				//   cogoToast.success(`${response?.Error}`, { hideAfter: 5 })
			}
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	function LoggedInStatus() {
		return <Redirect to={DASHBOARDHOME} />
	}
	return (
		<>
			<Box className={classes.items}>
				{user?.isAuth && LoggedInStatus()}
				<Grid container className={classes.box}>
					<Grid item xs={12} sm={12} md={5} className={classes.box2}>
						<Box style={{ marginBottom: "-1em" }}>
							<Typography className s={classes.headerText}>
								SIGN IN
							</Typography>
							<Typography variant="h2" className={classes.content}>
								Sign in with your Social Networks
							</Typography>
							<div>
								<img src={google} alt="google" className={classes.icons} />
								<img src={facebook} alt="facebook" className={classes.icons} />
							</div>
							<Typography variant="h2" className={classes.content}>
								Or the from below
							</Typography>
						</Box>

						<LoginContDiv>
							<Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={(values, helpers) => handleLogin(values, helpers)}>
								{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
									<>
										<LoginTextField
											error={errors.email}
											autoComplete="off"
											autoFill="off"
											type="email"
											name="email"
											disabled={isLoading}
											onBlur={() => setFieldTouched("email")}
											onChange={handleChange("email")}
											placeholder="Email"
										/>
										<ErrorMessage mt="-15px" error={errors.email} visible={touched.email} />
										<LoginTextField
											autoComplete="off"
											type="password"
											name="password"
											disabled={isLoading}
											onBlur={() => setFieldTouched("password")}
											onChange={handleChange("password")}
											placeholder="Password"
										/>
										<ErrorMessage mt="-15px" error={errors.password} visible={touched.password} />
										<LoginBtn type="submit" onClick={handleSubmit} disabled={isLoading}>
											{isLoading ? "Loading..." : "Sign In"}
										</LoginBtn>
									</>
								)}
							</Formik>
							<Box className={classes.LinkArea}>
								<Typography>Don't have an account?</Typography>
								<Link to="/register" disabled={isLoading}>
									<Typography className={classes.link}>Sign Up</Typography>
								</Link>
							</Box>
						</LoginContDiv>
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

export default SignIn
