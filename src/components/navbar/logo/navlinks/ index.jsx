import React from 'react';
import Box from '@mui/material/Box';
const Navlinks = () => {

    const Links = (arr) => {
        arr.map((link) => 
        <a className='navLinks'>{link}</a>
        )
    }
    return (
        <Box>
            <a>Home</a>
            <a>How it works</a>
            <a>About Us</a>
            <a>Help Center</a>
        </Box>
    )
}