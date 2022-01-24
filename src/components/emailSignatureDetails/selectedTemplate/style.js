import styled from "styled-components/macro"
import media from "utils/media"

export const SBody = styled.div`
	width: 50%;
	margin-bottom: 100px;
	${media.smallDesktopMinimum`
	width: 100%;
	`}
	${media.tablet`
	width: 100%;
	`}
	${media.mobile`
	width: 100%;
	`}
`
export const Shead = styled.h5`
	text-align: center;
	margin-top: 70px;
	margin-bottom: 30px;
`
export const Previewtext = styled.p`
	margin-left: 70px;
`
// export const Span = styled.span`
// 	color: ${AppColors.footerBlue};
// `
