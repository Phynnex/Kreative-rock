import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
import group from "../../assets/images/Group.png";
import group1 from "../../assets/images/group1.png";
import group2 from "../../assets/images/group2.png";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
  },
  item: {
    textAlign: "center",
  },
  items: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2em",
    marginBottom: "2em",
    borderRadius: "10px",
    boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.25)",
    flexBasis: "30%",
    transition: "200ms ease-in-out",
    transitionProperty: "border",
    "&:hover": {
      border: "1px solid #FF7900",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "100%",
      margin: "0 1em 1em 1em",
      justifyContent: "center",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8em",
  },
  headerText: {
    fontWeight: 600,
    fontSize: 24,
    paddingBottom: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingBottom: 4,
    },
  },
  headerText1: {
    fontWeight: 700,
    fontSize: 20,
    paddingBottom: 16,
    textAlign: "center",
    marginTop: "1em",
    color: "#252525",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
    },
  },
  content: {
    textAlign: "center",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "20px",
    color: "#474747",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      textAlign: "justify",
    },
  },
}));
const SectionFour = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.item}>
        <Typography variant="h2" className={classes.headerText}>
          Use Cases{" "}
        </Typography>
        <div
          style={{
            height: 3,
            width: "10%",
            margin: "0 auto",
            backgroundColor: "#00CCA7",
            marginBottom: "5em",
          }}
        ></div>
      </Box>
      <Grid container className={classes.container}>
        <Grid item container md={10} className={classes.items}>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Appointment Confirmations & Reminders
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Stay updated with details of your next appointment. Never miss an
              appointment ever again.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              SMS Surveys & Questionnaires
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Get insights through constructive feedbacks from your customers to
              improve & grow your business.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Opt-in/Opt-Out Campaigns
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Run ethical SMS marketing by allowing your audience to opt-in &
              opt-out of receiving SMS messages and notifications.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              SMS Contests
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Carry your audience along by creating a poll to accept votes using
              a set of keywords.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Registrations
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Allow customers to register for your event by sending an SMS to a
              number using a set of keywords.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Customer support
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Interacting with your customers and provide them the support they
              require via texting.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Mass Texting
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Reach more customers across the globe faster. Build your
              relationships.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              Trivia
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Create single or multiple questions trivia games, quiz & riddles
              via texting to engage your audience better.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={5} md={4} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              2-Way & 1-Way Texting
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Send simple & interactive messages to communicate with your
              audience better.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default SectionFour;
