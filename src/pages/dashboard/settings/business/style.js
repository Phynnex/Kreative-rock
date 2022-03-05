import styled from "styled-components/macro"
import media from "utils/media"

export const BusinessInfoContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	${media.smallDesktopMinimum`
        width: 100%;
	`}
	${media.tablet`
        width: 100%;
	`}
	${media.mobile`
        width: 100%;
	`}
`

export const UploadCertDiv = styled.div`
	width: 70%;
	height: 60px;
	display: flex;
	padding: 0px 5px;
	padding-right: 2px;
	border: 1px solid rgba(0, 204, 167, 0.7);
	justify-content: space-between;
	align-items: center;
	background: #f1f1f1;
	box-sizing: border-box;
	border-radius: 5px;
	margin: 2rem 0rem;
	${media.mobile`
  width: 100%;
  `}
`
export const UploadInput = styled.input`
	width: 100%;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	color: #f1f1f1;
	border-radius: 5px;
	padding-left: 0.5rem;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	:focus {
		border: 1px solid #00cca7;
		outline: none;
	}
`
export const BusiCertDiv = styled.div`
	width: 230px;
	height: 90%;
	display: flex;
	align-items: center;
	background: #00cca7;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
`

export const BusinessCertImg = styled.img`
	width: 35%;
	height: 35%;
`
