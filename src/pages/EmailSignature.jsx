import React from "react";
import EmailSignatureDeployment from "../components/email-signature/EmailSignatureDeployment";
import EmailSignatureHero from "../components/email-signature/EmailSignatureHero";
import EmailSignatureEnquiryForm from "../components/email-signature/EnquiryForm";
import PricingSection from "../components/email-signature/PricingSection";
import SectionTwo from "../components/email-signature/SectionTwo";

const EmailSignature = () => {
  return (
    <>
      <EmailSignatureHero />
      <SectionTwo />
      <PricingSection />
      <EmailSignatureDeployment />
      <EmailSignatureEnquiryForm />
    </>
  );
};

export default EmailSignature;
