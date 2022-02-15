import Faqs from "components/help/FAQs/Faq's"
import Guides from "components/help/Guides/Guides"
import HelpHeader from "components/help/HelpHeader/HelpHeader"

function HelpPage() {
	return (
		<div>
			<HelpHeader/>
			<Guides />
			<Faqs/>
		</div>
	)
}

export default HelpPage
