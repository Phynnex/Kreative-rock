import styled from "styled-components/macro"
import paymentProp from "assets/images/payment_prop.svg"

export const PaymentContainer = styled.div`
	width: 100%;
	height: 100vh;
	padding: 0px 50px;
	margin-top: 56px;
	background: #f9fcff;
	background-image: url(${paymentProp});
	background-repeat: no-repeat;
	background-size: 300px 400px;
	background-position: 0% 30%;
`
export const PaymentDiv = styled.div`
	width: 100%;
	height: 80vh;
	background: linear-gradient(270deg, #dbf7f7 50%, rgba(225, 237, 247, 0) 103.88%);
`
export const PaymentCardDiv = styled.div`
	position: absolute;
	width: 539px;
	height: 342px;
	left: 720px;
	top: 217px;

	background: url(16.jpg);
	border-radius: 39px;
`
