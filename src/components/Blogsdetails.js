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
import cour1 from './images/cour1.png';
import cour2 from './images/cour2.png';
import cour3 from './images/cour3.png';
import Link from '@material-ui/core/Link';

import arrow from './images/arrow.svg';
import { useStyles } from "./styles";
import {TextField, FormControl, InputLabel, Select, } from '@material-ui/core';
import {InputAdornment } from '@mui/material';
import email from './images/email.svg';
import phone from './images/phone.svg';
import linkdln from './images/linkdln.svg';
import facebook from './images/facebook.svg';
import twiter from './images/twiter.svg';
import instagram from './images/instagram.svg';
import icon1 from './images/iconimg1.svg';
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
   const [currentCard, setCurrentCard] = useState(0);
 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handlePrev = () => {
    setCurrentCard(currentCard === 0 ? cards.length - 1 : currentCard - 1);
  };

  const handleNext = () => {
    setCurrentCard(currentCard === cards.length - 1 ? 0 : currentCard + 1);
  };

  const cards = [
    {
      title: 'Real Estate, Analysis',
      content: 'Guide for personal property Buying ',
      content2: '"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
      image: cour1,
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
    },
    {
      title: 'Real Estate, Analysis',
      content: 'The Property Times | Real Estate News & Views Portal',
      content2: 'The Property Times presents real estate news, information, advice, research, opinion and commentary for industry professionals and consumers alike.',
      image: cour2,
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
    },
    {
      title: 'Real Estate, Analysis',
      content: 'Kohinoor Group | Real Estate and Property Blog',
      content2: 'The Property Times presents real estate news, information, advice, research, opinion and commentary for industry professionals and consumers alike.',
      image: cour3,
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
    },
    {
      title: 'Real Estate, Analysis',
      content: 'Guide for personal property Buying ',
      content2: '"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...',
      image: cour1,
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
    },
    {
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
      title: 'Real Estate, Analysis',
      content: 'The Property Times | Real Estate News & Views Portal',
      image: cour2,
      content2:'The Property Times presents real estate news, information, advice, research, opinion and commentary for industry professionals and consumers alike.',
    },
    {
      image1:icon1,
      date:'09 jun 2022',
      myadmin:'By Admin',
      title: 'Real Estate, Analysis',
      content: 'Kohinoor Group | Real Estate and Property Blog',
      content2: 'The Property Times presents real estate news, information, advice, research, opinion and commentary for industry professionals and consumers alike.',
      image: cour3,
    },
    
  ];
 
  return (
    <>
   {/* .........................................Navbar......................................... */}
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
<Container style={{ backgroundColor: '#F2F4F6', paddingBottom:'50px'  }}>

    <Typography variant="h4" align="center" className={classes.heading4a}>
    You May Aslo Like This
      </Typography>
    <div className={classes.root} style={{ backgroundColor: '#F2F4F6',  }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <Button onClick={handlePrev} className={classes.bt}>
            <ChevronLeft />
          </Button>
        </Grid>
        <Grid item xs={10} >
          <Grid container spacing={2} >
            {[currentCard - 1, currentCard, currentCard + 1].map((cardIndex, index) => (
              <Grid key={index} item xs={4} >
                <Card className={classes.cardcorousal} >
                  <CardMedia
                    className={classes.media}
                    image={cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 :cardIndex].image}
                    title={cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].title}
                    />
                    <CardContent>
                   
                    <Typography gutterBottom className={classes.blogheading}>
                    {cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].title}
                    </Typography>
                    <div style={{ display: 'flex', paddingTop:'10px',paddingBottom:'10px', }}>
                  <CardMedia
              component="img"
              height="200"
              image={cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].image1}
             
              className={classes.iconimage1}
            />
                  <Typography className={classes.blogheading2} color="textSecondary" gutterBottom>
                  {cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].date}
                  </Typography>
                  <Typography className={classes.blogheading3} color="textSecondary" gutterBottom>
                  {cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].myadmin}
                  </Typography>
                  </div>
                    <Typography variant="subtitle1" color="textPrimary" className={classes.dateIcon} display="inline">
                    {cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].content}
                    </Typography>
   
<Typography variant="body2" color="textSecondary" component="p" gutterBottom className={classes.contentblog}>
                    {cards[cardIndex < 0 ? cards.length - 1 : cardIndex >= cards.length ? 0 : cardIndex].content2}
</Typography>
                    </CardContent>
                    <Button variant="outlined" className={classes.contactbtn}  >
          View More <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button>
                    </Card>
                    </Grid>
                    ))}
                    </Grid>
                    </Grid>
                    <Grid item xs={1}>
                    <Button onClick={handleNext} className={classes.bt1}>
                    <ChevronRight />
                    </Button>
                    </Grid>
                    </Grid>
                    </div>
</Container>
<footer className={classes.footer} style={{marginTop:'0px',paddingLeft:'130px', paddingRight:'100px',}}>
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
            <img src={email} alt="Your Image" className={classes.icon} />
              Email:<br></br>
              <Typography variant="h6" className={classes.headingfooter}>
              support@inreglobal.com
            </Typography>
            </Link>
            
        <Link href="#" className={classes.link}>
          <img src={phone} alt="Your Image" className={classes.icon} />
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
    <img src={linkdln} alt="Your Image" className={classes.icon} />
      <div className={classes.socialIcon} />LinkedIn
      <img src={facebook} alt="Your Image" className={classes.icon} />
      <div className={classes.socialIcon} />Facebook
      <img src={twiter} alt="Your Image" className={classes.icon} />
      < div className={classes.socialIcon} />Twitter
      <img src={instagram} alt="Your Image" className={classes.icon} />
      < div className={classes.socialIcon}  />Instagram
     
    </div>
  </div>
    
</>
   

  );
};

export default Navbar;

