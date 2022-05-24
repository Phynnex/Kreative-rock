import ScrollToTop from "components/ScrollToTop"
import React from "react"
import PaynowForm from "./paymentform"
import { PaymentContainer, PaymentDiv, PaymentHero   } from "./style"
import payment from "assets/images/payment.png"

function PaymentPage() {
	return (
		<>
			<ScrollToTop />
			<br />
			<PaymentContainer>

				<PaymentDiv>
					<PaymentHero>
						<h1 style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>Your Payment Details</h1>
						<img src={payment} alt="payment" />
					</PaymentHero>
					{/* <PaymentTopDiv>
						<h4>Your payment details</h4>
						<PaymentCardDiv>
							<PaymentCardInner>
								<CardBottomItems>
									<p>Cloudcash</p>
									<p>PREMIUM ACCOUNT</p>
								</CardBottomItems>
								<h4>5874 **** **** 5643</h4>
								<CardBottomItemsDiv>
									<CardBottomItems>
										<span>Card Holder</span>
										<p>Ebube Mordi</p>
									</CardBottomItems>
									<CardBottomItems>
										<span>Expiry Date</span>
										<p>06/24</p>
									</CardBottomItems>
								</CardBottomItemsDiv>
							</PaymentCardInner>
						</PaymentCardDiv>
					</PaymentTopDiv> */}
					<PaynowForm />
				</PaymentDiv>
			</PaymentContainer>
		</>
	)
}

export default PaymentPage
