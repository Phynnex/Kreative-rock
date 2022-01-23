import styled from "styled-components/macro"
import SelectedTemplate from "./selectedTemplate"
import EmailSigTabs from "./Tabs"

const EPageContainer = styled.div`
	display: flex;
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
