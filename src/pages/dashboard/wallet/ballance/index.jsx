import { Div, Img, KreativeP } from "globalStyles/style"
import { PAYMENT } from "pages/dashboard/ROUTESCONTS"
import React from "react"
import { Link } from "react-router-dom"
import { BalItemContainer, BalItemImgDiv, BallanceDivCont, BHeadCont, LeftContent, PayNowBtn, WBallanceCard } from "./style"
import WalletData from "./walletData"

function WallBalance() {
	return (
		<BallanceDivCont>
			<BHeadCont>
				<h5>Fund Wallet</h5>
				<Link to={PAYMENT}>
					<PayNowBtn>PAY NOW</PayNowBtn>
				</Link>
			</BHeadCont>
			<WBallanceCard>
				{WalletData?.map(data => (
					<BalItemContainer key={data._id}>
						<LeftContent>
							<BalItemImgDiv>
								<Img src={data.imgUrl} alt={data.date} />
							</BalItemImgDiv>

							<Div>
								<KreativeP mb="1px">{data.username}</KreativeP>
								<KreativeP>{data.date}</KreativeP>
							</Div>
						</LeftContent>
						<p>$ {data.amt}</p>
					</BalItemContainer>
				))}
			</WBallanceCard>
		</BallanceDivCont>
	)
}

export default WallBalance
