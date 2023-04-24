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

import arrow from './images/arrow.svg';
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


  const countries = [
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
   
    <Box style={{ paddingTop:'100px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'50px',}}>
        <Container>
          <Grid container spacing={4} style={{backgroundColor:'#F1F1F1',height:'340px',}} >
            <Grid item xs={12} sm={6}>
              <Box  p={4} style={{width:'350px',}}>
              <Typography variant="h4" gutterBottom>
                <img src={image5} alt="Your Image" className={classes.image2} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom className={classes.heading1}>
            Who We Are
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.para1}>
                The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
                </Typography>
                <Button variant="outlined"  className={classes.button1} >
          Contact Now <img src={arrow} alt="Your Image" className={classes.arrow}/>
        </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box style={{ marginTop:'100px',marginLeft:'100px', marginRight:'100px', marginBottom:'50px',}}>
      <Container style={{backgroundColor:'#F2F4F6',height:'250px',borderRadius:'10px'}}>
      <div style={{  alignItems: 'center', paddingTop:'30px' }}>
      <img src={member1} alt="Your Image" className={classes.cardmember} />
        <Typography variant="h6" component="div" className={classes.cofounder}>
        Brajesh Pathak 
        </Typography>
        </div>
        <div>
        <Typography variant="h6" component="div" className={classes.cofounder2}>
       Co-founder
        </Typography>
        </div>
      <Typography variant="body1" component="p" className={classes.cofounder3}>
      A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round.
      </Typography>
     </Container>
      </Box>
      <Box style={{ marginTop:'50px',marginLeft:'100px', marginRight:'100px', marginBottom:'50px',}}>
      <Container style={{backgroundColor:'#F2F4F6',height:'250px',borderRadius:'10px'}}>
      <div style={{  alignItems: 'center', paddingTop:'30px' }}>
      <img src={member2} alt="Your Image" className={classes.cardmember} />
        <Typography variant="h6" component="div" className={classes.cofounder}>
        Deepak Shukla
        </Typography>
        </div>
        <div>
        <Typography variant="h6" component="div" className={classes.cofounder2}>
       Co-founder
        </Typography>
        </div>
      <Typography variant="body1" component="p" className={classes.cofounder3}>
      Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.
      </Typography>
     </Container>
      </Box>
      <Box style={{ marginTop:'50px',marginLeft:'100px', marginRight:'100px', marginBottom:'50px',}}>
      <Container style={{backgroundColor:'#F2F4F6',height:'230px',borderRadius:'10px'}}>
      <div style={{  alignItems: 'center', paddingTop:'30px' }}>
      <img src={member3} alt="Your Image" className={classes.cardmember} />
        <Typography variant="h6" component="div" className={classes.cofounder}>
        Alok Kumar Singh
        </Typography>
        </div>
        <div>
        <Typography variant="h6" component="div" className={classes.cofounder2}>
        Advisor
        </Typography>
        </div>
      <Typography variant="body1" component="p" className={classes.cofounder3}>
      Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.
      </Typography>
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

