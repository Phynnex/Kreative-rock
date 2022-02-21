import styled from "styled-components/macro"
import media from "utils/media"

export const DContactsHome = styled.div`
	width: 100%;
	display: flex;
	/* background-color: #fff; */
	flex-direction: column;
	padding: 0px 20px;
	${media.smallDesktopMinimum`
    padding: 0px 0px;
    
    `}
`

export const ContactFilterTab = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	/* border: 1px solid #c4c4c4; */
	${media.mobile`
 overflow-x: auto;
 overflow-y: hidden;
 padding:0;
 margin:0;
 &::-webkit-scrollbar {
    width: 0em;
    height: 0em;
  }
    `}
`
export const FilterDivBtn = styled.div`
	display: flex;
	height: 28px;
	align-items: center;
	padding: 0px 0px;
	margin-top: 20px;
	margin-bottom: 30px;
	color: #000;
	flex: 0 0 auto;
	border-bottom: ${({ bm }) => (bm ? bm : "")};
	cursor: pointer;
	p {
		margin-top: 15px;
		margin-left: 5px;
	}
`

export const CButton = styled.button`
	width: 85px;
	height: 39px;
	background: #ffffff;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	margin-left: 5px;
	margin-right: 5px;
	${media.tablet`
	width: 100px;
	flex: 0 0 auto;
	margin-left: 5px;
	`}
	${media.mobile`
	width: 100px;
	flex: 0 0 auto;
	margin-left: 5px;
	`}
`

export const BottomActionsDiv = styled.div`
	width: 100%;
	display: flex;
	margin-top: 25px;
	overflow: hidden;
	justify-content: flex-end;
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
`

export const ContactTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* ${media.smallDesktopMinimum`
	flex-direction: column;
	align-items: flex-start;

	`} */

	${media.tablet`
	flex-direction: column;
	align-items: flex-start;
	gap:20px;
	
	`}
	${media.mobile`
	flex-direction: column;
	align-items: flex-start;
	
	`}
`
