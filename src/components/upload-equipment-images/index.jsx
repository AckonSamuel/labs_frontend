import React from 'react';
import Box from '@mui/material/Box';

const UploadBox = () => {
    return <Box sx={{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 53px 86px #004C741A',
        borderRadius: '40px',
        width: 44,
        height: 30,
        opacity: '1',
        outline: 'solid blue'
    }}>
        <Box
        sx={{
            background: '#F4F8FB 0% 0% no-repeat padding-box',
            border: '2px dashed #C5D1E2',
            borderRadius: '24px',
            opacity: '1',
            margin :5
        }}>

        </Box>
    </Box>
}

export default UploadBox;