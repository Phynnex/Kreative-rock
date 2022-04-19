import React from "react"
import { AutoResSelect } from "./style"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { useQuery } from "react-query"
import { getUserKeywords } from "services/keywordService"

function CustomSelectAutoresponse({ onChange, name, ...rest }) {
	const { data: keywords } = useQuery("keywords", getUserKeywords)

	return (
		<AutoResSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option value="">Select Keyword</option>
				{keywords?.payload?.map(keyword => (
					<option key={keyword?.id} keyword value={keyword?.id}>
						{keyword?.keyword}
					</option>
				))}
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</AutoResSelect>
	)
}

export default CustomSelectAutoresponse
