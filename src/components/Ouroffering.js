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
 
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import image7 from './images/cardimg2.png';
import image8 from './images/cardimg3.png';
import logo from './images/logo.svg';
import logo2 from './images/logo2.png';

import arrow from './images/arrow.svg';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import { useStyles } from "./styles";

  const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentCard, setCurrentCard] = useState(0);
    const [country, setCountry] = React.useState('');
    const [stage, setStage] = React.useState('');
    const cardsData = [
        { name: 'Pre-Booking', image: require('./images/1.png') },
        {  name: 'Post-Booking & Pre-Registration', image: require('./images/2.png') },
        {  name: 'Post-Registration ', image: require('./images/3.png') },
      ];
      const CardComponent = ({ cardData }) => {
        const classes = useStyles();
      
        return (
          <Card className={classes.card1}>
            <CardContent >
              <Grid container alignItems="center" className={classes.title}>
                <Grid item >
                  <img src={cardData.image} alt={cardData.name} className={classes.image10} />
                </Grid>
                <Grid item alignItems="center" >
                <Typography variant="h5" component="h2" className={classes.text}>
                  {cardData.name}
                </Typography>
                <Typography className={`${classes.pos} ${classes.text}`} color="textSecondary">
                  {cardData.number}
                </Typography>
                </Grid>
              </Grid>
              
              
            </CardContent>
          </Card>
        );
      };
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
    <Container  style={{ paddingTop:'30px'}}>
      <Typography variant="h4" align="center" className={classes.heading3}>
      Our Offerings
      </Typography>
    
      <Grid container spacing={3}  style={{ paddingTop:'30px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'10px',}}>
        {cardsData.map((cardData) => (
          <Grid key={cardData.number} item xs={12} sm={4} className={classes.post} >
            <CardComponent cardData={cardData} className={classes.post} />
          </Grid>
        ))}
      </Grid>
      </Container>
     
    <Grid container spacing={3} style={{ paddingTop:'10px',paddingLeft:'130px', paddingRight:'120px',marginBottom:'50px',}}>
      <Grid item xs={6}>
      <Card className={classes.card4} >
          
          <img src={image8} alt="Your Image" className={classes.cardimage2} />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.namehead}>
          Background verification
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.paracard}>
          It is observed that people invest more than 10 years of savings in real estate. Hence, they are automatically conscious of the developer brand, past track record of the project delivered, the project progress, and the financial acumen of the developer. This is especially significant in the case of primary transactions. Here, InRe brings the proposition of “ Background verification of developers”. Based on our experience and industry...
          </Typography>
        </CardContent>
        <div style={{ display:'flex'}}>
        <Button variant="outlined"  className={classes.button2} >
          Contact Us <img src={arrow} alt="Your Image" className={classes.arrow}/>
        </Button>
        <Typography gutterBottom variant="h5" component="h2" className={classes.name2}>
        INR 3000 per project
        </Typography></div><br></br>
         
         
      </Card>
      </Grid>
   
      <Grid item xs={6}>
      <Card className={classes.card4} >
          
            <img src={image7} alt="Your Image" className={classes.cardimage2} />
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.namehead}>
            Virtual site visit
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.paracard}>
            This requires multiple visits in multiple places deferring the buying process by more than 45 days. Also, it is difficult for people to compare two properties just based on visits. Here, InRe brings the proposition of “ Virtual visits at Pre- Booking stage”. We help the customer to visit the site with the help of AI enabled UAVs. This can replace the physical visit to the maximum possible extent by providing the live streaming feature. It also ...
            </Typography>
          </CardContent>
          <div style={{ display:'flex'}}>
          <Button variant="outlined"  className={classes.button2} >
          Contact Us <img src={arrow} alt="Your Image" className={classes.arrow}/>
        </Button>
       
        </div><br></br><br></br>
        </Card>
      </Grid>
      
    </Grid>
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

