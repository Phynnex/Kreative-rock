import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
// import banner from "../../assets/images/backdrop.png";
// import pana from "../../assets/images/pana2.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  items: {
    paddingTop: "4em",
    marginBottom: "4em",
  },
  box: {
    paddingTop: "4em",
    paddingLeft: "4em",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 2em",
      paddingTop: "6em",
      height: "100%",
    },
  },
  box1: {
    display: "flex",
    justifyContent: "center",
  },
  box2: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },

  headerText: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: 700,
    marginBottom: 20,
    marginTop: "30px",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 16,
    },
  },

  headerText1: {
    textDecoration: "underline",
    // textDecorationColor: "red",
  },
  content: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "30px",
    margin: "1em 0 ",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      marginBottom: 5,
      textAlign: "justify",
    },
  },
  btn: {
    margin: "1em 0",
    width: "250px",
    height: "65px",
    boxShadow: " 0px 1px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      marginBottom: 5,
      textAlign: "justify",
    },
  },
}));
const TermsOfUse = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.items}>
        <Grid container className={classes.box}>
          <Grid item>
            <Typography className={classes.headerText}>Terms of use</Typography>
            <Typography className={classes.content}>
              LAST UPDATED: 1st February 2022{" "}
            </Typography>
            <Typography className={classes.content}>
              you&#8217;re welcome to{" "}
              <a href="www.kreativerock.com">www.kreativerock.com</a> website
              (the "Site") of KreativeRock Digital Limited.
            </Typography>
            <Typography className={classes.content}>
              This Site has been built:
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  To help businesses engage their audience better through
                  interactive texting, conversational AI, ChatBot, digital
                  marketing, email signature management, brand management, and
                  achieve business set-goals and objectives.
                </li>
              </ul>
            </Typography>
            <Typography className={classes.content}>
              Please read our terms of use carefully as the use of our Site is
              subject to these terms and conditions.{" "}
            </Typography>
            <Typography className={classes.content}>
              We may change our terms from time to time and such changes will
              take effect as and when published on this Site. By using our site,
              you accept these terms and conditions in full. If you do not
              accept our terms of use, then please do not make use of our Site.
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              Important notice
            </Typography>
            <Typography className={classes.content}>
              If you are not yet 18 years old, you must obtain your
              parents&#8217; or legal guardians&#8217; consent and permission to
              be bound by the terms of our Site prior to you using any aspect of
              our services listed on the Site. To use our texting system, you
              must be duly registered organization operating your business from
              the counties that our texting system covers to have access to
              local rates in those countries.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              REGISTRATION AND ACCOUNT
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  You may register on our website by completing and submitting
                  the registration form on the website.{" "}
                </li>
                <li>
                  You represent and warrant that all information provided in the
                  registration form is complete, accurate and completely true.{" "}
                </li>
                <li>
                  {" "}
                  You agree that your KreativeRock account shall be used
                  exclusively by you and you shall not transfer your account or
                  password to any third party. If you authorize any third party
                  to manage your account on your behalf this shall be at your
                  own risk.
                </li>{" "}
                <li>
                  You agree that on the KreativeRock Mobile Texting solutions,
                  you must be operating from the local country at which you
                  indicated on the form during the registration.
                </li>
                You agree to: <li>Keep your password confidential</li>
                <li>
                  {" "}
                  Notify us in writing immediately you become aware of any
                  disclosure of your password; and
                </li>{" "}
                <li>
                  Be responsible for any activity on the website arising out of
                  any failure to keep your password confidential, and that you
                  may be held liable for any losses arising out of such a
                  failure.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              listing terms
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <li>You acknowledge and agree that:</li>
              <li>
                You will undergo the process of filling the questionnaire set-up
                form with true and accurate details of your project.
              </li>{" "}
              <li>
                You must use the published items for the sole purpose it was
                approved only.
              </li>{" "}
              <li>
                {" "}
                After a short code or long number has been assigned to you, you
                will only use the code for the purpose it is meant for.
              </li>{" "}
              <li>
                {" "}
                That all participants will get value for a promise made to them.
                And this promise has to be fulfilled and born by you.
              </li>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              Returns and refunds
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  All sales are final! As a result, KreativeRock does not offer
                  returns and does not accept returns. We will however advise
                  the users to use any other service that we offer within the
                  set-fee they seek refund for.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              our rights to use your content
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  You hereby waive all your moral rights in your content to the
                  maximum extent permitted by applicable law; and you warrant
                  and represent that all other moral rights in your content have
                  been waived to the maximum extent permitted by applicable law
                </li>
                <li>
                  {" "}
                  Without prejudice to our other rights under these terms and
                  conditions, if you breach our rules on content in any way, or
                  if we reasonably suspect that you have breached our rules on
                  content, we may delete, unpublish or edit any or all of your
                  content.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              use of website
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  You may only use our website for your own personal and
                  business purposes, and you may:
                </li>
                <li>View pages from our website in a web browser.</li>
                <li>
                  Download pages from our website for caching in a web browser.
                </li>
                <li>
                  Print pages from our website for your own personal and
                  non-commercial use, providing that such printing is not
                  systematic or excessive.
                </li>
                <li>
                  Stream audio and video files from our website using the media
                  player on our website.
                </li>
                <li>
                  Except as expressly permitted by these general terms and
                  conditions, you must not edit or otherwise modify any material
                  on our website. Unless you own or control the relevant rights
                  in the material, you must not:
                </li>
                <li>
                  Republish material from our website (including republication
                  on another website).
                </li>
                <li>Sell, rent or sub-license material from our website.</li>
                <li>
                  We reserve the right to suspend or restrict access to our
                  website, to areas of our website and/or to functionality upon
                  our website. We may, for example, suspend access to the
                  website during server maintenance or when we update the
                  website. You must not circumvent or bypass, or attempt to
                  circumvent or bypass, any access restriction measures on the
                  website.
                </li>
                <li>You must not:</li>
                <li>
                  Use our website in any way or take any action that causes, or
                  may cause, damage to the website or impairment of the
                  performance, availability, accessibility, integrity, or
                  security of the website.
                </li>
                <li>
                  Use our website in any way that is unethical, unlawful,
                  illegal, fraudulent, or harmful, or in connection with any
                  unlawful, illegal, fraudulent, or harmful purpose or activity.
                </li>
                <li>Hack or otherwise tamper with our website.</li>
                <li>
                  Probe, scan or test the vulnerability of our website without
                  our permission.
                </li>
                <li>
                  Circumvent any authentication or security systems or processes
                  on or relating to our website.
                </li>
                <li>
                  Use our website to copy, store, host, transmit, send, use,
                  publish or distribute any material which consists of (or is
                  linked to) any spyware, computer virus, Trojan horse, worm,
                  keystroke logger, rootkit or other malicious computer
                  software.
                </li>
                <li>
                  Impose an unreasonably large load on our website resources
                  (including bandwidth, storage capacity and processing
                  capacity).
                </li>
                <li>
                  Decrypt or decipher any communications sent by or to our
                  website without our permission.
                </li>
                <li>
                  Access or otherwise interact with our website using any robot,
                  spider, or other automated means, except for the purpose of
                  search engine indexing.
                </li>
                <li>
                  Do anything that interferes with the normal use of our
                  website.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              copyright and trademarks{" "}
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>
                  Subject to the express provisions of these terms of use:
                </li>
                <li>
                  We, together with our licensors, own and control all the
                  copyright and other intellectual property rights in our
                  website and the material on our website; and
                </li>
                <li>
                  All the copyright and other intellectual property rights in
                  our website and the material on our website are reserved.
                </li>
                <li>
                  KreativeRock&#8217;s logos and our other registered and
                  unregistered trademarks are trademarks belonging to us; we
                  give no permission for the use of these trademarks, and such
                  use may constitute an infringement of our rights.
                </li>
                <li>
                  The third party registered and unregistered trademarks or
                  service marks on our website are the property of their
                  respective owners and we do not endorse and are not affiliated
                  with any of the holders of any such rights and as such we
                  cannot grant any license to exercise such rights
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              data privacy
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <ul>
                <li>
                  End-Users agree to processing of their personal data in
                  accordance with the prompt to complete transaction, submit
                  enquiries or request a quote.
                </li>
                <li>
                  KreativeRock shall process all personal data obtained from
                  registering on the website, submitting and enquiry, initiating
                  a transaction or by using the website in accordance with the
                  terms of engagement and shall only use these personal data for
                  marketing communications purposes only.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              indemnification
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <ul>
                <li>
                  You hereby indemnify us, and undertake to keep us indemnified,
                  against:
                </li>
                <li>
                  Any and all losses, damages, costs, liabilities and expenses
                  (including without limitation legal expenses and any amounts
                  paid by us to any third party in settlement of a claim or
                  dispute) incurred or suffered by us and arising directly or
                  indirectly out of your use of our platform or any breach by
                  you of any provision of these general terms and conditions or
                  the KreativeRock codes, policies or guidelines; and
                </li>
                <li>
                  Any VAT liability or other tax liability that we may incur in
                  relation to any sale, supply or purchase made through our
                  website, where that liability arises out of your failure to
                  pay, withhold, declare or register to pay any VAT or other tax
                  properly due in any jurisdiction.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              general terms{" "}
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <ul>
                <li>You acknowledge that:</li>
                <li>
                  We do not confirm the identity of all account holders on
                  KreativeRock website.
                </li>
                <li>
                  We do not check, audit, or monitor all information contained
                  in listings.
                </li>
                <li>We do not warrant or represent:</li>
                <li>
                  The completeness or accuracy of the information published on
                  our website.
                </li>
                <li>That the website will operate without fault; or</li>
                <li>
                  That the website or any service on the website will remain
                  available.
                </li>
                <li>
                  We reserve the right to discontinue or alter any or all of our
                  services, and to stop publishing our website, at any time in
                  our sole discretion with notice or explanation.
                </li>
                <li>
                  If you breach these general terms and conditions, or if we
                  reasonably suspect that you have breached these general terms
                  and conditions in any way, we may:
                </li>
                <li>Temporarily suspend your access to our website.</li>
                <li>Permanently prohibit you from accessing our website.</li>
                <li>
                  Block computers using your IP address from accessing our
                  website.
                </li>
                <li>
                  Contact any or all of your internet service providers and
                  request that they block your access to our website.
                </li>
                <li>Suspend or delete your account on our website; and/or</li>
                <li>Commence legal action against you.</li>
                <li>
                  Where we suspend, prohibit or block your access to our website
                  or a part of our website you must not take any action to
                  circumvent such suspension or prohibition or blocking
                  (including without limitation creating and/or using a
                  different account).
                </li>
                <li>
                  These terms of use shall constitute the entire agreement
                  between you and us in relation to your use of our platform and
                  shall supersede all previous understandings and agreements
                  between you and us in relation to your use of our website.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={`${classes.headerText} ${classes.headerText1}`}
            >
              company information
            </Typography>
            <Typography variant="h2" className={classes.content}>
              This Site is run by KreativeRock Digital Limited, based in Nigeria
              (West Africa). We are a private company incorporated in accordance
              with the laws of the Federal Republic of Nigeria with registration
              number RC 1441363. We are VAT registered.
            </Typography>
            <Typography variant="h2" className={classes.content}>
              This KreativeRock operates from 77 Ojuelegba Road Surulere, Lagos
              State, Nigeria.{" "}
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Telephone: +234.809.420.0003, +234.806.370.3219
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Email: <a href="info@kreativerock.com">info@kreativerock.com</a>
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Website: <a href="www.kreativerock.com">www.kreativerock.com</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      ;
    </>
  );
};

export default TermsOfUse;
