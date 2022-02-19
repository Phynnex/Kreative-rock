import { SlideInPopUp } from "pages/dashboard/keywords/createkeyword/style"
import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const TransTableBody = styled.table`
	width: 100% !important;
	border-collapse: collapse !important;
	border-bottom: 1px solid #e4e7eb;
	/* width: 100%; */
	/* overflow-x: scroll; */
	td {
		text-align: left;
		padding: 15px 10px;
		font-size: 14px;
		border-bottom: 1px solid #e4e7eb;
	}
	th {
		padding: 20px 10px;
		text-align: left;
		text-transform: capitalize;
		color: ${AppColors.white};
		background-color: rgba(0, 218, 178, 0.89);
		font-size: 14px;
	}
	td {
		color: ${AppColors.muted};
		font-size: 14px;
	}
	tr:nth-child(even) {
		/* border-bottom: 1px solid #e4e7eb; */
		background: #ecf4f7;
	}

	${media.mobile`
  /* width: 150vw; */
  td {
      white-space: nowrap;
    }
    `}
`

export const TransTextHeader = styled.th`
	text-align: left;
	padding: 8px;
	border-bottom: 2px solid red;
	td {
		text-align: left;
		padding: 8px;
		/* border-bottom:2px solid red;  */
		color: ${AppColors.muted};
	}
`
export const TransTableContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	padding: 0px 5px;
`
export const TransTableContent = styled.div`
	/* width: 100%; */
	/* overflow-x: scroll; */
	background: #ffffff;
	border: 1px solid #b8b8b8;
	box-sizing: border-box;
	border-radius: 10px;
`

export const TablePopupDiv = styled.div`
	width: 160px;
	height: 150px;
	left: 83%;
	/* height: 200px; */
	display: flex;
	padding-top: 30px;
	padding-bottom: 30px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	color: ${AppColors.black2};
	margin-top: 20px;
	position: absolute;
	background: #ecf4f7;
	border-radius: 8px;
	z-index: 0;
	${media.mobile`
    width:160px;
  left: 40%;
  /* width: 90%; */
  `}
`

export const TableDetailsPageModal = styled.div`
	position: absolute;
	height: 300px;
	margin-top: -20px;
	left: 0%;
	/* top: 0%; */
	right: 0%;
	/* bottom: 0%; */

	background: ${({ show }) => (show ? "rgba(0, 0, 0, 0)" : "transparent")};
	/* position: fixed; */
	transition: all 0.5s ease-out;
	/* transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-20px)`)}; */
	animation-name: ${SlideInPopUp};
	animation-duration: 0.5s;
	z-index: 90;

	${media.tablet`
 
  `}/* ${media.mobile`
  /* top: 9%; */
  `}

 
  ${media.smallMobile`
  /* top: 7.8%; */
  `} */
`
export const ViewCampBtn = styled.button`
	width: 61px;
	height: 22px;
	outline: none;
	border: none;
	color: ${AppColors.white};
	background: #ff7900;
	border-radius: 11px;
`
