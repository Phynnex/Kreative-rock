import { Grid, Box, Typography, Button } from "@material-ui/core";
import React from "react";
import banner from "../../assets/images/backdrop.png";
import pana from "../../assets/images/pana2.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  items: {
    paddingTop: "4em",
    marginBottom: "4em",
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
      // height: "100%",
    },
  },
  image: {
    maxWidth: "100%",
    // width: 400,
    // height: 380,
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
    width: "250px",
    height: "400px",
  },
  headerText: {
    fontSize: 45,
    fontWeight: 700,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 6,
      textAlign: "center",
    },
  },
  content: {
    fontSize: 25,
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
const BrandBanner = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.items}>
        <Grid container className={classes.box}>
          <Grid item xs={11} sm={11} md={6} className={classes.box2}>
            <Typography variant="h2" className={classes.headerText}>
              FUEL YOUR BRAND WITH MODERN, INNOVATIVE &{" "}
              <Typography color="secondary" className={classes.headerText}>
                CREATIVE MANAGEMENT
              </Typography>
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
              Get Started
            </Button>
          </Grid>
          <Grid item xs={11} sm={11} md={5} className={classes.box1}>
            <img src={pana} alt="amico" className={classes.image} />
          </Grid>
        </Grid>
      </Box>
      ;
    </>
  );
};

export default BrandBanner;
