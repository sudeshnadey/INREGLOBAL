import React from 'react';
import { Grid, Button, Typography, IconButton,Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Share, Bookmark, Comment } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rightColumn: {
   
    justifyContent: 'flex-end',
  },
}));

function TwoColumnLayout() {
  const classes = useStyles();

  return (
    <Container style={{ paddingTop:'100px',paddingLeft:'100px', paddingRight:'100px',}}>
    <Grid container spacing={2} className={classes.root}>
      {/* Left column */}
      <Grid item xs={12} sm={6} className={classes.leftColumn}>
        <Button variant="contained"  >
          Button
        </Button>
        <Typography variant="h6">Typography 1</Typography>
        <Typography variant="body1">Typography 2</Typography>
        <div style={{ display: 'flex' }}>
          <IconButton>
            <Favorite />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <Bookmark />
          </IconButton>
          <IconButton>
            <Comment />
          </IconButton>
        </div>
      </Grid>
      {/* Right column */}
      <Grid item xs={12} sm={6} className={classes.rightColumn}>
      <Button variant="contained" style={{marginLeft:'250px'}}>
          Button
        </Button>
        <Typography variant="h6">Typography 1</Typography>
        <Typography variant="body1">Typography 2</Typography>
       
      </Grid>
    </Grid>
    </Container>
  );
}

export default TwoColumnLayout;


