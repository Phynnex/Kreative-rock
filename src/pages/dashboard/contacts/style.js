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
	height: 25px;
	align-items: center;
	padding: 0px 0px;
	/* background-color: #ccc; */
	color: #000;
	flex: 0 0 auto;
	border-bottom: ${({ bm }) => (bm ? bm : "")};
	cursor: pointer;
	p {
		margin-top: 15px;
		margin-left: 5px;
	}
`
