import styled from "styled-components/macro"
import media from "utils/media"

export const PieChartCrad = styled.div`
	width: 30%;
	height: 250px;
	background: #ffffff;
	border: 2px solid #cfcfcf;
	box-sizing: border-box;
	border-radius: 10px;
	${media.tablet`
     width:35%;
    `}
	${media.mobile`
     width:100%;
    `}
`

export const PRelate = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border-radius: 10px;
`
