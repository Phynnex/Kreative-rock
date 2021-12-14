import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
// import vector from "../../assets/images/Vector3.png";
// import ellipse from "../../assets/images/ellipse.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: "center",
  },
  box: {
    padding: "2em",
    border: "2px solid",
    borderRadius: "30px",
    borderImage: "linear-gradient(180deg,#00CCA7,#FF7900) 10",
    marginBottom: "2em",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4em",
    },
  },
  headerText: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 26,
    paddingBottom: 8,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingBottom: 4,
      textAlign: "center",
    },
  },
  headerText1: {
    textAlign: "center",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: 30,
    paddingBottom: 8,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingBottom: 4,
      textAlign: "center",
    },
  },
  content: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "20px",
      textAlign: "justify",
    },
  },
}));
const SectionTwo = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.item}>
        <Typography variant="h2" className={classes.headerText}>
          Why Kreative Mobile Texting Works
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
        <Grid item container md={11} justifyContent="space-around">
          <Grid item xs={11} sm={11} md={5} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              simple texting
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <ul>
                <li>Upload your contacts & customize your campaign</li>
                <li>Customize your Senders ID</li>
                <li>Follow the prompt & complete setup.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={5} className={classes.box}>
            <Typography variant="h2" className={classes.headerText1}>
              interactive texting
            </Typography>
            <Typography variant="h2" className={classes.content}>
              <ul>
                <li>Upload your contacts & customize your campaign</li>
                <li>Customize your Senders ID</li>
                <li>Follow the prompt & complete setup.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default SectionTwo;
