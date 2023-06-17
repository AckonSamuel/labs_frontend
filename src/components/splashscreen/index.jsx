import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from './../navbar';
import Button from '@mui/material/Button';
import Image from 'mui-image';

export default function SplashScreen() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const adminLogin = () => {
      dispatch(() => {
        navigate('auth/login');
      })
    };

    const guestLogin = () => {
        dispatch(() => {
          navigate('auth/login');
        })
      }

  return (
      <Grid container sx={{ height: 'auto',
      background: 'linear-gradient(150deg,  #0DF051, #3E45BC)', }}>
        <Grid 
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ background: 'transparent'}}><Navbar /></Grid>
        <Grid
          item
          lg={6}
          sx={{
            height: 700,
            background: 'transparent',
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
         <Button sx={{
          background: '#fff',
          color: '#000',
          borderRadius: '16px',
          width: 200,
         }} variant="contained">Explore Labs DB</Button>
         </Grid>
        <Grid 
        item 
        xs={12}
        lg={6}
        sx={{
          background: 'transparent',
          borderRadius: '50%',
          outline: 'solid white',
        }}
        >
          {/* <Image src= /> */}
        </Grid>
      </Grid>
  );
}