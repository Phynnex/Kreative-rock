import React from "react"

import freeEmailsData from "./freecardsData"
import "../../../assets/css/email-templates.css"


const FreeEmailItems = freeEmailsData.map(template => (
	<div className="div-email-temp">
		<img className="free-email-img" src={template.template} alt={"frree"} />
	</div>
))

const FreeCards = () => {
	return (
		<>
			<div className="CardGrid">{FreeEmailItems}</div>
		</>
	)
}

export default FreeCards
