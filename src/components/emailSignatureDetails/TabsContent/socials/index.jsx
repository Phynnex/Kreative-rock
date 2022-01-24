import { KreativeP } from "globalStyles/style"
import fb from "assets/images/facebook.png"
import twitter from "assets/images/twitter.png"
import linkedin from "assets/images/linkedin1.png"
import instagram from "assets/images/camera.png"

import { EsocialContainer, SocialInput, CaptionContent, AddMoreBtn } from "./style"
import EsSocialInput from "./form"
function EsSocial() {
	return (
		<EsocialContainer>
			<br />
			<br />
			<CaptionContent>
				<KreativeP>Caption</KreativeP>
				<SocialInput type="text" placeholder="Follow me" />
			</CaptionContent>
			<CaptionContent>
				<KreativeP>Link social accounts</KreativeP>
			</CaptionContent>
			<EsSocialInput icon={fb} title="facebook" placeholder="https://facebook.com/username" />
			<EsSocialInput icon={instagram} title="Instagram" placeholder="https://instagram.com/username" />
			<EsSocialInput icon={linkedin} title="Linkedin" placeholder="https://linkedin.com/username" />
			<EsSocialInput icon={twitter} title="Twitter" placeholder="https://twitter.com/username" />
			<CaptionContent>
				<KreativeP>Add More</KreativeP>
				<AddMoreBtn>Pro</AddMoreBtn>
			</CaptionContent>
		</EsocialContainer>
	)
}

export default EsSocial
