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
import image7 from './images/cardimg2.png';
import image8 from './images/cardimg3.png';
import logo from './images/logo.svg';
import logo2 from './images/logo2.png';
import blogimg from './images/blogimg1.png';
import Link from '@material-ui/core/Link';
import pb1 from './images/pb1.png';
import pb2 from './images/pb2.png';
import pb3 from './images/pb3.png';
import arrow from './images/arrow.svg';
import icon1 from './images/iconimg1.svg';
import email from './images/email.svg';
import phone from './images/phone.svg';
import linkdln from './images/linkdln.svg';
import facebook from './images/facebook.svg';
import twiter from './images/twiter.svg';
import instagram from './images/instagram.svg';
import { useStyles } from "./styles";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? 2 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
  };
  const card2s = [
    {
      id: 1,
      heading1: 'Real Estate, Analysis',
      heading2: '09 jun 2022',
      heading3: 'By Admin',
      title: 'Guide for personal property Buying ',
      content: 'The first one is the pre-booking stage. In this stage, you are evaluating various prospective properties, deciding on the budget and the size of the property to invest..',
      image: pb1,
      image1: icon1,
    },
    {
      id: 2,
      heading1:'Real Estate, Analysis',
      heading2: '09 jun 2022',
      heading3: 'By Admin',
      title: 'Sustainable Marketability Of Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
      image: pb2,
      image1: icon1,
    },
    {
      id: 3,
      heading1: 'Real Estate, Analysis',
      heading2: '09 jun 2022',
      heading3: 'By Admin',
      title: 'Guide for personal property Buying ',
      content: 'The first one is the pre-booking stage. In this stage, you are evaluating various prospective properties, deciding on the budget and the size of the property to invest..',
      image: pb1,
      image1: icon1,
    },
  ];

  const visibleCards = [
    card2s[currentIndex],
    card2s[(currentIndex + 1) % 3],
  ];
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
   <div style={{backgroundColor:'#E6EAEE',paddingBottom:'10px',}}>
    <Box style={{ paddingTop:'50px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'40px',}}>
        <Container>
          <Grid container spacing={4} style={{backgroundColor:'#F2F4F6',height:'330px',}} >
            <Grid item xs={12} sm={6}>
              <Box  p={4} style={{width:'350px',}}>
              <Typography variant="h4" gutterBottom>
                <img src={blogimg} alt="Your Image" className={classes.blogimg} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom className={classes.headingblog}>
            The Most Expensive Bangalore Real Estate Sales For 2023
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.parablog}>
                with several sales in the Bangalore eclipsing the Rs.200 cr mark. As the pandemic continued, the ultra-wealthy sought second (and third) homes to add to their portfolios and were willing to spend a fortune to make their residences more comfortable for extended periods.
                </Typography>
           
            </Grid>
          </Grid>
        </Container>
      </Box>
     
      </div>
      <Box style={{ paddingTop:'50px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'50px',}}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton onClick={handlePrevClick}>
            <ChevronLeft />
          </IconButton>
          <div style={{ display: 'flex',  }}>
            {visibleCards.map(card => (
              <Card key={card.id} className={classes.cardcontent}>
                <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              className={classes.contentimg}
            />
            <Typography className={classes.titleheading} color="textSecondary" gutterBottom>
                    {card.heading1}
                  </Typography>
                  <div style={{ display: 'flex',  }}>
                  <CardMedia
              component="img"
              height="200"
              image={card.image1}
              alt={card.title}
              className={classes.iconimage}
            />
                  <Typography className={classes.titleheading2} color="textSecondary" gutterBottom>
                    {card.heading2}
                  </Typography>
                  <Typography className={classes.titleheading3} color="textSecondary" gutterBottom>
                    {card.heading3}
                  </Typography>
                  </div>
                <CardContent>
                  <Typography className={classes.titlecontent} color="textSecondary" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.content}>
                    {card.content}
                  </Typography>
                </CardContent>
                <Button variant="outlined" className={classes.contactbtn}  >
          View More <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button>
              </Card>
            ))}
          </div>
          <IconButton onClick={handleNextClick}>
            <ChevronRight />
          </IconButton>
        </div>
      </Grid>
    </Grid>
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

