import { Grid, Typography } from "@material-ui/core";
import React from "react";
import vector from "../../assets/images/Vector3.png";
import ellipse from "../../assets/images/ellipse.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: "center",
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
  content: {
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      textAlign: "justify",
    },
  },
}));
const SectionOne = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs="10" sm="10" md="8" className={classes.item}>
          <Typography variant="h2" className={classes.headerText}>
            Why Kreative Rock Mobile Texting?
          </Typography>
          <div
            style={{
              height: 3,
              width: "40%",
              margin: "0 auto",
              backgroundColor: "#00CCA7",
              marginBottom: "4em",
            }}
          ></div>
          <Typography variant="body1" className={classes.content}>
            Our Mobile Texting system empowers you to send direct or interactive
            text (SMS) messages to your customers, employees, friends, networks,
            or targeted audience across the globe to nurture, build or amplify
            existing relationships. Send and receive messages in real time,
            engage your audience better and achieve more with KreativeRock
            Mobile Texting Solutions.
          </Typography>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default SectionOne;
