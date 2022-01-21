import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import group from "../../assets/images/Group.png";
import group1 from "../../assets/images/group1.png";
import group2 from "../../assets/images/group2.png";
import { makeStyles } from "@material-ui/core";

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
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2em",
    // margin: "1em",
    borderRadius: "33px",
    // border: "1px solid",
    boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.25)",
    flexBasis: "30%",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
      margin: "0 1em",
      marginBottom: "1em",
      maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
      // maxWidth: "100%",
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
    fontSize: 23,
    paddingBottom: 16,
    textAlign: "center",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingBottom: 4,
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
const SectionThree = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.item}>
        <Typography variant="h2" className={classes.headerText}>
          KreativeRock Mobile Texting Services
        </Typography>
        <div
          style={{
            height: 3,
            width: "30%",
            margin: "0 auto",
            backgroundColor: "#00CCA7",
            marginBottom: "5em",
          }}
        ></div>
      </Box>
      <Grid container className={classes.container}>
        <Grid item container sm={12} md={10} className={classes.items}>
          <Grid item xs={6} sm={5} md={4} className={classes.box}>
            <img src={group2} className={classes.image} alt=''/>
            <Typography variant="h2" className={classes.headerText1}>
              Interactive Texting Solutions <br /> (2-Way SMS)
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Send and receive SMS globally. Engage in rich, simplified,
              purposeful and interactive conversation with your customers. Stay
              in touch with them & show them your care.{" "}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={4} className={classes.box}>
            <img src={group1} className={classes.image} alt=''/>
            <Typography variant="h2" className={classes.headerText1}>
              Simple Texting Solutions <br /> (1-Way SMS)
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Customize your Senders ID & personalize communications with your
              audience. Send text SMS worldwide and monitor your SMS delivery
              with our real time reporting.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={4} className={classes.box}>
            <img src={group} className={classes.image} alt=''/>
            <Typography variant="h2" className={classes.headerText1}>
              Enterprise Texting Solutions <br /> (Bulk SMS)
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Communicate & build stronger relationships with unlimited number
              of contacts and scale your business faster.Save time, efforts and
              access the world faster.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default SectionThree;
