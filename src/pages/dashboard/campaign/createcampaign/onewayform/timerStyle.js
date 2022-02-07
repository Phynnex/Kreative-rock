import styled from "styled-components/macro"
import media from "utils/media"
import timerGridBg from "assets/images/scheduletimebg.svg"

export const TimerBody = styled.div`
	width: 35%;
	height: 250px;
	background: #f9fcff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 20px;
	background-image: url(${timerGridBg});
	background-repeat: no-repeat;

	background-size: 300px 100px;
	background-position: 170% 100%;
	${media.smallDesktopMinimum`
    width: 55%;
    padding: 15px 10px;
    
    `}
	${media.tablet`
    width: 75%;
	padding: 20px 20px;
    
    `}
	${media.mobile`
    background-position: 260% 100%;
    width: 98%;
	padding: 20px 20px;
    
    `}
`

export const TimerBodyBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`
export const TimerBtn = styled.button`
	/* width: i; */
	height: 40px;
	align-items: center;
	background: rgba(255, 255, 255, 0.85);
	display: flex;
	gap: 5px;
	border: 1px solid #00cca7;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	img {
		width: 20px;
		height: 20px;
	}
`
