import { Grid, Box, Typography, Button, TextField, FormControl, MenuItem, Select } from "@material-ui/core"
import React, { useState } from "react"
import logo from "../../assets/images/logoimg.png"
import signin from "../../assets/images/signin.png"
import facebook from "../../assets/images/facebook2.png"
import google from "../../assets/images/google.png"
import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
import ScrollToTop from "components/ScrollToTop"
import "./style.css"
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
		fontSize: 18,
		padding: "10px 25px",
		[theme.breakpoints.down("sm")]: {
			width: "100%"
		}
	},
	formControl: {
		marginBottom: "2em"
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
	const [country, setCountry] = useState("")
	const classes = useStyles()
	const handleChange = e => {
		setCountry(e.target.value)
	}
	return (
		<>
			<ScrollToTop />
			<Box className={classes.items}>
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

						<FormControl variant="standard" className={classes.formControl}>
							{/* <label className={classes.label}>Super admin email</label> */}
							<TextField variant="outlined" color="secondary" fullWidth id="fullWidth" className={classes.textfield} placeholder="Full Name" />
						</FormControl>

						<FormControl variant="standard" className={classes.formControl}>
							{/* <label className={classes.label}>Admin email</label> */}
							<TextField color="secondary" variant="outlined" fullWidth id="fullWidth" className={classes.textfield} placeholder="Email Address" />
						</FormControl>
						<FormControl variant="standard" className={classes.formControl}>
							{/* <label className={classes.label}> Super admin password</label> */}
							<TextField variant="outlined" color="secondary" fullWidth id="fullWidth" className={classes.textfield} placeholder="Phone Number" />
						</FormControl>
						<FormControl variant="standard" className={classes.formControl}>
							<Select
								className={classes.select}
								variant="outlined"
								color="secondary"
								fullWidth
								id="fullWidth"
								value={country}
								MenuProps={{ color: "#F90" }}
								onChange={e => handleChange(e)}
								displayEmpty
								// inputProps={{ "aria-label": "Without label" }}
							>
								<MenuItem className="MuiSelect-selectMenu" value={country}>
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
								<MenuItem className={classes.menuitem} value="south africa">
									South Africa
								</MenuItem>
							</Select>
							{/* <label className={classes.label}> Super admin password</label> */}
							{/* <TextField variant="outlined" color="secondary" fullWidth id="fullWidth" className={classes.textfield} placeholder="Country" /> */}
						</FormControl>
						<FormControl variant="standard" className={classes.formControl}>
							{/* <label className={classes.label}> Super admin password</label> */}
							<TextField variant="outlined" color="secondary" fullWidth id="fullWidth" className={classes.textfield} placeholder="Password" />
						</FormControl>
						<FormControl variant="standard" className={classes.formControl}>
							{/* <label className={classes.label}> Super admin password</label> */}
							<TextField variant="outlined" color="secondary" fullWidth id="fullWidth" className={classes.textfield} placeholder="Confirm Password" />
						</FormControl>

						<Button variant="contained" color="secondary" disableElevation className={classes.btn}>
							Sign Up
						</Button>
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
