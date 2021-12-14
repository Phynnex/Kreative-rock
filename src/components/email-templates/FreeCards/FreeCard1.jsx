import React from "react"
import freeMan from "../../../assets/images/freeMan.png"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedinIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(42),
			height: theme.spacing(36)
		}
	}
}))

const FreeCard1 = () => {
	const classes = useStyles()

	return (
		<>
			<div className={classes.root}>
				<Paper elevation={2}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							marginTop: "1.7rem"
						}}
					>
						<div
							style={{
								marginTop: "1.5rem"
							}}
						>
							<img src={freeMan} alt="" />
						</div>
						<div>
							<p>Name : Justin</p>
							<p>Profession: Freelancer</p>
							<p>Phone: +097676465</p>
							<p>Mobile: +0382971</p>
							<p>Company: Kreative</p>
							<div
								style={{
									display: "flex",
									justifyContent: "space-around"
									// background: "black",
									// color: "black",
								}}
							>
								<FacebookIcon />
								<InstagramIcon />
								<LinkedinIcon />
								<TwitterIcon />
							</div>
						</div>
					</div>
				</Paper>
			</div>
		</>
	)
}

export default FreeCard1
