import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import AppColors from "../utils/colors"

export const ALink = styled(Link)`
	text-decoration: none;
	text-align: center;
	width: 100%;
`
export const KDiv = styled.div`
	width: ${({ width }) => (width ? width : null)};
	height: ${({ height }) => (height ? height : null)};
	margin: ${({ margin }) => (margin ? margin : null)};
	padding: ${({ padding }) => (padding ? padding : `1rem`)};
	display: ${({ display }) => display};
	flex-wrap: ${({ wrap }) => wrap};
	align-items: ${({ alignI }) => alignI};
	align-self: ${({ align }) => (align ? align : null)};
	justify-content: ${({ justify }) => (justify ? justify : null)};
	background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : `white`)};
	background-image: ${({ image }) => (image ? `url(${image})` : null)};
	background-size: cover;
	background-repeat: no-repeat;
	border: ${({ border }) => (border ? `1px solid #e5e5e5;` : null)};
	border-radius: 5px;
`

export const Div = styled.div`
	width: ${({ width }) => (width ? width : null)};
	height: ${({ height }) => (height ? height : null)};
	margin: ${({ margin }) => (margin ? margin : null)};
	padding: ${({ padding }) => (padding ? padding : null)};
	display: ${({ display }) => display};
	align-items: ${({ alignI }) => alignI};
	flex: ${({ fg }) => (fg ? fg : null)};
	align-self: ${({ align }) => (align ? align : null)};
	margin: ${({ margin }) => (margin ? margin : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ ml }) => (ml ? ml : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	display: ${({ display }) => display || null};
	flex-direction: ${({ fd }) => fd || null};
	flex-wrap: ${({ wrap }) => wrap || null};
	justify-content: ${({ justify }) => (justify ? justify : null)};
	background-color: ${({ bc }) => (bc ? bc : null)};
	background-image: ${({ image }) => (image ? `url(${image})` : null)};
	box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : null)};
	box-sizing: ${({ boxSizing }) => (boxSizing ? boxSizing : null)};
	background-size: cover;
	cursor: ${({ cursor }) => (cursor ? cursor : null)};
	background-repeat: no-repeat;
	border: ${({ border }) => (border ? border : null)};
	border-radius: ${({ br }) => (br ? br : null)};
	top: ${({ top }) => (top ? top : null)};
	color: ${({ color }) => (color ? color : null)};
	position: ${({ position }) => (position ? position : null)};
`
export const Img = styled.img`
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	margin: ${({ m }) => (m ? m : null)};
	padding: ${({ p }) => (p ? p : null)};
	border-radius: ${({ br }) => (br ? br : null)};
	align-self: ${({ align }) => (align ? align : null)};
`

export const KrButton = styled.button`
	background-color: ${({ dashboard }) => (dashboard ? `${AppColors.newsLetterBg}` : `${AppColors.brandColor}`)};
	width: ${({ w }) => (w ? w : null)};
	padding: ${({ p }) => (p ? p : "0.5rem")};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: 5px;
	outline: none;
	font-weight: 600;
	cursor: pointer;
	color: ${({ color }) => (color ? color : `${AppColors.black}`)};
	margin: ${({ m }) => (m ? m : null)};
`

export const Spinner = styled.div`
	border: ${({ b }) => (b ? `${b}px solid #f3f3f3` : "16px solid #f3f3f3")};
	border-radius: 50%;
	border-top: ${({ b }) => (b ? `${b}px solid #041e41` : "16px solid #041e41")};
	width: ${({ w }) => (w ? w : "50px")};
	height: ${({ w }) => (w ? w : "50px")};

	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`
export const KreativeP = styled.p`
	font-weight: ${({ fw }) => (fw ? fw : null)};
	line-height: ${({ lh }) => (lh ? lh : null)};
	color: ${({ color }) => (color ? color : null)};
	background: ${({ bg }) => (bg ? bg : null)};
	display: ${({ display }) => display};
	margin: ${({ m }) => (m ? m : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ mr }) => (mr ? mr : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	text-transform: ${({ tr }) => (tr ? tr : null)};
	text-decoration: ${({ td }) => (td ? td : null)};
	font-size: ${({ fs }) => (fs ? fs : null)};
	padding: ${({ p }) => (p ? p : null)};
	text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
	cursor: ${({ cursor }) => (cursor ? cursor : null)};
	opacity: ${({ op }) => (op ? op : null)};
`

export const KButton = styled.button`
	background-color: ${({ bc }) => (bc ? bc : null)};
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	flex: ${({ fg }) => (fg ? fg : null)};
	padding: ${({ p }) => (p ? p : null)};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: ${({ br }) => (br ? br : null)};
	outline: none;
	font-weight: ${({ fw }) => (fw ? fw : null)};
	font-size: ${({ fs }) => (fs ? fs : null)};
	display: ${({ display }) => display};
	align-items: ${({ alignI }) => alignI || null};
	cursor: pointer;
	box-shadow: ${({ bs }) => (bs ? bs : null)};
	box-sizing: ${({ bSizing }) => (bSizing ? bSizing : null)};
	color: ${({ color }) => (color ? color : null)};
	margin: ${({ m }) => (m ? m : null)};
	margin-top: ${({ mt }) => (mt ? mt : null)};
	margin-left: ${({ ml }) => (ml ? ml : null)};
	margin-right: ${({ mr }) => (mr ? mr : null)};
	margin-bottom: ${({ mb }) => (mb ? mb : null)};
	border-bottom: ${({ bm }) => (bm ? bm : null)};
	&:hover {
		background: ${({ hv }) => (hv ? hv : null)};
	}
`

export const KInput = styled.input`
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	font-weight: ${({ fw }) => (fw ? fw : null)};
	color: ${({ color }) => (color ? color : null)};
	background: ${({ bg }) => (bg ? bg : null)};
	display: ${({ display }) => display};
	margin: ${({ m }) => (m ? m : null)};
	outline: ${({ o }) => (o ? o : null)};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: ${({ br }) => (br ? br : null)};
	outline: none;
	padding: ${({ p }) => (p ? p : null)};
	text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
	letter-spacing: ${({ tSpacing }) => (tSpacing ? tSpacing : null)};
`
export const KTextArea = styled.textarea`
	width: ${({ w }) => (w ? w : null)};
	height: ${({ h }) => (h ? h : null)};
	font-weight: ${({ fw }) => (fw ? fw : null)};
	color: ${({ color }) => (color ? color : null)};
	background: ${({ bg }) => (bg ? bg : null)};
	display: ${({ display }) => display};
	margin: ${({ m }) => (m ? m : null)};
	outline: ${({ o }) => (o ? o : null)};
	border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
	border-radius: ${({ br }) => (br ? br : null)};
	outline: none;
	padding: ${({ p }) => (p ? p : null)};
	text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
	letter-spacing: ${({ tSpacing }) => (tSpacing ? tSpacing : null)};
`
