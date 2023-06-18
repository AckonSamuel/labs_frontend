import React from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ExploreButton = () => {
    return (
        <Button sx={{
            background: '#fff',
            color: '#000',
            borderRadius: '32px',
            width: 200,
            display: 'flex',
            flexDirection: 'row',
            padding: 1,
            justifyContent: 'space-around',
            '&:hover': {
                color: '#fff',
            }
          }} variant="contained">Explore Labs DB
          <KeyboardDoubleArrowRightIcon /> 
          </Button>
    )
};

export default ExploreButton;
