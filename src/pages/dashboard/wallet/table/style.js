import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"
// import media from "utils/media"s

export const TTableBody = styled.table`
	width: 100% !important;
	border-collapse: collapse !important;
	border-bottom: 3px solid #f4f9fe;
	/* width: 100%; */
	/* overflow-x: scroll; */
	td {
		text-align: left;
		padding: 20px 10px;
		font-size: 14px;
		background: #ffffff;
	}
	th {
		padding: 20px 10px;
		text-align: center;
		text-transform: capitalize;
		color: ${AppColors.muted};
		background-color: ${AppColors.white};
		font-size: 14px;
	}
	td {
		color: ${AppColors.muted};
		font-size: 14px;
	}
	tr:nth-child(even) {
		margin-bottom: 10px;
		background: #ffffff;
	}
	tr {
		border-bottom: 4px solid #f4f9fe;
	}
	${media.mobile`
    white-space: nowrap;
    `}
`

export const TTableHeader = styled.thead`
	text-align: left;
	padding: 8px;
	/* border-bottom: 2px solid red; */
	td {
		text-align: left;
		padding: 8px;
		/* border-bottom:2px solid red;  */
		color: ${AppColors.muted};
	}
`
export const TTableBodyMain = styled.tbody`
	text-align: center;
	padding: 8px;
	border-bottom: 2px solid red;
	td {
		text-align: center;
		padding: 20px 8px;
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
	
	overflow-x: scroll;
	`}
`
export const DRTableContent = styled.div`
	background: #ffffff;
	border: 1px solid #b8b8b8;
	box-sizing: border-box;
	border-radius: 10px;
`

export const WTstatusLabel = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${AppColors.white};
	background: ${({ bc }) => (bc ? bc : "")};
	border-radius: 35px;
	${media.tablet`
    padding:0px 20px;
    `}
	${media.mobile`
    padding:0px 20px;
    `}
`
export const TableScrollDiv = styled.div`
	width: 100%;
	${media.mobile`
    overflow-x: scroll;
    ::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
    `}
`
