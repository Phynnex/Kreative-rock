import { Grid, Box, Typography, Button } from "@material-ui/core";
import React from "react";
import banner from "../../assets/images/backdrop.png";
import amico from "../../assets/images/mobText.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  items: {
    paddingTop: "4em",
  },
  box: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    paddingTop: "4em",
    paddingLeft: "4em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 2em",
      paddingTop: "4em",
      // height: "100%",
    },
  },
  box1: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    width: 400,
    height: 380,
    display: "grid",
    placeSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 280,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  ellipseImage: {
    maxWidth: "100%",
    // width: "250px",
    // height: "400px",
  },
  headerText: {
    fontSize: 45,
    fontWeight: 700,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 10,
    },
  },
  content: {
    fontSize: 25,
    fontWeight: 400,
    lineHeight: "30px",
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
const Banner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.items}>
        <Grid container className={classes.box}>
          <Grid item xs={11} sm={11} md={6}>
            <Typography variant="h2" className={classes.headerText}>
              All-in-one Texting Solution
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Build long lasting solutions with customizable 1-way or 2-way
              texting system
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              elevation={false}
            >
              <a href="/sign-in" style={{color:"#fff"}}>Get Started</a>
            </Button>
          </Grid>
          <Grid item xs={11} sm={11} md={6} className={classes.box1}>
            <img src={amico} alt="amico" className={classes.image} />
          </Grid>
        </Grid>
      </Box>
      ;
    </>
  );
};

export default Banner;
