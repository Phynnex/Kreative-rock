import React from "react";
import { Grid, Typography, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
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
  },
  content: {
    fontWeight: 400,
    fontSize: 18,
  },
}));
const SectionFive = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography variant="h2" className={classes.headerText}>
          Enquiry Form
        </Typography>

        <Grid container className={classes.container}>
          <Grid item container xs={11} md={10}>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              {/* <FormLabel>Full Name</FormLabel> */}
              <TextField label="First Name" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              <TextField label="Email" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              <TextField label="Phone Number" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              <TextField label="Services Needed" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              <TextField label="Organisation Name" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="4" className={classes.item}>
              <TextField label="Website" variant="outlined" />
            </Grid>
            <Grid item xs="10" sm="10" md="12" className={classes.item}>
              <TextField label="Description" variant="outlined" row="3" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SectionFive;
