import React, { useEffect } from "react"
import { useAuthContext } from "context/AuthContext"
import { LogoutDiv, LogoutdropContainer } from "./style"
import loading from "assets/images/logo.png"
import { Img, KreativeP } from "globalStyles/style"
import { useHistory } from "react-router-dom"

function LogoutPage() {
	const { setUser } = useAuthContext()
	const history = useHistory()

	useEffect(() => {
		setTimeout(() => {
			history.push("/sign-in")
			setUser({
				isAuth: false,
				token: "",
				refreshToken: "",
				data: {}
			})
		}, 2000)
	})
	return (
		<LogoutdropContainer show={true}>
			<LogoutDiv>
				<Img width="100px" height="30px" src={loading} alt="Logout" />
				<KreativeP tAlign="center">Logging out...</KreativeP>
			</LogoutDiv>
		</LogoutdropContainer>
	)
}

export default LogoutPage
