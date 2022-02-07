import styled from "styled-components/macro"
import media from "utils/media"

export const MtTopMost = styled.div`
	width: 120%;
	height: 70px;
	margin-top: -70px;
	margin-left: -226px;
	position: relative;
	background: #ffffff;

	${media.smallDesktopMinimum`
    width: 100%;
    margin-left: 0px;
    `}
	${media.mobile`
	margin-top: -202px;
    /* width: 100%; */
	position: fixed;
	height: 400px;
    margin-left: 0px;
    `}
`
export const MtHome = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	${media.mobile`
	margin-top: 200px;
    /* width: 100%; */
    margin-left: 0px;
    `}
`
export const MtAnalticsContainer = styled.div`
	width: 100%;
	display: flex;
	margin-top: 20px;
	margin-bottom: 40px;
	/* background: red; */
	justify-content: center;
	${media.tablet`
	margin-top:50px;
	`}
	${media.mobile`
	 flex-direction: column;
	 padding: 0px 0px;
	`}
`
export const MtAnaltics = styled.div`
	/* background: blue; */
	width: 80%;
	display: flex;
	gap: 15px;
	${media.tablet`
	 flex-wrap: wrap;
	 width: 100%;
	`}
	${media.mobile`
	 padding: 0px 0px;
	`}
`
export const MTmainBody = styled.div`
	/* background: blue; */
	width: 100%;
	display: flex;
	flex-direction: column;
	${media.mobile`
	margin-top: -202px;
    `}
`
export const MTmainCharts = styled.div`
	width: 100%;
	display: flex;
	gap: 15px;
	padding: 20px 20px;
	margin-bottom: 100px;
	/* background: blue; */
	/* flex-direction: column; */
	${media.tablet`
	 flex-direction: column;
	 padding: 0px 0px;
	`}
	${media.mobile`
	 flex-direction: column;
	 padding: 0px 0px;
	`}
`
export const MTChartsLeft = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 15px;
	${media.tablet`
	width: 100%;
	 
	
	`}
	${media.mobile`
	width: 100%;
	 
	
	`}
`
export const MTChartsRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 15px;
	${media.tablet`
	width: 100%;	
	`}
	${media.mobile`
	width: 100%;	
	`}
`
