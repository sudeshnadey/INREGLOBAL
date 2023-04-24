import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Grid,
  Card, 
  CardContent,
  Container,
  CardMedia,
  Paper,
  CardActionArea,
  ButtonGroup,
} from '@material-ui/core';

import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import image3 from './images/image2.png';
import image4 from './images/img2.png';
import image5 from './images/image5.png';
import image6 from './images/cardimg1.png';
import image7 from './images/cardimg2.png';
import image8 from './images/cardimg3.png';
import image9 from './images/image9.png';
import logo from './images/logo.svg';
import logo2 from './images/logo2.png';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import member1 from './images/member1.png';
import member2 from './images/member2.png';
import member3 from './images/member3.png';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { useStyles } from "./styles";
import {TextField, FormControl, InputLabel, Select, } from '@material-ui/core';
import {InputAdornment } from '@mui/material';
import email from './images/email.svg';
import phone from './images/phone.svg';
import linkdln from './images/linkdln.svg';
import facebook from './images/facebook.svg';
import twiter from './images/twiter.svg';
import instagram from './images/instagram.svg';
const countryCodes = [
  {  value: 'in' },
  { value: 'us' },
{ value: 'gb' },
];
  const countries = [
    { code: 'bn', name: 'Bangalore' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    // add more countries here
  ];
  
  const stages = [
    { value: 'I have booked but registration is not done', label: 'I have booked but registration is not done' },
    { value: 'I am still searching', label: 'I am still searching' },
    { value: 'I have registered and taken possession', label: 'I have registered and taken possession' },
    { value: 'I am interested in selling', label: 'I am interested in selling' },
    { value: 'I have booked but registration is not done', label: 'I have booked but registration is not done' },
  ];
  const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentCard, setCurrentCard] = useState(0);
    const [country, setCountry] = React.useState('');
    const [stage, setStage] = React.useState('');
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
  
    const handleStageChange = (event) => {
      setStage(event.target.value);
    };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [countryCode, setCountryCode] = useState('us');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <>

    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.menuItem}>Home</MenuItem>
            <MenuItem className={classes.menuItem}>Our Offerings</MenuItem>
            <MenuItem className={classes.menuItem}>Our Team</MenuItem>
            <MenuItem className={classes.menuItem}>Contact Us</MenuItem>
            <MenuItem className={classes.menuItem}>Blogs</MenuItem>
          </Menu>
          <Box className={classes.title}>
          
          <img src={logo} alt="Your Image" className={classes.logo} />
          </Box>
          <Box className={classes.menu}>
            <MenuItem className={classes.menuItem} disableTouchRipple={true}>Home</MenuItem>
            <MenuItem className={classes.menuItem} disableTouchRipple={true}>Our Offerings</MenuItem>
            <MenuItem className={classes.menuItem} disableTouchRipple={true}>Our Team</MenuItem>
            <MenuItem className={classes.menuItem} disableTouchRipple={true}>Contact Us</MenuItem>
            <MenuItem className={classes.menuItem} disableTouchRipple={true}>Blogs</MenuItem>
           
          </Box>
          <Button variant="contained"  className={classes.button} >
          Register Now
        </Button>
        </Toolbar>
        
      </Container>
    </AppBar>
    <Box style={{ paddingTop:'50px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'50px',}}>
  <Container>
    <Grid container spacing={4} style={{backgroundColor:'white',height:'auto',boxShadow:'0px 0px 24px rgba(0, 0, 0, 0.07)',borderRadius:'10px',}} >
   <Grid item xs={12} sm={8}>
      <Typography gutterBottom variant="h5" component="h2" className={classes.contacthead}>
      Get In Touch With Us To Connect
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.contacthead}>
     Contact Us
          </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined"
          label="Full Name"
          helperText="Not more than 50 characters"
          defaultValue="Enter full name"
         variant='outlined'
          fullWidth
        >
          </TextField>
          
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined"
          label="Email Address"
          helperText="Please enter a valid email address"
          defaultValue="lorem@gmail.com"
         variant='outlined'
          fullWidth
        >
          </TextField>
          
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          id="outlined"
         label="Mobile Number"
          defaultValue="+91 9876543210"
         variant='outlined'
          fullWidth
          InputProps={{
       
            startAdornment: (
              <InputAdornment position="end">
                <TextField
                  select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  size="small"
                  variant="standard"
                
          color="transparent"
                >
                  {countryCodes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <img
                        src={`https://flagcdn.com/24x18/${option.value}.png`}
                        alt={option.label}
                      />
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            ),
          }}
        >
           </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
  
          <TextField
          id="outlined-select-currency"
          select
          label="Country"
          defaultValue="Bangalore"
         variant='outlined'
          fullWidth
        >
                {countries.map((c) => (
                  <MenuItem value={c.name} key={c.code}>
                   
                    {c.name}
                  </MenuItem>
                ))}
               </TextField>
           
          </Grid>
          <Grid item xs={12} sm={6}>
             
          
          <TextField
          id="outlined-select-currency"
          select
          label="Stages"
          defaultValue="I have booked but registration is not done"
          helperText=""
          variant='outlined'
          fullWidth
        >
          {stages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              </Grid><br></br>
          <Grid item xs={12} sm={12}>
                <Button variant="contained"  className={classes.btnsubmit}>
                  Submit
                </Button>
              </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Box p={4} style={{width:'450px'}}>
          <Typography variant="h4" gutterBottom>
            <img src={image9} alt="Your Image" className={classes.image9} />
          </Typography>
        </Box>
      </Grid>

    </Grid>
  </Container>
</Box>
    <footer className={classes.footer} style={{ paddingTop:'20px',paddingLeft:'130px', paddingRight:'100px',}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} className={classes.column}>
            <Typography variant="h6" className={classes.headingf}>
             <img src={logo2} alt="Your Image" className={classes.logo2} />
            </Typography>
            <Link href="#" className={classes.link}>
              
            </Link>
            <Link href="#" className={classes.link}>
             
            </Link>
            <Link href="#" className={classes.link}>
             
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={classes.column}>
            <Typography variant="h6" className={classes.headingf}>
            Company
            </Typography>
            <Link href="#" className={classes.link}>
            Home
            </Link>
            <Link href="#" className={classes.link}>
            Our Offerings
            </Link>
            <Link href="#" className={classes.link}>
            Our Team
            </Link>
            <Link href="#" className={classes.link}>
            Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} md={3} className={classes.column}>
            <Typography variant="h6" className={classes.headingf2}>
            Useful Link
            </Typography>
            <Link href="#" className={classes.link}>
            Blogs
            </Link>
            <Link href="#" className={classes.link}>
            FAQ’s
            </Link>
            
          </Grid>
          <Grid item xs={12} md={3} className={classes.column}>
            
            <Link href="#" className={classes.link}>
              <EmailIcon className={classes.icon} />
              Email:<br></br>
              <Typography variant="h6" className={classes.headingfooter}>
              support@inreglobal.com
            </Typography>
            </Link>
            
        <Link href="#" className={classes.link}>
          <PhoneIcon className={classes.icon} />
          Phone:<br></br>
              <Typography variant="h6" className={classes.headingfooter}>
              +91 | 7019305889
            </Typography>
        </Link>
      </Grid>
    </Grid>
  </footer>
  <div className={classes.copy} style={{ paddingTop:'30px',paddingLeft:'130px', paddingRight:'100px',}}>
    <Typography variant="body2">&copy; Copyright 2023. Designed by INRE Global.</Typography>
    <div className={classes.social}>
      <LinkedInIcon  className={classes.socialIcon} />LinkedIn
      <FacebookIcon className={classes.socialIcon} />Facebook
      < TwitterIcon className={classes.socialIcon} />Twitter
      < InstagramIcon className={classes.socialIcon}  />Instagram
     
    </div>
  </div>
    
</>
   

  );
};

export default Navbar;

