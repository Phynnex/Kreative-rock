import { KreativeP } from "globalStyles/style"
import React from "react"
import AppColors from "utils/colors"
import FreeTemp1 from "./free/one"
import { SBody, Shead, Span } from "./style"

function SelectedTemplate() {
	return (
		<SBody>
			<Shead>
				You are using <span className="sec-color">Free templet</span>, thats Good
			</Shead>
			<FreeTemp1 />
		</SBody>
	)
}

export default SelectedTemplate
