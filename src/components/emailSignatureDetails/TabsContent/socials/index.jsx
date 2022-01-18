import { Div, Img, KreativeP } from "globalStyles/style"
import fb from "assets/images/facebook.png"
import twitter from "assets/images/twitter.png"
import linkedin from "assets/images/linkedin1.png"
import instagram from "assets/images/camera.png"
import DetailsInuput from "../../CustomInput/detailsInuput"
import { EsocialContainer } from "./style"
function EsSocial() {
	return (
		<EsocialContainer>
			<DetailsInuput label="Caption" placeholder="Follow me" />
			<KreativeP>Link social accounts</KreativeP>
			<DetailsInuput label={<Img width="30px" height="30px" src={fb} alt="Facebook" />} placeholder="https://facebook.com/username" />
			<DetailsInuput label={<Img width="30px" height="30px" src={instagram} alt="Instagram" />} placeholder="https://instagram.com/username" />
			<DetailsInuput label={<Img width="30px" height="30px" src={linkedin} alt="Linkedin" />} placeholder="https://linkedin.com/username" />
			<DetailsInuput label={<Img width="30px" height="30px" src={twitter} alt="Twitter" />} placeholder="https://twitter.com/username" />
			<DetailsInuput label="Add more" placeholder="Pro" type="button" />
		</EsocialContainer>
	)
}

export default EsSocial
