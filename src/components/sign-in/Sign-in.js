import { Grid, Box, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import logo from "../../assets/images/logoimg.png"
import signin from "../../assets/images/signin.png"
import facebook from "../../assets/images/facebook2.png"
import google from "../../assets/images/google.png"
import { makeStyles } from "@material-ui/core"
import { LoginBtn, LoginContDiv, LoginTextField } from "./style"
import { Link } from "react-router-dom"

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
	const classes = useStyles()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Box className={classes.items}>
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
							<LoginTextField type="email" placeholder="Email" />
							<LoginTextField type="password" placeholder="Password" />
							<LoginBtn>Sign In</LoginBtn>
							<Box className={classes.LinkArea}>
								<Typography>Don't have an account?</Typography>
								<Link to="/register">
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
