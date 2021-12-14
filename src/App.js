import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Mainlayout from './layout/Mainlayout'

// pages
import Home from './pages/Home'
import MobileTexting from './pages/MobileTexting'
import DigitalMarketing from './pages/DigitalMarketing'
import BrandManagement from './pages/BrandManagement'
import TermsOfUse from './components/terms-of-use/Terms'
import ContactUs from './components/contact-us/ContactUs'
import Pricing from './components/pricing/Pricing'
import SignIn from './components/sign-in/Sign-in'
import Policy from './pages/Policy'
import EmailSignature from './pages/EmailSignature'
import Register from './components/sign-up/Register'
import ReferralCode from './pages/ReferralCode'
import PlaceOrder from './pages/PlaceOrder'
import Notification from './pages/Notification'
import EmailTemplates from "./pages/EmailTemplates";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Mainlayout>
              <Home />
            </Mainlayout>
          }
        />
        <Route
          path="/mobile-texting"
          exact
          element={
            <Mainlayout>
              <MobileTexting />
            </Mainlayout>
          }
        />
        <Route
          path="/digital-marketing"
          element={
            <Mainlayout>
              <DigitalMarketing />{" "}
            </Mainlayout>
          }
        />
        <Route
          path="/email-templates"
          exact
          element={
            <Mainlayout>
              <EmailTemplates />
            </Mainlayout>
          }
        />
        <Route
          path="/brand-management"
          element={
            <Mainlayout>
              <BrandManagement />
            </Mainlayout>
          }
        />
        <Route
          path="/email-signature"
          element={
            <Mainlayout>
              <EmailSignature />
            </Mainlayout>
          }
        />
        <Route
          path="/terms"
          element={
            <Mainlayout>
              <TermsOfUse />
            </Mainlayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Mainlayout>
              <ContactUs />
            </Mainlayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Mainlayout>
              <Pricing />
            </Mainlayout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Mainlayout>
              <SignIn />
            </Mainlayout>
          }
        />
        <Route
          path="/policy"
          element={
            <Mainlayout>
              <Policy />
            </Mainlayout>
          }
        />
        <Route
          path="/register"
          element={
            <Mainlayout>
              <Register />
            </Mainlayout>
          }
        />

        <Route path="/referral-code" element={<Mainlayout><ReferralCode/></Mainlayout>} />
        <Route path="/place-order" element={<Mainlayout><PlaceOrder/></Mainlayout>} />
        <Route path="/notification" element={<Mainlayout><Notification/></Mainlayout>} />

      </Routes>
    </Router>
  );
}

export default App
