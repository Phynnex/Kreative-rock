import React from "react"
import "../../assets/css/email-templates.css"
import vector from "../../assets/images/Vector4ee.png"
import Container from "@material-ui/core/Container"

const HeroBanner = () => {
	return (
		<>
			<br />
			<br />
			<div>
				<img src={vector} alt="" className="hero-img" />
			</div>
			<Container>
				<p style={{ textAlign: "center", fontSize: "30px", marginTop: "-2rem" }}>Choose from our read ready-made Templates</p>
			</Container>
		</>
	)
}

export default HeroBanner
