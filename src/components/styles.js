import { makeStyles } from '@material-ui/core/styles';
import { ForkRight } from '@mui/icons-material';


export const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  root: {
    paddingTop: '50px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
    [theme.breakpoints.up('360')]: {
      paddingLeft: '130px',
      paddingRight: '120px',
    },
  },
  gridContainer: {
    height: 'auto',
    backgroundColor: '#002550',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.up('480')]: {
      width: 'auto',
      height: 'auto',
    },
    [theme.breakpoints.up('360')]: {
      width: 'auto',
      height: 'auto',
    },
  },

  menuButton: {
    color:' #01244A',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
      color:' #01244A',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color:'black',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  
  menu: {
    justifyContent:'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    justifyContent: "center",
      alignItems: 'center',
      flexGrow: 1,
      marginLeft:'50px',
      color:' #01244A',
 
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    
    padding: theme.spacing(2),
    position: 'relative',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing:'0.2px',
    '&:hover': {
      backgroundColor:'white',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderBottom: '2px solid #01244A',
        paddingTop: '20px',
       
      },
      boxShadow: 'none',
  },
},
  button: {
    marginLeft: theme.spacing(2),
    textTransform:'capitalize',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '23px',
    textTransform: 'none',
    backgroundColor:'#01244A',
    borderRadius:' 5px',
    border:'1px solid #01244A',
    color:' #FFFFFF',
    "&  .MuiButton-label":
      {
     width:'100%',
    },
    '&:hover': {
      backgroundColor: '#01244A', // specify the hover color
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button1: {
    marginLeft: theme.spacing(0),
    textTransform:'capitalize',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '25px',
    textTransform: 'none',
   paddingTop:'12px',
   paddingBottom:'12px',
   paddingLeft:'12px',
   paddingRight:'12px',
    borderRadius:' 5px',
    border:'1px solid #01244A',
    color:' #01244A',
    "&  .MuiButton-label":
      {
     width:'100%',
    },
    '&:hover': {
      backgroundColor: '#F1F1F1', // specify the hover color
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  button2:{
    marginLeft: theme.spacing(2),
    textTransform:'capitalize',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '25px',
    textTransform: 'none',
   paddingTop:'8px',
   paddingBottom:'8px',
   paddingLeft:'8px',
   paddingRight:'8px',
    borderRadius:' 5px',
    border:'1px solid #01244A',
    color:' #01244A',
    "&  .MuiButton-label":
      {
     width:'100%',
    },
    '&:hover': {
      backgroundColor: '#F1F1F1', // specify the hover color
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  type1:{
    fontFamily: 'Solway' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '40px',
    lineHeight: '40px',
    letterSpacing:'0.2px',
    textTransform:'capitalize',
    color:'white',
    marginLeft:'20px',
    marginTop:'100px',
    paddingBottom:'30px',
  },
  logo:{
    width:'50%',
  },
  logo2:{
    marginTop:'-50px',
width:'50px',
  },
  image:{
    marginTop:'30px',
    marginLeft:'20px',
  },

  image2:{
    width:'500px',
    height:'310px',
   
  },
  box1:{
   marginTop:'-17px',
      height: '400px',
      width:'685px',
      [theme.breakpoints.down('sm')]: {
       
       
      },
      [theme.breakpoints.down('xs')]: {
        
      },
  
  },
  heading1:{
    marginTop:'20px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '34px',
    lineHeight: '43px',
    letterSpacing:'0.2px',
    color:'#1A1A1A',
  },
  para1:{
    width:'500px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '18.59px',
    letterSpacing:'0.2px',
    color:'#1A1A1A',
    opacity: '0.6',
    marginBottom:'20px'
  },
  card1:{
   
    backgroundColor: '#F2F4F6',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#CCD3DC',
      borderBottom: '4px solid #000000;',
      boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
  },
  card2:{
   width:'300px',
   backgroundColor: 'white',
   boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
   borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'transparent',
      
    },
  },
  card4:{
    width:'500px',
    height:'600px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
     '&:hover': {
       backgroundColor: 'transparent',
       boxShadow: '0px 0px 80px rgba(0, 0, 0, 0.2)',
borderRadius: '10px',
       
     },
   },

  card3:{
    boxShadow: '0px 4px 61px rgba(0, 0, 0, 0.16)',
    borderRadius: '10px',
    width:'300px',
    backgroundColor: 'white',
    
     '&:hover': {
       backgroundColor: 'transparent',
       
     },
   },
  para2:{
    paddingTop:'10px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing:'0.2px',
    color:' #1A1A1A',
    marginTop:'20px',
   
  },
  heading3:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    color:' #1A1A1A;',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '3px',
      width: '15%',
      marginLeft:'520px',
      backgroundColor: '#000',
      position: 'absolute',
      
    },
  },
  headingblog:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    color:' #1A1A1A;',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '3px',
      width: '8%',
      marginLeft:'560px',
      backgroundColor: '#000',
      position: 'absolute',
      
    },
  },
  heading4:{
    marginTop:'20px',
    marginBottom:'20px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    color:' #1A1A1A;',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '3px',
      width: '15%',
      marginLeft:'530px',
      backgroundColor: '#000',
      position: 'absolute',
      
    },
  },
  heading4a:{
    paddingTop:'30px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    color:' #1A1A1A;',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '3px',
      width: '18%',
      marginLeft:'500px',
      backgroundColor: '#000',
      position: 'absolute',
      
    },
  },
  headingblog1:{
    marginTop:'20px',
    paddingBottom:'20px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '44px',
    color:' #1A1A1A;',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
      content: "''",
      display: 'block',
      height: '3px',
      width: '8%',
      marginLeft:'560px',
      backgroundColor: '#000',
      position: 'absolute',
      
    },
  },
  image9:{
    marginTop:'50px',
    height:'400px',
    width:'300px',
  },
  cardimage:{
    height:'200px',
    width:'280px',
    marginLeft:'10px',
    marginRight:'10px',
    marginTop:'10px',
    marginBottom:'0px',
  },
  cardimage2:{
    height:'300px',
    width:'480px',
    marginLeft:'10px',
    marginRight:'10px',
    marginTop:'10px',
    marginBottom:'0px',
  },
  media: {
    height: '200px',  
    width:'240px',
    marginTop:'10px',
    marginBottom:'10px',
    marginLeft:'10px',
    PaddingRight:'10px',
  },
  viewmore:{
    marginRight:'10px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px',
    color:'  #002550',
    textAlign:'right',
  },
  namehead:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '38px',
    color:'  #002550',
  },
  paracard:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '18px',
    color:'  #1A1A1A',
    opacity:'0.6',

  },
  cardhead2:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '25px',
    color:'  #1A1A1A',
  },
  paracard2:{
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '15px',
    color:'  #1A1A1A',
    opacity:'0.6',

  },
  contacthead:{
    marginTop:'20px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33px',
    color:'  #1A1A1A',
  },
  cardbook:{
    marginTop:'0px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '33px',
    color:'  #1A1A1A',
  },
  one:{
    width:'30px',
    paddingTop:'20px',
  },
  card1:{
   
    backgroundColor: '#F2F4F6',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#CCD3DC',
      borderBottom: '4px solid #000000;',
      boxShadow:'0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
  },
  image10:{
   
      width: '24px',
      height: '24px',
      marginRight: theme.spacing(1),
 
  },
  title: {
    
    marginLeft:'30px',
    marginTop:'10px',
  },
  pos: {
    marginBottom: 12,
  },
  
  text: {
marginTop:'10px',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '33px',
    color:'  #1A1A1A',
  },

  footer: {
    backgroundColor: '#002550',
    color: '#fff',
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headingf: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  headingf2: {
    fontWeight: 'bold',
   marginTop:'-50px',
   marginBottom: theme.spacing(2),
  },
  headingfooter: {
    paddingTop:'40px',
    marginLeft:'-40px',
    fontWeight: '300',
    fontFamily: 'Open Sans' ,
    fontSize: '12px',
    lineHeight: '33px',
    
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffff',
    fontFamily: 'Open Sans' ,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '25px',
    textDecoration: 'none',
    marginBottom: theme.spacing(1),
  },
  icon: {
    height:'20px',
    width:'20px',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  copy: {
    color:'white',
    backgroundColor: '#002550',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  social: {
    marginLeft:'-50px',
    display: 'flex',
    alignItems: 'center',
  },
  socialIcon: {
    fontFamily: 'Open Sans',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '16px',
lineHeight: '23px',
    color: '#fff',
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
btnsubmit:{
width:'320px',
color: '#FFFFFF',
padding: '12px 32px',
backgroundColor: '#01244A',
borderRadius: '4px',
textTransform:'capitalize',
fontFamily: 'Open Sans',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '18px',
lineHeight: '25px',
'&:hover': {
  backgroundColor: '#01244A',
},
},
titlecontent:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '22px',
  fontWeight:'600',
  color: '#002550',
},
titleheading:{
  marginLeft:'20px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'700',
  color: '#1A1A1A',
},
blogheading:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'700',
  color: '#1A1A1A',
},
blogheading2:{
  marginLeft:'5px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'400',
  color: '#1A1A1A',
},
blogheading3:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'400',
  color: '#1A1A1A',
  marginLeft:'50px',
},
titleheading3:{
  marginLeft:'230px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'600',
  marginTop:'10px',
  color: '#1A1A1A',
},
titleheading2:{
  marginTop:'10px',
  marginLeft:'10px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '15px',
  fontWeight:'400',
  color: '#1A1A1A',
},

titlecontent2:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '22px',
  fontWeight:'600',
  color: '#1A1A1A',
},
content:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '14px',
  color: '#1A1A1A',
  opacity: '0.6',
},
contentimg:{
  height:'200px',width:'430px',
  marginTop:'10px',
    marginLeft:'10px',
    marginBottom:'10px',
    marginRight:'10px',
},
contentblog:{
  paddingTop:'10px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
 fontSize: '14px',
  color: '#1A1A1A',
  opacity: '0.6',
},
dateIcon:{

  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '25px',
  color: '#002550',
  paddingBottom:'30px',
},
cardcontent: {
 height: 'auto',
 width:'450px',
 marginRight:'50px',
 backgroundColor: '#FFFFFF',
 boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.16)',
 borderRadius: '10px',
},

card5: {
  height: 'auto',
  width:'150px',
  
 },
cardcontent2: {
  height: 'auto',
  width:'450px',
  marginRight:'50px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
  borderRadius: '10px',
 },
 contactbtn:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '15px',
  lineHeight: '25px',
  color:'  #1A1A1A',
  padding: '12px 12px',
borderColor:'#1A1A1A',
borderRadius: '4px',
textTransform:'capitalize',
fontFamily: 'Mulish',
marginLeft:'20px',
marginBottom:'30px',
'&:hover': {
  backgroundColor: 'white',
},
 },
 arrow:{
  paddingLeft:'10px',
 },
 cardcorousal:{
  height: '550px',
  width:'260px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
  borderRadius: '10px'
 },

 cardmember:{
  height: '50px',
  width:'50px',
 },
 cofounder:{
  marginLeft:'70px',
 marginTop:'-60px',
 fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '38px',
  color:'  #1A1A1A',
 },
 cofounder2:{
  marginLeft:'70px',
 marginTop:'-10px',
 fontFamily: 'Open Sans' ,
 fontStyle: 'normal',
 fontWeight: '600',
 fontSize: '18px',
 lineHeight: '38px',
 color:'  #1A1A1A',
opacity:'0.2'
 },
 cofounder3:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '20px',
  color:'  #1A1A1A',
 opacity:'0.6',
 marginTop:'10px',
 },
 blogimg:{
  height:'300px',
  width:'500px',
 },
 headingblog:{
  paddingTop:'50px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '30px',
  lineHeight: '40px',
  color:'  #002550',
 },
 parablog:{
  paddingTop:'10px',
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '20px',
  color:' #1A1A1A',
  opacity:'0.6',
 },
 iconimage:{
  width:'18px',
  height:'20px',
  marginTop:'10px',
  marginLeft:'20px',
 },
 iconimage1:{
  width:'15px',
  height:'15px',
marginTop:'2px'
 },
 bt:{
  marginLeft:'-100px'
 },
 bt1:{
  marginLeft:'100px'
 },
 cardpara2:{
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  color:' #1A1A1A',
  opacity:'0.6',
 },
 name2:{
 
  fontFamily: 'Open Sans' ,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  color:' #002550',
 marginLeft:'200px',
 marginTop:'10px'
 }
}));

