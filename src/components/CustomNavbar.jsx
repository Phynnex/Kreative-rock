import { Img } from "globalStyles/style"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import Logo from "../assets/images/logo.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { useToggleNav } from "context/toggleNavContext"
import media from "utils/media"
import { useAuthContext } from "context/AuthContext"
import { DASHBOARDHOME } from "pages/dashboard/ROUTESCONTS"

const NavContainer = styled.div`
	height: 83px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0px 40px;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: fixed;
	z-index: 400;
	background-color: ${AppColors.white};
	${media.smallDesktopMinimum`
        display: none;

    `}
`
const IconDiv = styled.div`
	height: 80%;
	img {
		width: 100%;
		height: 100%;
	}
`
const NavLinksDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`

const CustomNavLink = styled(Link)`
	text-decoration: none;
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 31px;
	color: ${({ color }) => (color ? `${AppColors.newsLetterBg}` : "#202020")};
	:hover {
		color: ${AppColors.newsLetterBg};
	}
`
const CustomNavLinkSignup = styled(Link)`
	padding: 5px 20px;
	background-color: ${AppColors.brandColor};
	border-radius: 20px;
	text-align: center;
	text-decoration: none;
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: ${AppColors.white};
	:hover {
		background-color: "#EB7F29";
		color: ${AppColors.white};
	}
`
const ServicesLinkBtn = styled.button`
	background-color: transparent;
	text-align: center;
	text-decoration: none;
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: ${({ color }) => (color ? `${AppColors.newsLetterBg}` : "#202020")};
	:hover {
		color: ${AppColors.newsLetterBg};
	}
`

const DropDownContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.1);
	z-index: 500;
`

const DropDownDiv = styled.div`
	width: 250px;
	height: 155px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10spx 0px;
	gap: 2px;
	position: relative;
	background-color: ${AppColors.white};
	top: 9%;
	left: ${({ left }) => (left ? left : "50%")};
	border-radius: 3px;
	border: 1px solid #dfdbdb;
	background-color: ${AppColors.white};
`
const CustomDrpdownLinkLink = styled(Link)`
	text-decoration: none;
	width: 100%;
	/* background-color: #dfdbdb; */

	:hover {
		color: ${AppColors.newsLetterBg};
	}
`
const CustomDrpdownBtn = styled.button`
	text-decoration: none;
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 31px;
	margin-left: 10px;
	color: ${({ color }) => (color ? `${AppColors.newsLetterBg}` : "#202020")};
	:hover {
		color: ${AppColors.newsLetterBg};
	}
`
const LinkConst = ["/digital-marketing", "/email-signature", "/mobile-texting", "/brand-management"]

function CustomNavbar() {
	const { toggleNav, setToggleNav } = useToggleNav()
	const location = useLocation()
	const { user } = useAuthContext()
	const handleDropService = () => {
		setToggleNav(!toggleNav)
	}
	return (
		<NavContainer>
			<IconDiv>
				<Link to="/">
					<Img src={Logo} alt="Logo" />
				</Link>
			</IconDiv>
			<NavLinksDiv>
				<CustomNavLink color={location.pathname === "/" ? true : false} to="/">
					Home
				</CustomNavLink>
				<ServicesLinkBtn onClick={handleDropService} color={LinkConst.includes(location.pathname) ? true : false}>
					Services <KeyboardArrowDownIcon />{" "}
				</ServicesLinkBtn>
				{toggleNav && (
					<DropDownContainer onClick={handleDropService}>
						<DropDownDiv left={user?.isAuth ? "60%" : "50%"}>
							<CustomDrpdownLinkLink to="/mobile-texting">
								<CustomDrpdownBtn color={location.pathname === "/mobile-texting" ? true : false} to="/mobile-texting">
									Mobile Texting
								</CustomDrpdownBtn>
							</CustomDrpdownLinkLink>
							<CustomDrpdownLinkLink to="/email-signature">
								<CustomDrpdownBtn color={location.pathname === "/email-signature" ? true : false}>Email Signature Management</CustomDrpdownBtn>
							</CustomDrpdownLinkLink>
							<CustomDrpdownLinkLink to="/digital-marketing">
								<CustomDrpdownBtn color={location.pathname === "/digital-marketing" ? true : false}>Digital Marketing</CustomDrpdownBtn>
							</CustomDrpdownLinkLink>
							<CustomDrpdownLinkLink to="/brand-management">
								<CustomDrpdownBtn color={location.pathname === "/brand-management" ? true : false}>Brand Management</CustomDrpdownBtn>
							</CustomDrpdownLinkLink>
						</DropDownDiv>
					</DropDownContainer>
				)}
				<CustomNavLink color={location.pathname === "/pricing" ? true : false} to="/pricing">
					Pricing
				</CustomNavLink>
				<CustomNavLink color={location.pathname === "/contact-us" ? true : false} to="/contact-us">
					Contact Us
				</CustomNavLink>
				{!user?.isAuth && (
					<CustomNavLink color={location.pathname === "/sign-in" ? true : false} to="/sign-in">
						Login
					</CustomNavLink>
				)}

				{!user?.isAuth && <CustomNavLinkSignup to="/register">Sign up for free</CustomNavLinkSignup>}
				{user?.isAuth && <Link to={DASHBOARDHOME}>Dashboard</Link>}
			</NavLinksDiv>
		</NavContainer>
	)
}

export default CustomNavbar
