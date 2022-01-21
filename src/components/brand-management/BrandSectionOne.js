import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import rafiki from "../../assets/images/rafiki.png";
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
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4em",
    },
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
    fontSize: 20,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      textAlign: "justify",
    },
  },
  image: {
    maxWidth: "100%",
    height: "300px",
    width: "500px",
    marginBottom: "2em",
  },
}));
const BrandSectionOne = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.item}>
        <Typography variant="h2" className={classes.headerText}>
          Why Branding?
        </Typography>
        <div
          style={{
            height: 3,
            width: "10%",
            margin: "0 auto",
            backgroundColor: "#00CCA7",
            marginBottom: "4em",
          }}
        ></div>
      </Box>
      <Grid container className={classes.container}>
        <Grid item xs="10" sm="10" md={5}>
          <img src={rafiki} alt="" srcset="" className={classes.image} />
        </Grid>
        <Grid item xs="10" sm="10" md={5} className={classes.item}>
          <Typography variant="body1" className={classes.content}>
            Branding plays a unique role to distinguish your brand from others.
            At KreativeRock, we help you put your best foot forward through a
            well taught-through branded content & creatives. We understand how
            to pull compelling messages & visuals to shape perceptions,
            positively influence your audience and help you penetrate the market
            effortlessly.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BrandSectionOne;
