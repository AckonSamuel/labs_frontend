import React from 'react';
import Button from '@mui/material/Button';

const SignInButton = () => {
    return (
        <Button
            sx={{
                backgroundColor: 'transparent',
                borderRadius: '16px',
                borderColor: '#fff',
                textColor: "#fff"
            }}>Sign in</Button>
    )
};

export default SignInButton;
