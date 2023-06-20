import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from './../navbar';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExploreButton from './../explore-btn';
import Image from 'mui-image';

export default function SplashScreen() {

  return (
    <Grid container sx={{
      height: 'auto',
      background: 'linear-gradient(150deg,  #0DF051, #3E45BC)',
    }}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ background: 'transparent' }}><Navbar /></Grid>
      <Grid
        item
        lg={6}
        sx={{
          height: 700,
          background: 'transparent',
          marginTop: 8,
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
        }}
      >
        <Typography mb={2} component="h1" variant="h1" fontSize={70}>Know your
          <br />
          Lab Equipments</Typography>
        <Typography mb={7} component="span" variant="body2">
          Don't be safety blinded, be safety minded
        </Typography>
        <ExploreButton />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          background: 'transparent',
          padding: 10,
        }}
      >
        <Box
          sx={{
            background: 'transparent',
            borderRadius: '50%',
            outline: '0.5px solid white',
            margin: 'auto',
            paddingTop: 25,
            width: 500,
            height: 500,
          }}
        >
          <Box sx={{
            background: '#fff', width: 80, height: 80, 
            marginLeft: 58, 
            borderRadius: '50%'
          }}>
            <ArrowForwardIcon sx={{
              color: "#000",
              fontSize: 50,
              textAlign: 'center',
              margin: 2,
            }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}