import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Mainlayout from "./layout/Mainlayout"

// pages
import Home from "./pages/Home"
import MobileTexting from "./pages/MobileTexting"
import DigitalMarketing from "./pages/DigitalMarketing"
import BrandManagement from "./pages/BrandManagement"
import TermsOfUse from "./components/terms-of-use/Terms"
import ContactUs from "./components/contact-us/ContactUs"
import Pricing from "./components/pricing/Pricing"
import SignIn from "./components/sign-in/Sign-in"
import Policy from "./pages/Policy"
import EmailSignature from "./pages/EmailSignature"
import Register from "./components/sign-up/Register"
import RegisterRef from "./components/sign-up/RegisterRef"
import ReferralCode from "./pages/ReferralCode"
import PlaceOrder from "./pages/PlaceOrder"
import ViewPlaceOrder from "./pages/ViewPlaceOrder"
import Notification from "./pages/Notification"
import EmailTemplates from "./pages/EmailTemplates"
import EmailSignatureDetails from "./pages/EmailSignatureDetails"
import { DASHBOARDHOME, PAYMENT } from "pages/dashboard/ROUTESCONTS"
import Dashboard from "pages/dashboard"
import ProtectedRoute from "Utilities/ProtectedRoutes"
import PaymentPage from "pages/dashboard/payment"
import { QueryClient, QueryClientProvider } from "react-query"
import EmailVerification from "components/EmailVerification"

function App() {
	const queryClient = new QueryClient()
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Mainlayout>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/mobile-texting" exact component={MobileTexting} />
							<Route path="/digital-marketing" component={DigitalMarketing} />
							<Route path="/email-templates" exact component={EmailTemplates} />
							<Route path="/brand-management" component={BrandManagement} />
							<Route path="/email-signature" component={EmailSignature} />
							<Route path="/email-signature-details" component={EmailSignatureDetails} />
							<Route path="/terms" component={TermsOfUse} />
							<Route path="/contact-us" component={ContactUs} />
							<Route path="/pricing" component={Pricing} />
							<Route path="/sign-in" component={SignIn} />
							<Route path="/policy" component={Policy} />
							<Route path="/verify" component={EmailVerification} />
							<Route path="/register" component={Register} />
							<Route path="/register-ref/:referralCode" component={RegisterRef} />
							<Route path="/referral-code" component={ReferralCode} />
							<Route path="/place-order" component={PlaceOrder} />
							<Route path="/view-place-order" component={ViewPlaceOrder} />
							<Route path="/notification" component={Notification} />
							<Route path={DASHBOARDHOME} component={Dashboard} />
							<ProtectedRoute path={PAYMENT} component={PaymentPage} />
						</Switch>
					</Mainlayout>
				</Router>
			</QueryClientProvider>
		</>
	)
}

export default App
