import React from "react"
import { BigMenuItemsContainer, MenuContainer, MenuContainerMobile, MobileMenBody, ToggleBtnContainer, UserDP, UserInfoMenuContainer } from "./style"
import BigMenu from "./bigMenu"
import { Div, Img, KreativeP } from "globalStyles/style"
import { useLocation } from "react-router-dom"
import { useAdminMenu } from "context/adminMenu"
import userDp from "assets/images/userIcon1.svg"
import cancelBtn from "assets/images/cancel.svg"
import PhoneInput from "react-phone-input-2"
import { useToggleMenu } from "context/toggleMenuContext"
import ScrollToTop from "components/ScrollToTop"
import { useQuery } from "react-query"
import { getCurrentUser } from "services/userService"

export default function Menu() {
	const { adminMenu } = useAdminMenu()
	const location = useLocation()
	const { toggleMenu, setToggleMenu } = useToggleMenu()

	const handleOpenBigSideNav = event => {
		setToggleMenu(!toggleMenu)
	}
	const handleOpenBigSideNav2 = event => {
		event.stopPropagation()
	}
	const { data } = useQuery("userData", getCurrentUser)
	const userData = data?.data?.profile?.personalInformation


	return (
		<Div>
			<MenuContainer>
				<UserInfoMenuContainer>
					<PhoneInput
						country={userData?.country === "nigeria" ? "ng" : userData?.country === "kenya" ? "ke" : userData?.country === "south-africa" ? "za" : userData?.country === "ghana" ? "gh" : "ng"}
						buttonStyle={{ marginLeft: "75%", height: "40px", width: "70px", background: "transparent", border: "none" }}
						inputStyle={{ display: "none" }}
						containerStyle={{ justifySelf: "flex-end" }}
						onlyCountries={["ng", "gh", "za", "ke"]}
						dropdownStyle={{ position: "relative", marginLeft: "-170%", width: "250%" }}
					/>
					<UserDP>
						<Img src={userData?.profilePicture ? userData?.profilePicture : userDp} alt="User Dp" />
					</UserDP>
					<KreativeP tAlign="center">{userData?.fullname?.split(" ")[0]}</KreativeP>
				</UserInfoMenuContainer>
				<BigMenuItemsContainer>
					{adminMenu?.map((menu, i) => (
						<BigMenu
							link={menu.link}
							text={menu.text}
							key={i}
							icon={location?.pathname === menu.link ? menu.activeIcon : menu.link.includes(location.pathname.split("/")[2]) ? menu.activeIcon : menu.icon}
						/>
					))}
				</BigMenuItemsContainer>
			</MenuContainer>

			<MobileMenBody open={toggleMenu} onClick={handleOpenBigSideNav}>
				<ScrollToTop />
				<MenuContainerMobile open={toggleMenu} onClick={handleOpenBigSideNav2}>
					<UserInfoMenuContainer>
						<ToggleBtnContainer>
							<Img src={cancelBtn} alt="Close Dashboard" onClick={handleOpenBigSideNav} />
						</ToggleBtnContainer>
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
						<KreativeP tAlign="center">{userData?.fullname?.split(" ")[0]}</KreativeP>
					</UserInfoMenuContainer>
					<BigMenuItemsContainer>
						{adminMenu?.map((menu, i) => (
							<BigMenu
								onToggleNa={handleOpenBigSideNav}
								link={menu.link}
								text={menu.text}
								key={i}
								icon={location?.pathname === menu.link ? menu.activeIcon : menu.link.includes(location.pathname.split("/")[2]) ? menu.activeIcon : menu.icon}
							/>
						))}
					</BigMenuItemsContainer>
				</MenuContainerMobile>
			</MobileMenBody>
		</Div>
	)
}
