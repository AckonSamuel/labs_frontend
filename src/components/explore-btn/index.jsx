import React from 'react';
import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';

const ExploreButton = () => {
    return (
        <Button
            sx={{
                backgroundColor: 'White',
                borderRadius: '16px',
                borderColor: '#fff',
                textColor: "#000"
            }}>Explore Labs DB 
            <ArrowForward />
            </Button>
    )
};

export default ExploreButton;
