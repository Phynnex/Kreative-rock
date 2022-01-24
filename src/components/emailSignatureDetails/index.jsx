import styled from "styled-components/macro"
import SelectedTemplate from "./selectedTemplate"
import EmailSigTabs from "./Tabs"
import media from "utils/media"

const EPageContainer = styled.div`
	display: flex;
	${media.smallDesktopMinimum`
		flex-direction: column;
	`};
	${media.tablet`
		flex-direction: column;
	`};
	${media.mobile`
		flex-direction: column;
	`};
`
function EmailSignatureTabsArea() {
	return (
		<EPageContainer>
			<EmailSigTabs />
			<SelectedTemplate />
		</EPageContainer>
	)
}

export default EmailSignatureTabsArea
