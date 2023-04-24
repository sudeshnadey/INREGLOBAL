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
import logo from './images/logo.svg';
import logo2 from './images/logo2.png';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import pr1 from './images/pr1.png';
import pr2 from './images/pr2.png';
import pr3 from './images/pr3.png';
import pr4 from './images/pr4.png';
import arrow from './images/arrow.svg';
import { useStyles } from "./styles";




const FourCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? 2 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const card2s = [
    {
      id: 1,
      title: 'Virtual Site Visit',
      content: 'It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV system. You just need to choose your convenient date and hour slots. We will provide both live streaming and...',
      image: pr1,
    },
    {
      id: 2,
      title: 'Khata Transfer',
      content: 'Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.',
      image: pr2,
    },
    {
      id: 3,
      title: 'BESCOM Transfer',
      content: 'Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.',
      image: pr3,
    },
    {
      id: 4,
      title: 'Property Tax Transfer',
      content: 'Various processes like Khata transfer and Bescom transfer after registration consume your precious time and money. Let us help you with those at nominal costs ensuring fast and transparent delivery.',
      image: pr4,
    },
   
  ];

  const visibleCards = [
    card2s[currentIndex],
    card2s[(currentIndex + 1) % 4],
  ];
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
     <Container>
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
    <Box style={{ paddingTop:'50px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'50px',}}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton onClick={handlePrevClick}>
            <ChevronLeft />
          </IconButton>
          <div style={{ display: 'flex',  }}>
            {visibleCards.map(card => (
              <Card key={card.id} className={classes.cardcontent2}>
                <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              className={classes.contentimg}
            />
                <CardContent>
                  <Typography className={classes.titlecontent2} color="textSecondary" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.content}>
                    {card.content}
                  </Typography>
                </CardContent>
                <Button variant="outlined" className={classes.contactbtn}  >
          Contact us <img src={arrow} alt="Your Image" className={classes.arrow} />
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

export default FourCardCarousel;