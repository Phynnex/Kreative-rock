import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
import { Link, useLocation } from "react-router-dom"
import { Img } from "globalStyles/style"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import Logo from "../assets/images/logo.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { useToggleNav } from "context/toggleNavContext"
import media from "utils/media"
import { SlideInPopUp } from "pages/dashboard/keywords/createkeyword/style"

const MobileNavContainer = styled.div`
	height: 83px;
	width: 100%;
	display: none;
	padding: 0px 15px;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: fixed;
	z-index: 400;
	background-color: ${AppColors.white};
	${media.smallDesktopMinimum`
    display: flex;
	justify-content: space-between;

    `}
`

const MIconDiv = styled.div`
	height: 60%;
	img {
		width: 100%;
		height: 100%;
	}
	${media.smallDesktopMinimum`
    height: 50%;
    img {
		width: 70%;
		height: 70%;
	}

    `}/* ${media.tablet`
    height: 40%;
    img {
		width: 40px;
		height: 50px;
	}
	`} */
`
const MobileNavLinksDiv = styled.div`
	display: none;
	top: 83px;
	bottom: 0;
	right: 0;
	left: 0;
	flex-direction: column;
	bottom: center;
	padding: 20px 0px;
	gap: 30px;
	align-items: flex-start;
	position: fixed;
	z-index: 999999999;
	background-color: ${AppColors.white};
	${media.smallDesktopMinimum`
    display: flex;
    top: 83px;
    `}
	${media.tablet`
    top: 83px;
    `}
	${media.mobile`
    top: 83px;
	gap: 45px;
    `}
	${media.smallMobile`
    top: 83px;
	gap: 65px;
    `}
`
const ToggleHamburger = styled.div`
	display: flex;
	align-items: center;
	font-size: 46px;
`

const MCustomNavLink = styled(Link)`
	text-decoration: none;
	font-family: Lora;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	margin-left: 30px;
	line-height: 31px;
	color: ${({ color }) => (color ? `${AppColors.newsLetterBg}` : "#202020")};
	:hover {
		color: ${AppColors.newsLetterBg};
	}
`
const MCustomNavLinkSignup = styled(Link)`
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
	${media.smallDesktopMinimum`
	padding: 5px 40px;
	margin-left:25px;
	`}
	${media.tablet`
	padding: 5px 40px;
	margin-left:25px;
	`}
	${media.mobile`
	padding: 5px 0px;
	width: 87%;
	margin-left:25px;
	`}
`
const MServicesLinkBtn = styled.button`
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
	${media.smallDesktopMinimum`
		
	margin-left:25px;
	`}
	${media.tablet`
		
	margin-left:25px;
	`}
	${media.mobile`
		
	margin-left:25px;
	`}
`

const MDropDownContainer = styled.div`
	position: fixed;
	top: 0%;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(255, 255, 255, 0.1);
	z-index: 999900;
	display: ${({ open }) => (open ? "flex" : "none")};
	transition: all 0.5s ease-out;
	animation-name: ${SlideInPopUp};
	animation-duration: 0.5s;
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
	left: 50%;
	border-radius: 3px;
	border: 1px solid #dfdbdb;
	${media.smallDesktopMinimum`
	left: 3%;
	top: 200px;
	`}
	${media.tablet`
	left: 3%;
	top: 200px;
	`}
	${media.mobile`
	left: 3%;
	top: 220px;
	`}
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

function CustomMobileNav() {
	const { toggleNav, setToggleNav } = useToggleNav()
	const [mobilemenu, setMobileMenu] = useState(false)
	const location = useLocation()

	const handleMobilesDropService = () => {
		setToggleNav(!toggleNav)
	}

	const handleMobileMenuTogggle = () => {
		setMobileMenu(!mobilemenu)
	}

	return (
		<>
			<MobileNavContainer>
				<Link to="/">
					<MIconDiv>
						<Img src={Logo} alt="Logo" />
					</MIconDiv>
				</Link>
				<ToggleHamburger>
					<MenuIcon onClick={handleMobileMenuTogggle} />
				</ToggleHamburger>
			</MobileNavContainer>
			{mobilemenu && (
				<MobileNavLinksDiv>
					<MCustomNavLink color={location.pathname === "/" ? true : false} to="/" onClick={handleMobileMenuTogggle}>
						Home
					</MCustomNavLink>
					<MServicesLinkBtn onClick={handleMobilesDropService} color={LinkConst.includes(location.pathname) ? true : false}>
						Services <KeyboardArrowDownIcon />{" "}
					</MServicesLinkBtn>
					{toggleNav && (
						<MDropDownContainer open={toggleNav} onClick={handleMobilesDropService}>
							<DropDownDiv>
								<CustomDrpdownLinkLink to="/mobile-texting">
									<CustomDrpdownBtn color={location.pathname === "/mobile-texting" ? true : false} onClick={handleMobileMenuTogggle}>
										Mobile Texting
									</CustomDrpdownBtn>
								</CustomDrpdownLinkLink>
								<CustomDrpdownLinkLink to="/email-signature">
									<CustomDrpdownBtn color={location.pathname === "/email-signature" ? true : false} onClick={handleMobileMenuTogggle}>
										Email Signature Management
									</CustomDrpdownBtn>
								</CustomDrpdownLinkLink>
								<CustomDrpdownLinkLink to="/digital-marketing">
									<CustomDrpdownBtn color={location.pathname === "/digital-marketing" ? true : false} onClick={handleMobileMenuTogggle}>
										Digital Marketing
									</CustomDrpdownBtn>
								</CustomDrpdownLinkLink>
								<CustomDrpdownLinkLink to="/brand-management">
									<CustomDrpdownBtn color={location.pathname === "/brand-management" ? true : false} onClick={handleMobileMenuTogggle}>
										Brand Management
									</CustomDrpdownBtn>
								</CustomDrpdownLinkLink>
							</DropDownDiv>
						</MDropDownContainer>
					)}
					<MCustomNavLink color={location.pathname === "/pricing" ? true : false} to="/pricing" onClick={handleMobileMenuTogggle}>
						Pricing
					</MCustomNavLink>
					<MCustomNavLink color={location.pathname === "/contact-us" ? true : false} to="/contact-us" onClick={handleMobileMenuTogggle}>
						Contact Us
					</MCustomNavLink>
					<MCustomNavLink color={location.pathname === "/sign-in" ? true : false} to="/sign-in" onClick={handleMobileMenuTogggle}>
						Login
					</MCustomNavLink>
					<MCustomNavLinkSignup to="/register" onClick={handleMobileMenuTogggle}>
						Sign up for free
					</MCustomNavLinkSignup>
				</MobileNavLinksDiv>
			)}
		</>
	)
}

export default CustomMobileNav
