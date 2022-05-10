import React, {useState} from "react"
import { CopyBody, CopyBodyItem, CopyBtnRef } from "./style"
import copyIcon from "assets/images/copy_ref.svg"
import { Img, KreativeP } from "globalStyles/style"
import { useAuthContext } from "context/AuthContext"

function Copylink() {
	const { user } = useAuthContext()
	const referralCode = user?.data.user.referralCode
	const regUrl = `http://kreativerock.com/register-ref/${referralCode}`

	const [copy, setCopy] = useState(false)

	const handleCopyReferral = () => {
		navigator.clipboard.writeText(`${regUrl}`)
		setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 2000)
	}

	return (
		<CopyBody>
			<KreativeP mb="5px">Your Invite Link</KreativeP>
			<CopyBodyItem>
				<KreativeP color="#a0a0a0">{regUrl}</KreativeP>
				<CopyBtnRef
					onClick={handleCopyReferral}
				>
					<Img src={copyIcon} alt="copy" />
					<p>{copy ? 'Copied' : 'Copy link'}</p>
				</CopyBtnRef>
			</CopyBodyItem>
		</CopyBody>
	)
}

export default Copylink
