import React from 'react';
import Button from '@mui/material/Button';

const SignInButton = () => {
    return (
        <Button variant="contained"
            sx={{
                backgroundColor: 'transparent',
                borderRadius: '32px',
                color: "#fff",
                width: 150,
                height: 40,
                border: '1px solid #fff',
                marginTop: 'auto',
            }}>Sign in</Button>
    )
};

export default SignInButton;
