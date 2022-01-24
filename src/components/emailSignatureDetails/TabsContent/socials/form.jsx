import { Img } from "globalStyles/style"
import { SocialInput, SocialInputContent } from "./style"

function EsSocialInput({ icon, title, type = "text", ...rest }) {
	return (
		<SocialInputContent>
			<Img src={icon} alt={title} />
			<SocialInput type={type} {...rest} />
		</SocialInputContent>
	)
}

export default EsSocialInput
