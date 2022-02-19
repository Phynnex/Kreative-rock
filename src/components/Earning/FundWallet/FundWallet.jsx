import Wallet1 from "../../../assets/images/earning/Wallet1.png"
import Wallet2 from "../../../assets/images/earning/Wallet2.png"
import Wallet3 from "../../../assets/images/earning/Wallet3.png"
import { FundWalletContainer, FundWalletDiv, FundWalletImgDiv, FundWalletTextDiv, FundWalletTextText } from "../style"

const FundWallet = () => {
	return (
		<>
			<FundWalletContainer>
				<FundWalletDiv>
					<div className="fund-wallet-img-div">
						<div>
							<img src={Wallet1} alt="" />
						</div>
						<FundWalletTextDiv>
							<FundWalletTextText>Lorem ipsum dolor sit amet.</FundWalletTextText>
							<p>21.01.2021 3pm</p>
						</FundWalletTextDiv>
					</div>
					<div>
						<p>$25</p>
					</div>
				</FundWalletDiv>
				<FundWalletDiv>
					<FundWalletImgDiv>
						<div>
							<img src={Wallet2} alt="" />
						</div>
						<FundWalletTextDiv>
							<FundWalletTextText>Lorem ipsum dolor sit amet.</FundWalletTextText>
							<p>21.01.2021 3pm</p>
						</FundWalletTextDiv>
					</FundWalletImgDiv>
					<div>
						<p>$25</p>
					</div>
				</FundWalletDiv>
				<FundWalletDiv>
					<div className="fund-wallet-img-div">
						<div>
							<img src={Wallet3} alt="" />
						</div>
						<FundWalletTextDiv>
							<FundWalletTextText>Lorem ipsum dolor sit amet.</FundWalletTextText>
							<p>21.01.2021 3pm</p>
						</FundWalletTextDiv>
					</div>
					<div>
						<p>$25</p>
					</div>
				</FundWalletDiv>
			</FundWalletContainer>
		</>
	)
}

export default FundWallet
