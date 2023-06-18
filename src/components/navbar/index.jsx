/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignInButton from './../sign-in-button';
import Logo from './../logo';

const preventDefault = (event) => event.preventDefault();

export default function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Logo />
      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
          gap: 2,
          height: 60,
          width: 'auto',
          alignItems: 'center',
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="hover" sx={{
            color: '#CDCDCD',
            '&:hover': {
              color: 'white',
            },
        }}>
          Home
        </Link>
        <Link href="#" underline="hover"
        sx={{
          color: '#CDCDCD',
          '&:hover': {
            color: 'white',
          },
      }}
        >
          How it works
        </Link>
        <Link href="#" underline="hover"
        sx={{
          color: '#CDCDCD',
          '&:hover': {
            color: 'white',
          },
      }}>
          About us
        </Link>
        <Link href="#" underline="hover"
        sx={{
          color: '#CDCDCD',
          '&:hover': {
            color: 'white',
          },
      }}>
          Help Center
        </Link>
      </Box>
      <SignInButton />
    </Box>
  );
}
