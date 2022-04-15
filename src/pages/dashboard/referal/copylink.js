import React from "react"
import { CopyBody, CopyBodyItem, CopyBtnRef } from "./style"
import copyIcon from "assets/images/copy_ref.svg"
import { Img, KreativeP } from "globalStyles/style"

function Copylink() {
	return (
		<CopyBody>
			<KreativeP mb="5px">Your Invite Link</KreativeP>
			<CopyBodyItem>
				<KreativeP color="#a0a0a0">http://kreativerock.com</KreativeP>
				<CopyBtnRef>
					<Img src={copyIcon} alt="copy" />
					<p>Copy link</p>
				</CopyBtnRef>
			</CopyBodyItem>
		</CopyBody>
	)
}

export default Copylink
