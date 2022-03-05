import React, { useRef, useState } from "react"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import userPri from "assets/images/userdp.png"
import dpPickBtn from "assets/images/pickImg.svg"
import { Img } from "globalStyles/style"
const ProDiv = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: ${AppColors.grey};
	img {
		min-width: 100%;
		max-width: 100%;
		max-height: 100%;
		min-height: 100%;
		border-radius: 50%;
	}
`

const ProInnerDiv = styled.div`
	width: 100px;
	height: 100px;
	margin-top: -100px;
	border-radius: 50%;
	position: relative;
`
const ProBtnPickDiv = styled.div`
	width: 25px;
	height: 25px;
	top: 75%;
	right: 10%;
	border-radius: 50%;
	position: absolute;
	cursor: pointer;
`

function ProfileIcon() {
	const [proImage, setProImage] = useState(null)
	const ProfileRef = useRef()

	function handlePickImage() {
		ProfileRef.current.click()
	}
	const handleSubmitDp = e => {
		setProImage(e.target.files[0])
		// console.log(e.target.files[0]);
	}
	return (
		<ProDiv>
			<Img src={proImage ? URL.createObjectURL(proImage) : userPri} alt="profile dp" />
			<ProInnerDiv>
				<ProBtnPickDiv onClick={handlePickImage}>
					<Img src={dpPickBtn} alt="profile picker button" />
				</ProBtnPickDiv>
			</ProInnerDiv>
			<input ref={ProfileRef} style={{ display: "none" }} onChange={handleSubmitDp} type="file" accept="image/*" multiple={false} />
		</ProDiv>
	)
}

export default ProfileIcon
