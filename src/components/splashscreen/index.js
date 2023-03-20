import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Copyright from './../../Copyright';

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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 
            'url(https://user-images.githubusercontent.com/92922987/209251235-962d91f6-12eb-4341-9e71-eaf504965806.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                 <Box
        component="img"
        sx={{
          height: 120,
          width: 80,
          marginBottom: 9,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://www.freelogovectors.net/wp-content/uploads/2022/03/knust_logo_freelogovectors.net_.png"
      />

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Continue as
            </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                id='login-btn'
                sx={{ mt: 3, mb: 2, backgroundColor: 'green' }}
                onClick={adminLogin}
              >
            Admin
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                id='login-btn'
                sx={{ mt: 3, mb: 2, backgroundColor: 'green' }}
                onClick={guestLogin}
              >
            Guest
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
        </Grid>
      </Grid>
  );
}