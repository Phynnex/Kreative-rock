import { Div, Img, KreativeP } from "globalStyles/style"
import React from "react"
import { BalItemContainer, BalItemImgDiv, LeftContent, WBallanceCard } from "./style"
import WalletData from "./walletData"

function WallBalance() {
	return (
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
	)
}

export default WallBalance
