import React from "react";
import FreeCards from "../components/email-templates/FreeCards/FreeCards";
import HeroBanner from "../components/email-templates/HeroBanner";
import Container from "@material-ui/core/Container";
import { createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProCards from "../components/email-templates/proCards";


const theme = createTheme();

theme.typography.h3 = {
  marginTop: "4rem",
};

const EmailTemplates = () => {
  return (
    <>
      <HeroBanner />

      <div>
        <Container>
          <Typography variant="h5">Free</Typography>
          <FreeCards />
          <Typography variant="h5">Pro</Typography>
          <ProCards />
        </Container>
      </div>
    </>
  );
};

export default EmailTemplates;
