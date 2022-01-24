import styled from "styled-components/macro"
import media from "utils/media"

export const DetailsBody = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
`
export const EsTopSec = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${media.mobile`
	h2{
		font-size:24px;
	}
	`}
`

export const EsFilePicker = styled.div`
	width: 116px;
	height: 116px;
	display: grid;
	place-items: center;
	justify-content: center;
	background: #dee9ee;
	border: 1px dashed #979696;
	box-sizing: border-box;
	border-radius: 5px;
	cursor: pointer;
	position: relative;

	left: 25px;
	top: 25px;
	${media.mobile`
	width: 100px;
	height: 80px;
	p{
		font-size:12px;
	}
	`}
`
export const EsFilePickerItems = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
