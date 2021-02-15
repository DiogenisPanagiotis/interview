import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { blue } from '@material-ui/core/colors';
import AndroidIcon from '@material-ui/icons/Android';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  android: {
    fontSize: 200,
  },
  subIcon: {
    fontSize: 50,
    margin: '50px 0px 20px 0px',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  divider: {
    margin: '20px 0px',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    border: `solid 1px ${theme.palette.grey[200]}`
  },
  cardActions: {
    padding: '20px',
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  signUp: {
    width: '280px',
    height: '50px',
    margin: '40px 0px'
  }
}));

const tiers = [
  {
    title: 'Basic',
    price: '15',
    description: ['15 Minute Phone Session', 'Google Doc Template', 'Email Template', 'Email support'],
    buttonText: 'Sign Up',
    buttonVariant: 'outlined',
    buttonLink: "https://calendly.com/diogenispanagiotis/15min"
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '30',
    description: [
      '30 Minute Video Session',
      'Resume Review',
      'Google Doc Template',
      'Email Template',
      'Priority Email Support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
    buttonLink: "https://calendly.com/diogenispanagiotis/15min"
  },
  {
    title: 'Enterprise',
    price: '100',
    description: [
      'Unlimited Sessions',
      'Resume Review',
      'Google Doc Template',
      'Email Template',
      'Phone & Email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonLink: "mailto:diogenis.panagiotis@gmail.com"
  },
];

const footers = [
  {
    title: 'Company',
    description: {
      Github: 'https://github.com/DiogenisPanagiotis',
      LinkedIn: 'https://linkedin.com/in/diogenispanagiotis',
      Angel: "https://angel.co/u/diogenispanagiotis"
    },
  },
  {
    title: 'About',
    description: {
      "Home": "#home",
      Pricing: "#pricing"
    },
  },
  {
    title: 'Resources',
    description: {
      "Sign Up": "https://calendly.com/diogenispanagiotis/15min",
      Contact: "mailto:diogenis.panagiotis@gmail.com"
    },
  },
];

const intro = {
  title: "LAND ANY INTERVIEW",
  subTitle: "One creative trick can help you obtain any interview",
  description1: "You see a job posting, fill out the application, attach your resume & then you wait. Perhaps your resume fell into a black hole. Maybe — it’ll find its way to the hiring manager.",
  description2: "When it really matters, is there a way to make sure you stand out from the crowd? There sure is — it just takes a small dose of creativity. Let's discuss how a simple trick can you help obtain any interview."
};

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} id="home">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Land Any Interview
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#pricing" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="mailto:diogenis.panagiotis@gmail.com" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="https://calendly.com/diogenispanagiotis/15min" color="primary" variant="outlined" className={classes.link}>
            SIGN UP
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Box textAlign='center'>
          <AndroidIcon className={classes.android} />
        </Box>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          {intro.title}
        </Typography>
        <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
          {intro.subTitle}
        </Typography>
        <Box textAlign='center'>
          <Button className={classes.signUp} variant="contained" href="https://calendly.com/diogenispanagiotis/15min" color="primary">
            GET STARTED
          </Button>
        </Box>
        <Container maxWidth="xs">
          <Box textAlign='center'>
            <ScheduleIcon className={classes.subIcon} />
          </Box>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            {intro.description1}
          </Typography>
          <Box textAlign='center'>
            <SentimentSatisfiedIcon className={classes.subIcon} />
          </Box>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            {intro.description2}
          </Typography>
        </Container>
      </Container>
      <Divider className={classes.divider} />
      <Container maxWidth="sm" component="main" className={classes.heroContent} id="pricing">
        <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          Quickly obtain interviews and jumpstart your career growth.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card className={classes.card} elevation={0}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} href={tier.buttonLink} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {Object.keys(footer.description).map((item, href) => (
                  <li key={item}>
                    <Link href={footer.description[item]} variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </MuiThemeProvider>
  );
}

export default App;