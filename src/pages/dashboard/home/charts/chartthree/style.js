import styled from "styled-components/macro"
import AppColors from "utils/colors"

export const DivDot = styled.div`
	width: 15px;
	height: 15px;
	background-color: ${({ bg }) => (bg ? bg : `${AppColors.newsLetterBg}`)};
	border-radius: 50%;
	margin-right: 10px;
	margin-top: -15px;
`
export const DotsContainer = styled.div`
	display: flex;
	gap: 40px;
`
