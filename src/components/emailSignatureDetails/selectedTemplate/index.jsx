import React from "react"
import FreeTemp1 from "./free/one"
import { Previewtext, SBody, Shead } from "./style"

function SelectedTemplate() {
	return (
		<SBody>
			<Shead>
				You are using <span className="sec-color">Free templet</span>, thats Good
			</Shead>
			<Previewtext>Preview your details</Previewtext>
			<FreeTemp1 />
			<br />
			<br />
			<br />
			<FreeTemp1 />
		</SBody>
	)
}

export default SelectedTemplate
