import React from "react"
import { useLocation } from "react-router-dom"
import { MenuIcon, MenuIconContainer, MenuItem, MenuText } from "./style"
import { KNavLink, Div } from "globalStyles/style"

export default function BigMenu({ icon, text, isActive, link, active, onToggleNa }) {
	const location = useLocation()

	return (
		<KNavLink to={link} onClick={onToggleNa}>
			<MenuItem active={location?.pathname === link ? true : link.includes(location.pathname.split("/")[2]) ? true : false}>
				<MenuIconContainer>
					<MenuIcon src={icon} />
				</MenuIconContainer>
				<Div display="flex" justify="space-between">
					<MenuText>{text}</MenuText>{" "}
				</Div>
			</MenuItem>
		</KNavLink>
	)
}
