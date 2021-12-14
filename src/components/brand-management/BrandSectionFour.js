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
    marginBottom: "4em",
  },
  headerText: {
    fontWeight: 600,
    fontSize: 24,
    paddingBottom: 8,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
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
const BrandSectionFour = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid item xs="10" sm="10" md="8" className={classes.item}>
          <Typography variant="h2" className={classes.headerText}>
            Request a call back?
          </Typography>
          <div
            style={{
              height: 3,
              width: "20%",
              margin: "0 auto",
              backgroundColor: "#00CCA7",
              marginBottom: "4em",
            }}
          ></div>
          <Typography variant="body1" className={classes.content}>
            There is more than one approach to help you identify the ideal brand
            management technique that suites your brand. Fill thisform and let’s
            learn how you want us to serve you.ith KreativeRock Mobile Texting
            Solutions.
          </Typography>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default BrandSectionFour;
