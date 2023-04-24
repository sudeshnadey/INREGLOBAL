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
import arrow from './images/arrow.svg';
import pb1 from './images/pb1.png';
import pb2 from './images/pb2.png';
import pb3 from './images/pb3.png';
import pb4 from './images/pb7.png';
import pb5 from './images/pb4.png';
import pb6 from './images/pb5.png';
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
      title: 'Title Diligence',
      content: 'Title diligence is normally seen as an activity that requires the serious involvement of experienced legal consulates as the entire premise of ownership lies in title diligence and various compliances with housing norms. This activity also requires a lot of coordination between the legal consulates and developers which is a time-consuming affair without understanding the context, We using Ai enabled platform has eased out the process...',
      image: pb1,
    },
    {
      id: 2,
      title: 'Sustainable Marketability Of Title',
      content: 'Real estate is still the most informal industry in India with certain malpractices. It is frequently observed that sellers create multiple rights on the same property which makes the purchase experience unpleasant. Here, we bring the proposition of regular checks on the government records like the encumbrance certificate of the particular property. This is further supplemented with a legal opinion report by the expert. This ensures that...',
      image: pb2,
    },
    {
      id: 3,
      title: 'Virtual Site Visit',
      content: 'After booking the property, monitoring is required to ensure that the developer is sticking to the development plan. Here, InRe brings the proposition of “ Virtual visits at Post- Booking stage”. We help the customer to inspect the site with the help of AI-enabled UAVs. By covering the aerial view of the project, the overall development of the project at the maximum possible heights could be observed. This can replace or complement...',
      image: pb3,
    },
    {
      id: 4,
      title: 'Hassle Free Registration ',
      content: 'The registration process involves visiting registrar offices and coordinating with lawyers, brokers, and sellers. Documents that are presented in the registrars offices seem deficient or incorrect in almost 50% of the cases and need to be rectified very soon adding to hassles and delays. It becomes even more difficult when you are out of the city and just visiting for the registration process. To prevent these unnecessary travel times and ',
      image: pb4,
    },
    {
      id: 5,
      title: 'TDS & Capital Gain',
      content: 'Adhering to compliance is strictly required in the process of property purchase. As per the Income tax Act 1956, if the property value is more than 50 Lakhs then TDS @ 1% needs to be deducted by the buyer out of the sale consideration and the same needs to be paid on behalf of the seller to the Central Government of India. Failing to deduct TDS and pay to the government of India within the due date, the applicable monthly interest rate is...',
      image:  pb5,
    },
    {
      id: 6,
      title: 'Pre-Delivery Inspection ',
      content: 'The most difficult task during the property buying process, especially in residential units like apartments and villas is to measure the quality of work done by the developer/ contractor/ third party and to identify the flaws which protect the interest of the buyer before taking the delivery of the house. It is the primary responsibility of the developer/ contractor/ third party to fix those issues before delivery. But, It is frequently seen...',
      image:  pb6,
    },
  ];

  const visibleCards = [
    card2s[currentIndex],
    card2s[(currentIndex + 1) % 6],
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
              <Card key={card.id} className={classes.cardcontent}>
                <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              className={classes.contentimg}
            />
                <CardContent>
                  <Typography className={classes.titlecontent} color="textSecondary" gutterBottom>
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