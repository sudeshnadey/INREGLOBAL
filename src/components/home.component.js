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
const countries = [
  { code: 'bn', name: 'Bangaloure' },
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
const countryCodes = [
  {  value: 'in' },
  { value: 'us' },
{ value: 'gb' },
  // add more country codes here
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

  const handlePrev = () => {
    setCurrentCard(currentCard === 0 ? cards.length - 1 : currentCard - 1);
  };

  const handleNext = () => {
    setCurrentCard(currentCard === cards.length - 1 ? 0 : currentCard + 1);
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



    <Box style={{ paddingTop:'100px',paddingLeft:'100px', paddingRight:'100px',}}>
        <Container>
          <Grid container spacing={4} style={{height:'400px',backgroundColor:'#002550',width:'1000px',}} >
            <Grid item xs={12} sm={4} >
              <Box bgcolor="red" p={4} style={{width:'350px',}}>
                <Typography variant="body1" gutterBottom className={classes.type1}>
                Making your <span style={{ color: 'yellow',fontWeight: '800',fontSize: '35px', }}>real estate</span> purchase journey faster and transparent
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div>
            <img src={image3} alt="Your Image" className={classes.box1} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

 <Box style={{ paddingTop:'100px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'50px',}}>
        <Container>
          <Grid container spacing={4} style={{backgroundColor:'#F1F1F1',height:'343px',}} >
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
          Contact Now <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
     
      <Container>
      <Typography variant="h4" align="center" className={classes.heading3}>
      Our Offerings
      </Typography>
      <Typography variant="h4" align="center" className={classes.para2}>
      This whole purchase journey can be divided into three stages. For more details, <span style={{ color: '#002550',fontWeight: '600', }}>Click Here</span>
      </Typography>
      <Grid container spacing={3}  style={{ paddingTop:'30px',paddingLeft:'80px', paddingRight:'80px', marginBottom:'10px',}}>
        {cardsData.map((cardData) => (
          <Grid key={cardData.number} item xs={12} sm={4} className={classes.post} >
            <CardComponent cardData={cardData} className={classes.post} />
          </Grid>
        ))}
      </Grid>
      </Container>
     
    <Grid container spacing={3} style={{ paddingTop:'10px',paddingLeft:'100px', paddingRight:'50px',marginBottom:'50px',}}>
      <Grid item xs={4}>
      <Card className={classes.card2} >
      <img src={image8} alt="Your Image" className={classes.cardimage} />
      <CardContent>
          <Typography gutterBottom className={classes.namehead}>
          Background verification
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.paracard}>
          Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...
          </Typography>
        </CardContent>
        <div>
        <Button variant="outlined"  className={classes.button2} >
          Contact Us <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button>
       gnhcn</div><br></br>
         
         
      </Card>
      </Grid>
   
      <Grid item xs={4}>
      <Card className={classes.card2} >
          
            <img src={image7} alt="Your Image" className={classes.cardimage} />
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.namehead}>
            Virtual site visit
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.paracard}>
            It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...
            </Typography>
          </CardContent>
          <Button variant="outlined"  className={classes.button2} >
          Contact Us <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button><br></br><br></br>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className={classes.card2} >
          
          <img src={image8} alt="Your Image" className={classes.cardimage} />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.namehead}>
          Title diligence
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.paracard}>
          Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...
          </Typography>
        </CardContent>
        <Button variant="outlined"  className={classes.button2} >
        Contact Us <img src={arrow} alt="Your Image" className={classes.arrow} />
        </Button><br></br><br></br>
      </Card>
      </Grid>
    </Grid>
    <Typography variant="h4" align="center" className={classes.heading4}>
    Our Team Members
      </Typography><br></br>
      <Grid container spacing={3} style={{ paddingTop:'10px',paddingLeft:'130px', paddingRight:'120px',marginBottom:'50px',}}>
      <Grid item xs={4}>
      <Card className={classes.card3} >
          
          <img src={member1} alt="Your Image" className={classes.cardimage} />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardhead2}>
          Brajesh Pathak
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardpara2}>
          A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...
          </Typography>
        </CardContent>
        <div>
        <Typography gutterBottom variant="h5" component="h2" className={classes.viewmore}>
        View More
        </Typography></div><br></br>
         
         
      </Card>
      </Grid>
   
      <Grid item xs={4}>
      <Card className={classes.card3} >
          
            <img src={member2} alt="Your Image" className={classes.cardimage} />
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.cardhead2}>
            Deepak Shukla
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardpara2}>
            Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience 
            </Typography>
          </CardContent>
          <div>
        <Typography gutterBottom variant="h5" component="h2" className={classes.viewmore}>
        View More
        </Typography></div><br></br>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className={classes.card3} >
        <img src={member3} alt="Your Image" className={classes.cardimage} />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.cardhead2}>
          Alok Kumar Singh
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.cardpara2}>
          Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. 
          </Typography>
        </CardContent>
        <div>
        <Typography gutterBottom variant="h5" component="h2" className={classes.viewmore}>
        View More
        </Typography></div><br></br>
      </Card>
      </Grid>
    </Grid>
    <Container>
      
    <Typography variant="h4" align="center" className={classes.headingblog1}>
    Blog
      </Typography>
    <div className={classes.root}>
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
                    <div style={{ display: 'flex',  }}>
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
                    <Box style={{ paddingTop:'50px',paddingLeft:'100px', paddingRight:'100px', marginBottom:'100px',}}>
  <Container>
    <Grid container spacing={4} style={{backgroundColor:'white',height:'auto',boxShadow:'0px 0px 24px rgba(0, 0, 0, 0.07)',borderRadius:'10px',paddingBottom:'30px',}} >
   <Grid item xs={12} sm={8}>
      <Typography gutterBottom variant="h5" component="h2" className={classes.contacthead}>
      Get In Touch With Us To Connect
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className={classes.contacthead}>
     Contact Us
          </Typography>
        <Grid container spacing={4} style={{ paddingTop:'20px',}}>
          <Grid item xs={12} sm={6} >
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
          defaultValue="Bangaloure"
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
