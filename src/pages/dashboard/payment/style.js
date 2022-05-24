import styled from "styled-components/macro"
import paymentProp from "assets/images/payment_prop.svg"
import AppColors from "utils/colors"
import media from "utils/media"

export const PaymentHero = styled.div `
	display: flex;
	justify-content: space-around;
	padding-top: 22px;
`

export const PaymentContainer = styled.div`
	width: 100%;
	// height: 100vh;
	padding: 0px 50px;
	margin-top: 56px;
	/* background: #f9fcff; */
	background-image: url(${paymentProp});
	background-repeat: no-repeat;
	background-size: 300px 400px;
	background-position: 0% 30%;
	${media.smallDesktopMinimum`
	/* flex-direction: column; */
	width: 100%;
	padding: 0px 0px;
	background-size: 340px 300px;
	`}
	${media.tablet`
	/* flex-direction: column; */
	width: 100%;
	padding: 0px 0px;
	background-size: 100px 200px;
	`}
	${media.mobile`
	/* flex-direction: column; */
	width: 100%;
	padding: 0px 0px;
	background-size: 200px 300px;
	`}
`
export const PaymentDiv = styled.div`
	width: 100%;
	/* height: 80vh; */
	// display: flex;
	flex-direction: column;
	margin-top: 125px;
	background: linear-gradient(270deg, #dbf7f7 50%, rgba(225, 237, 247, 0) 103.88%);
`
export const PaymentCardDiv = styled.div`
	width: 38%;
	height: 250px;
	background: rgb(0, 163, 134);
	background: linear-gradient(205deg, rgba(0, 163, 134, 0.7175245098039216) 0%, rgba(4, 113, 94, 0.9976365546218487) 68%);
	border-radius: 20px;
	${media.smallDesktopMinimum`
	width:50%;
	height: 270px;
	`}
	${media.tablet`
	width:70%;
	height: 230px;
	`}
	${media.mobile`
	width:100%;
	height: 230px;
	`}
`
export const PaymentCardInner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: ${AppColors.white};
	padding: 0px 10px;
	padding-left: 30px;
	h4 {
		letter-spacing: 10px;
	}
	${media.mobile`
	h4 {
		letter-spacing: 5px;
	}
	`}
`

export const PaymentTopDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 30px;
	${media.tablet`
	flex-direction: column;
	gap:20px;
	padding:0px 20px;
	`}
	${media.mobile`
	flex-direction: column;
	gap:20px;
	padding:0px 20px;
	`}
`

export const CardBottomItems = styled.div`
	display: flex;
	flex-direction: column;
	span {
		font-size: 12px;
	}
`
export const CardBottomItemsDiv = styled.div`
	display: flex;
	gap: 35px;
`
