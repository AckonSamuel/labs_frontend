/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function Navbar() {
  return (
    <Box>
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
        outline: 'solid #fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2,
        height: 60,
        alignItems: 'center',
      }}
      onClick={preventDefault}
    >

      <Link href="#">Home</Link>
      <Link href="#" color="inherit">
        How it works
      </Link>
      <Link href="#" variant="body2">
        About us
      </Link>
      <Link href="#" variant="body">
        Help Center
      </Link> 
      </Box>
    </Box>

  );
}