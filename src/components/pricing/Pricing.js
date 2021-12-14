import { Grid, Box, Typography, Button, Card } from '@material-ui/core'
import React from 'react'
import banner from '../../assets/images/Rectangle.png'
import { makeStyles } from '@material-ui/core'
import { Table } from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
  items: {
    paddingTop: '4em',
    textAlign: 'center',
  },
  box: {
    padding: '0 2em',
    paddingTop: '4em',
    background: `url(${banner})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 2em',
      paddingTop: '4em',
    },
  },
  box1: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: 400,
    height: 380,
    display: 'grid',
    placeSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 280,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  ellipseImage: {
    maxWidth: '100%',
    // width: "250px",
    // height: "400px",
  },
  headerText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 10,
    },
  },
  headerText1: {
    textDecoration: 'underline',
    textDecorationColor: '#00CCA7',
    textUnderlineOffset: '10px',
  },
  content: {
    fontSize: 18,
    fontWeight: 400,
    textAlign: 'left',
    lineHeight: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      marginBottom: 5,
    },
  },
  content1: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '10px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      marginBottom: 5,
    },
  },
  btn: {
    color: '#fff',
    borderRadius: '50px',
    padding: '10px 55px',
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  btnGrid: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  card: {
    width: '100%',
    padding: '2em 0',
  },
  mainBox: {
    width: '100%',
    marginBottom: '5em',
    textAlign: 'center',
  },
  tableHead: {
    background: '#ebebeb',
    padding: '10px 0',
  },
  tableData: {
    background: '#00CCA7 !important',
    color: '#fff',
    fontWeight: 600,
    height: '2em  !important',
  },
}))
const Pricing = () => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.items}>
        <Grid container className={classes.box}>
          <Typography className={classes.headerText}>
            AFFORDABLE PRICING FOR EVERYONE. BUILT FOR YOU
          </Typography>
          <Box className={classes.mainBox}>
            <Card className={classes.card}>
              <Typography
                className={`${classes.headerText} ${classes.headerText1}`}
              >
                Simple Texting Pricing
              </Typography>
              <Table bordered className='table' responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <td colSpan={3} className={classes.tableData}></td>
                  </tr>
                  <tr>
                    <th>STANDARD</th>
                    <th style={{ background: '#FF7900', color: '#fff' }}>
                      PREMIUM
                    </th>
                    <th>BUSINESS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Description</td>
                    <td>COST</td>
                    <td rowSpan='3'></td>
                  </tr>
                  <tr>
                    <td>Senders ID</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Contact Uploads</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan='3' className={classes.tableData}>
                      SIMPLE SMS SENDING COST
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <th>CONTACTS</th>
                    <th>NIGERIA</th>
                    <th>GHANA</th>
                    <th>KENYA</th>
                    <th>SOUTH AFRICA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500 Contacts - 9,999 Contacts</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                    <td>SOU.80</td>
                  </tr>
                  <tr>
                    <td>10,000 Contacts – 49,999 Contacts</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                    <td>SOU.80</td>
                  </tr>
                  <tr>
                    <td>50,000 Contacts & Above</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                    <td>SOU.80</td>
                  </tr>
                </tbody>
              </Table>
              <ul>
                <li className={classes.content}>
                  View Here for International Sending Rates
                </li>
              </ul>
              <Button
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.btn}
              >
                GET STARTED
              </Button>
            </Card>
          </Box>
          <Box className={classes.mainBox}>
            <Card className={classes.card}>
              <Typography
                className={`${classes.headerText} ${classes.headerText1}`}
              >
                Interactive Texting Pricing
              </Typography>
              <Table bordered className='table' responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <td colSpan={5} className={classes.tableData}>
                      ACCESSORIES
                    </td>
                  </tr>
                  <tr>
                    <th colSpan='2'>DESCRIPTION</th>
                    <th colSpan={3}>COST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th></th>
                    <th>NIGERIA</th>
                    <th>GHANA</th>
                    <th>KENYA</th>
                    <th>SOUTH AFRICA</th>
                  </tr>
                  <tr>
                    <td>Toll-Free Long Number Set-up </td>
                    <td>NGN 10,000</td>
                    <td>gHS 148</td>
                    <td> KES 2,716</td>
                    <td> S0U.80</td>
                  </tr>
                  <tr>
                    <td>Toll-Free Short Number Set-up </td>
                    <td>NGN 10,000</td>
                    <td>gHS 148</td>
                    <td> KES 2,716</td>
                    <td> S0U.80</td>
                  </tr>
                  <tr>
                    <td>Keyword Set-up </td>
                    <td>NGN 19,999</td>
                    <td>gHS 298</td>
                    <td> KES 5,432</td>
                    <td> S0U.80</td>
                  </tr>
                  <tr>
                    <td>Contact Uploads </td>
                    <td>Free</td>
                    <td>Free</td>
                    <td>Free</td>
                    <td>Free</td>
                  </tr>{' '}
                  <tr>
                    <td colSpan='5' className={classes.tableData}>
                      INTERACTIVE SMS SENDING COST
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <th>CONTACTS</th>
                    <th>NIGERIA</th>
                    <th>GHANA</th>
                    <th>KENYA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500 Contacts - 9,999 Contacts</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                  </tr>
                  <tr>
                    <td>10,000 Contacts – 49,999 Contacts</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                  </tr>
                  <tr>
                    <td>50,000 Contacts & Above</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                  </tr>
                  <tr>
                    <td colSpan='4' className={classes.tableData}>
                      INTERACTIVE SMS RECIEVING COST
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <th>RESPONSE</th>
                    <th>NIGERIA</th>
                    <th>GHANA</th>
                    <th>KENYA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Each Response</td>
                    <td>NGN2.95</td>
                    <td>GHS0.043</td>
                    <td>KES0.080</td>
                  </tr>
                </tbody>
              </Table>
              <ul>
                <li className={classes.content}>
                  Click Here for International Sending Rates.
                </li>
                <li className={classes.content}>
                  Note Standard texting rate applies for toll-free long numbers
                  when users reply to SMS.
                </li>
                <li className={classes.content}>
                  CONTACT SALES FOR ENTREPRISE TEXTING
                </li>
              </ul>

              <Button
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.btn}
              >
                GET STARTED
              </Button>
            </Card>
          </Box>

          <Box className={classes.mainBox}>
            <Card className={classes.card}>
              <Typography
                className={`${classes.headerText} ${classes.headerText1}`}
              >
                Email Signature Pricing
              </Typography>
              <Table bordered className='table' responsive='md'>
                <thead className={classes.tableHead}>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>FREE PLAN</th>
                    <th>PRO PLAN</th>
                    <th>CUSTOM PLAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Create, Manage & Deploy your Signature to your Email
                      Client
                    </td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Add Logo</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Add Banner Images & Gifs</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Email Signature Editor Basis</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Email Signature Editor Advanced</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Personalized Disclaimer</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Powered by KreativeRock Display on your email Signature
                    </td>
                    <td>Yes</td>
                    <td>-</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Total Email Signature Users</td>
                    <td>1 User</td>
                    <td>1 to 10 Users</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      Integration to Gmail, Outlook, G-suite, Yahoo, iPhone
                    </td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Free</td>
                    <td>$2.92/Month</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Select Plan</td>
                    <td>Select Plan</td>
                    <td>Contact Us</td>
                  </tr>
                </tbody>
              </Table>

              <Button
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.btn}
              >
                GET STARTED
              </Button>
            </Card>
          </Box>
          <Box className={classes.mainBox}>
            <Card className={classes.card}>
              <Typography className={classes.headerText}>
                DIGITAL MARKETING PRICING
              </Typography>
              <Typography variant='h2' className={classes.content1}>
                Contact Sales For Pricing
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.btn}
              >
                GET STARTED
              </Button>
            </Card>
          </Box>
          <Box className={classes.mainBox}>
            <Card className={classes.card}>
              <Typography className={classes.headerText}>
                BRAND MARKETING PRICING
              </Typography>
              <Typography variant='h2' className={classes.content1}>
                Contact Sales For Pricing
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                disableElevation
                className={classes.btn}
              >
                GET STARTED
              </Button>
            </Card>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Pricing
