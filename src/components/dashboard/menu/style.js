import styled, { css } from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const MenuContainer = styled.div`
	width: 230px;
	border-radius: 1.93988px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.5);
	border: 1px solid #e4e7eb;
	margin-top: 84px;
	transition: all 0.5s ease-in-out;
	${media.smallDesktopMinimum`
        display: none;
	
    `}
`
export const MenuContainerMobile = styled.div`
	width: 230px;
	border-radius: 1.93988px;
	display: none;
	flex-direction: column;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.5);
	border: 1px solid #e4e7eb;
	/* display:none; */
	padding-top: 5px;
	/* padding-left: 15px;
	padding-right: 10px; */
	/* overflow-y: scroll; */
	transition: all 0.5s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	/* overflow: auto; */
	${media.smallDesktopMinimum`
        display: flex;
		top:0px;
		background: rgba(255, 255, 255, 1);
		position:fixed;
		z-index:400;
    `}
`

export const MenuItem = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	width: 100%;
	margin-top: 5px;
	height: 40px;
	font-style: normal;
	font-weight: 500;
	color: ${AppColors.black};
	border: none;
	${({ active }) =>
		active
			? css`
					background: #00cca7;
					color: ${AppColors.white};
					border-radius: 1px;
					border-left: 6px solid #80e6d3;
			  `
			: css`
					background: transparent;
					color: ${AppColors.black2};
					border-left: 6px solid transparent;
			  `}

	padding-left: 10px;
	cursor: pointer;
`
export const MenuText = styled.small`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	margin-left: 15px;
`

export const MenuIcon = styled.img`
	width: 20px;
	height: 20px;
	margin-left: 6px;
	margin-left: ${({ marginLeft }) => (marginLeft ? 20 : null)};
`

export const BigMenuItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	max-height: 100vh;
	${media.smallDesktopMinimum`
	height: 66vh;
	max-height: 66vh;

	`}
	${media.tablet`
	height: 66vh;
	
	overflow-y:scroll;
	`}
	${media.mobile`
	height: 0%;
	/* max-height: 75vh; */
	overflow-y:scroll;
	`}
	${media.smallMobile`
	overflow-y:scroll;
	height: 66vh;
	
	`}
`

export const MenuDropdownIcon = styled.img`
	margin-top: 10px;
	width: 10px;
	margin-left: 5px;
`

export const MenuIconContainer = styled.div`
	display: flex;
	justify-content: space-between;
`
export const MobileMenuContainer = styled.div`
	display: none;
	> img {
		cursor: pointer;
		z-index: 7;
	}

	${media.smallDesktopMinimum`
  /* margin-top: -15px; */
        justify-content:space-between;
        top:0;
        position:fixed;
        display: flex;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        height: 50px;
        width: 100%;
        padding:0px 0px 0px 20px;
        background-color: #FFF;
        z-index:100;
    `}
	${media.tablet`
  /* margin-top: -15px; */
        justify-content:space-between;
        top:0;
        position:fixed;
        display: flex;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        height: 50px;
        width: 100%;
        padding:0px 0px 0px 20px;
        background-color: #FFF;
        z-index:100;
    `}
`
export const MobileMenuContainerAll = styled.div`
	display: none;
	position: absolute;
	top: 0;

	${media.smallDesktop`
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: transparent;
        padding: 0 0 0 0px;
    `}
	${media.tablet`
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: transparent;
        padding: 0 0 0 0px;
    `}
`
export const UserInfoMenuContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		max-width: 100%;
		max-height: 100%;
		border-radius: 50%;
	}
	p {
		font-weight: bold;
		margin-top: 5px;
	}
`
export const UserDP = styled.div`
	width: 6.5rem;
	height: 6.5rem;
	background: grey;
	border-radius: 50%;
	margin-top: 40px;
`

export const MenuToggleContainer = styled.div`
	position: fixed;
	left: 15px;
	top: 30px;
	display: ${({ open }) => (open ? "none" : "")};
	cursor: pointer;
`

export const ProfileIconMobile = styled.div`
	height: 32px;
	width: 32px;
	padding: 0px 10px;
	display: flex;
	align-items: center;
	color: #fff;
	padding: 2px;
	background: rgba(255, 255, 255, 0.22);
	mix-blend-mode: normal;
	border-radius: 24.5px;
	cursor: pointer;
	margin-right: 10px;
`
export const ToggleBtnContainer = styled.div`
	height: 32px;
	width: 90%;
	display: none;
	justify-content: flex-end;
	align-items: center;
	img {
		width: 15px;
		height: 15px;
	}
	${media.smallDesktopMinimum`
	display: flex;
	`}
`
export const MobileMenBody = styled.div`
	position: fixed;
	display: none;
	top: 0;
	left: 0;
	bottom: 0;
	/* overflow-y: scroll; */
	right: 0;
	z-index: 999999999;
	background: rgba(0, 0, 0, 0.22);
	transition: all 0.2s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	${media.smallDesktopMinimum`
	display:flex;
	
	`}
`
