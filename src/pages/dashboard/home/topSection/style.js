import styled from "styled-components/macro"
import media from "utils/media"

export const MTopDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`
export const MInnerTopDiv = styled.div`
	width: 95%;
	height: 200px;
	display: flex;
	padding: 10px 10px;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	border-radius: 8px;
	filter: drop-shadow(0px 3px 6px rgba(39, 45, 59, 0.2));
	${media.smallDesktopMinimum`
    width: 95%;
    margin-left: 0px;
    `}
	${media.mobile`
	flex-direction: column;
    width: 100%;
	padding:20px 10px;
    margin-left: 0px;
	height: 300px;
    `}
`
export const TopImgDiv = styled.div`
	position: relative;
	margin-right: -55px;
	margin-bottom: -55px;
	img {
		width: 300px;
		height: 230px;
		/* margin-top: 70px; */
	}

	${media.mobile`
	/* margin-top: -50px; */
	margin-right: -5px;
	margin-bottom: 0px;
  position: none;
	 padding: 0px 0px;
	 img {
		margin-top: 20px;
		margin-bottom: 40px;
	}
	`}
`
export const MTcardBody = styled.div`
	width: 25%;
	height: 300px;
	background: #ff7900;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 12px;
	color: #fff;
	padding: 30px 10px;
	h5 {
		margin-top: 40px;
	}

	${media.tablet`
	 width: 48.5%;
	`}
	${media.mobile`
	width: 45.5%;
	 padding: 30px 10px;
	 height: 200px;
	`}
`
export const MTchartBody1 = styled.div`
	width: 50%;
	height: 300px;
	background: #00cca7;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 12px;

	${media.tablet`
	 order:-1;
	 width: 100%;
	 `}
	${media.mobile`
	 order:1;
	 padding: 0px 0px;
	`}
`
export const VerifyAccount = styled.div`
	width: 100%;
	height: 45px;
	border: 1px solid #ff7900;
	box-sizing: border-box;
	border-radius: 5px;
`
export const VerifyEmailInput = styled.input`
	width: 80%;
	height: 100%;
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 0px 10px;
	${media.mobile`
	width: 70%;
	`}
`

export const DVerifyContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	${media.mobile`
	width: 100%;
	`}
`
export const DVerifyBtn = styled.button`
	width: 20%;
	height: 100%;
	background: #ff7900;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	color: #ffffff;
	${media.mobile`
	width: 30%;
	`}
`
export const VerifyFormDiv = styled.div`
	width: 35%;
	height: 300px;
	background: #ffffff;
	padding: 0px 50px;
	padding-top: 70px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	${media.mobile`
	width: 95%;
	padding: 0px 10px;
	padding-top: 70px;
	height: 250px;
	`}
`
