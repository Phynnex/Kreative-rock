import React, { useState } from "react"
import { BigMenuItemsContainer, MenuContainer, MenuToggleContainer, UserDP, UserInfoMenuContainer } from "./style"
import BigMenu from "./bigMenu"
import { Div, Img, KreativeP } from "globalStyles/style"
import { useLocation } from "react-router-dom"
import { useAdminMenu } from "context/adminMenu"
import userDp from "assets/images/userdp.png"
import PhoneInput from "react-phone-input-2"

export default function Menu() {
	const { adminMenu } = useAdminMenu()
	const location = useLocation()
	const [navStatus, setNavStatus] = useState(true)
	const handleOpenBigSideNav = event => {
		setNavStatus(true)
	}

	return (
		<Div>
			<MenuContainer open={navStatus}>
				<UserInfoMenuContainer>
					<PhoneInput
						country={"ng"}
						buttonStyle={{ marginLeft: "75%", height: "40px", width: "70px", background: "transparent", border: "none" }}
						inputStyle={{ display: "none" }}
						containerStyle={{ justifySelf: "flex-end" }}
						onlyCountries={["ng", "gh", "za", "ke"]}
						dropdownStyle={{ position: "relative", marginLeft: "-170%", width: "250%" }}
					/>
					<UserDP>
						<Img src={userDp} alt="User Dp" />
					</UserDP>
					<KreativeP tAlign="center">Ebube</KreativeP>
				</UserInfoMenuContainer>
				<BigMenuItemsContainer>
					{adminMenu?.map((menu, i) => (
						<BigMenu link={menu.link} text={menu.text} key={i} icon={location?.pathname === menu.link ? menu.activeIcon : menu.icon} />
					))}
				</BigMenuItemsContainer>
			</MenuContainer>
		</Div>
	)
}
