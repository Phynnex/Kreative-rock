import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"
// import media from "utils/media"s

export const DReportBody = styled.table`
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
	tr {
		width: 100%;
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
		width: 100%;
		background: #ecf4f7;
	}
	${media.tablet`

  td, th {
      /* white-space: nowrap; */
    }
    `}
	${media.mobile`

  td, th {
      white-space: nowrap;
    }
    `}
`

export const DreportTextHeader = styled.th`
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
export const DRTableContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	padding: 0px 5px;
	${media.mobile`
	width: 100%;
	`}
`
export const DRTableContent = styled.div`
	background: #ffffff;
	border: 1px solid #b8b8b8;
	box-sizing: border-box;
	border-radius: 10px;
`

export const DRViewCampBtn = styled.button`
	width: 61px;
	height: 22px;
	outline: none;
	border: none;
	color: ${AppColors.white};
	background: #ff7900;
	border-radius: 5px;
`
