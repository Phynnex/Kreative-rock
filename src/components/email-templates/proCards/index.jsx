import React from "react"

import "../../../assets/css/email-templates.css";
import proEmailsData from "./procardData"

const ProEmailItems = proEmailsData.map(template => (
	<div className="div-email-temp">
		<img className="free-email-img" src={template.template} alt={"frree"} />
	</div>
))

const ProCards = () => {
	return (
		<>
			<div className="CardGrid">{ProEmailItems}</div>
		</>
	)
}

export default ProCards
