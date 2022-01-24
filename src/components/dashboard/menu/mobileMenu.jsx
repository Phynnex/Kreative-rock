import React from "react"
import { MobileMenuContainer, MobileMenuContainerAll, ProfileIconMobile } from "./style"

import menuToggle from "@assets/icons/menuhamburger.svg"
import { DASHBOARDHOME } from "@app/dashboard/pages/ROUTECONSTS"
import { AsgardLink, Div, Img } from "@app/globalstyles/asgard"
import Logo from "@assets/icons/logo.svg"

export default function MobileMenu({ setOpen, open, onclick, profileTog }) {
	return (
		<MobileMenuContainerAll>
			<MobileMenuContainer>
				<Div display="flex" alignI="center">
					<AsgardLink to={DASHBOARDHOME}>{/* <Img src={HomeIcon} alt="Spottr" h="30px" w="30px" /> */}</AsgardLink>
					<AsgardLink to={DASHBOARDHOME}>
						{" "}
						<Img width="100px" ml="-22px" src={Logo} alt="to wealth logo" />{" "}
					</AsgardLink>
				</Div>
				<Div padding="0px 30px 0px 0px" display="flex" alignI="center">
					<ProfileIconMobile onClick={setOpen}>
						<Img src={menuToggle} alt="user dp" height="100%" width="100%" br="50%" />
					</ProfileIconMobile>
				</Div>
			</MobileMenuContainer>
		</MobileMenuContainerAll>
	)
}
