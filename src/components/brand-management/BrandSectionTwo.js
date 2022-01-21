import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import group1 from "../../assets/images/Groupicon1.png";
import group2 from "../../assets/images/Groupicon2.png";
import group3 from "../../assets/images/Groupicon3.png";
import group4 from "../../assets/images/Groupicon4.png";
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
    justifyContent: "space-around",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2em",
    borderRadius: "33px",
    border: "2px solid #CFCFCF",
    backgroundColor: "#fff",
    marginBottom: "2.5em",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
      margin: "0 1em",
      maxWidth: "100%",
      marginBottom: "2.5em",
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
    textAlign: "justify",
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
const BrandSectionTwo = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.item}>
        <Typography variant="h2" className={classes.headerText}>
          What We Can Do For You
        </Typography>
        <div
          style={{
            height: 3,
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#00CCA7",
            marginBottom: "5em",
          }}
        ></div>
      </Box>
      <Grid container className={classes.container}>
        <Grid item container sm={12} md={10} className={classes.items}>
          <Grid item xs={6} sm={5} md={5} className={classes.box}>
            <img src={group2} className={classes.image} alt=''/>
            <Typography variant="h2" className={classes.headerText1}>
              Social Media & Digital Identity Management
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Many prospective customers rely on digital platforms to connect,
              discover, research, educate and firm purchase decisions even
              before engaging with that organization. Each platforms have their
              unique audience that can help achieve your goal. We will leverage
              these platforms to help you achieve your goals.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={5} className={classes.box}>
            <img src={group1} className={classes.image} alt=''/>
            <Typography variant="h2" className={classes.headerText1}>
              Corporate Identity Designs & Management
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Your corporate identity separates your brand from the competition
              and propels the attraction & attention you need to thrive. We will
              design creative and intuitive corporate identity that will make a
              strong first impression to foster that gut feeling
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={5} className={classes.box}>
            <img src={group3} className={classes.image} alt='' />
            <Typography variant="h2" className={classes.headerText1}>
              Modern Business & Marketing Strategy
            </Typography>
            <Typography variant="h2" className={classes.content}>
              Our dedicated team of creative, innovative, and goal-oriented
              professionals will help point you in the right direction on the
              best approach to tap into the greatest opportunities in the
              market, increase sales and achieve a sustainable competitive
              advantage
            </Typography>
          </Grid>
          <Grid item xs={6} sm={5} md={5} className={classes.box}>
            <img src={group4} className={classes.image} alt='' />
            <Typography variant="h2" className={classes.headerText1}>
              Content Marketing & Management Strategy
            </Typography>
            <Typography variant="h2" className={classes.content}>
              A good content strategy should bridge the gap between the content
              you produce and what your consumers want. Content is the life
              blood of your business as it attracts tones of qualified leads and
              sales to your business when it&#8217;s done right. If you want to create
              the right type of prioritized content at the right time, then you
              need a winning content marketing strategy & management. We'll
              evaluate your brand and create a winning strategy that works.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
};

export default BrandSectionTwo;
