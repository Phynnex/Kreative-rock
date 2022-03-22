import styled from "styled-components/macro"
import media from "utils/media"
export const SelectTimeBody = styled.div`
	width: 100%;
	height: 60px;
	background: #f9fcff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	${media.smallDesktopMinimum`
    width: 55%;

    
    `}
	${media.tablet`
    width: 75%;
    
    `}
	${media.mobile`
    width: 98%;

    
    `}
`

export const TimerBodyBtn = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	${media.mobile`
    /* flex-direction: column; */
    `}
`
export const TimerBtn = styled.button`
	width: 50%;
	height: 60px;
	align-items: center;
	padding: 0px 20px;
	background: rgba(255, 255, 255, 0.85);
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;

	img {
		width: 20px;
		height: 20px;
	}
	${media.mobile`
    width: 50%;
    padding: 0px 10px;
    `}
`
