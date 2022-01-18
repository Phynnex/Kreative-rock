// import styles from "../../../../assets/css/email-sig-details.module.css"

import { Div, Img, KreativeP } from "globalStyles/style"
import DetailsInuput from "../../CustomInput/detailsInuput"
import { DetailsBody, EsFilePicker, EsFilePickerItems, EsTopSec } from "./style"
import uploadicon from "assets/images/uploadicon.png"
const EmailSigDetails = () => {
	return (
		<DetailsBody>
			<Div ml="40px">
				<EsTopSec>
					<h2 className="mt-4">Signature Details</h2>

					<EsFilePicker>
						<EsFilePickerItems>
							<Img src={uploadicon} alt="upload picture" />
							<KreativeP>Upload Image</KreativeP>
						</EsFilePickerItems>
					</EsFilePicker>
				</EsTopSec>

				<form className="bg-white w-100">
					<DetailsInuput label="Name" />
					<DetailsInuput label="Company" />
					<DetailsInuput label="Position" />
					<DetailsInuput label="Phone" />
					<DetailsInuput label="Mobile" />
					<DetailsInuput label="Website" />
					<DetailsInuput label="Email" />
					<DetailsInuput label="Address" />
					<DetailsInuput label="Skype" />
					<DetailsInuput label="Departement" />
				</form>
			</Div>
		</DetailsBody>
	)
}

export default EmailSigDetails
