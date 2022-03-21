import styled from "styled-components/macro"
import AppColors from "utils/colors"
import media from "utils/media"

export const SenderIdSelect = styled.div`
	position: relative;
	height: 62px;
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
	border: none;
	display: flex;
	color: ${AppColors.lightBlack};
	/* box-sizing: border-box; */
	background: rgba(255, 255, 255, 0.85);
	border-radius: 5px;
	${media.tablet`
   width:100%;
  `}
	${media.mobile`
   width:100%;
   margin-left: 0px;
  `}

  select {
		font-size: 14px;
		height: 100%;
		width: 100%;
		padding: 0em 1em 0em 1.5em;
		background: transparent;
		color: ${AppColors.lightBlack};
		border: none;
		outline: none;
		border-radius: 3px;
		appearance: none;
		option {
			color: ${AppColors.lightBlack};
			background: transparent;
			border: none;
		}
	}
	div {
		position: absolute;
		right: 2%;
		color: ${AppColors.white};
		background: rgba(255, 255, 255, 0.85);

		height: 100%;
		width: 2em;
		pointer-events: none;
		display: flex;
		align-items: center;
	}
`
