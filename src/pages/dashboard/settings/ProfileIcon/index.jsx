import React, { useRef, useState } from "react"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import dpPickBtn from "assets/images/pickImg.svg"
import { Img } from "globalStyles/style"
import cogoToast from "cogo-toast"
import { changeProfilePicture, getCurrentUser } from "services/userService"
import { useQuery, useQueryClient } from "react-query"
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
	const queryClient = useQueryClient()
	function handlePickImage() {
		ProfileRef.current.click()
	}
	const handleSubmitDp = e => {
		setProImage(e.target.files[0])
		// console.log(e.target.files[0]);
		handChangePassport(e.target.files)
	}

	const handChangePassport = async file => {
		console.log("We got here main")
		let formData = new FormData()
		formData.append("profilePicture", file[0])
		try {
			const response = await changeProfilePicture(formData)
			console.log("Response Dp", response?.data)
			if (response?.data) {
				setProImage(null)
				queryClient.invalidateQueries("userData")
				cogoToast.success(response?.data)
			}
		} catch (error) {
			console.log(error, "Hello")
			if (error && error) {
				setProImage(null)
				cogoToast.error("ProfilePicure uploaded Failed")
			} else {
				setProImage(null)
				cogoToast.error("Unexpected Error, Network Failed")
			}
		}
	}

	const { data } = useQuery("userData", getCurrentUser)
	const userData = data?.data?.profile?.personalInformation

	return (
		<ProDiv>
			<Img src={proImage ? URL.createObjectURL(proImage) : userData?.profilePicture} alt="profile dp" />
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
