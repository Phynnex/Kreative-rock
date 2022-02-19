import styled from "styled-components/macro"
import AppColors from "utils/colors"

export const EarningHeader = styled.div`
	height: 3px;
	max-width: 90px;
	border-radius: 6px;
	margin: auto;
	background-color: ${AppColors.newsLetterBg};
`
export const WalletsContainer = styled.div`
	display: flex;
	justify-content: space-around;
`

export const FundwalletHeader = styled.div`
	display: flex;
	justify-content: space-around;
`

export const PaynowBtn = styled.button`
	width: 163px;
	height: 39px;
	color: white;
	background: #ff7900;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	margin-top: -12px;
`
export const FundWalletContainer = styled.div`
	margin: 2rem 4rem 1rem;
`
export const WalletBalanceBox = styled.div`
	border: 2px solid #cfcfcf;
	background: #fff;
	width: 435px;
	height: 350px;
	border-radius: 10px;
`
export const FundWalletBox = styled.div`
	border: 2px solid #cfcfcf;
	background: #fff;
	width: 617px;
	height: 350px;
	border-radius: 10px;
`
export const FundWalletDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`
export const FundWalletImgDiv = styled.div`
	display: flex;
`
export const FundWalletTextDiv = styled.div`
	margin-left: 0.5rem;
`
export const FundWalletTextText = styled.p`
	margin-bottom: -0.2rem;
`

export const WalletStatus = styled.div`
	font-weight: bold;
	font-size: 0.75rem;
	color: white;
	border-radius: 12px;
	padding: 3px 10px;
	display: inline-block;
	margin-left: 3rem;
	margin-top: 0.5rem;
`
