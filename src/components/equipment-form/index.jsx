import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

export default function EquipmentForm() {

  return (
        <Box component="form">
            <Grid container sx={{
                background: '#fff',
                borderRadius: '32px',
                display: 'flex',
                padding: 5,
                justifyContent: 'space-around',
            }}>
             <Grid item xs={12} sm={12} md={12} lg={12} mb={4}>
             <Typography variant="title" component="h3" align="center">Enter equipment details</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}
            sx={{
              
            }}>
            <Box mb={2}>
              <TextField
                type="text"
                label="Name of Equipment"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Manufacturing Year"
                fullWidth
              />
            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}
            sx={{
              
            }}>
            <Box mb={2}>
              <TextField
                type="text"
                label="Model of Equipment"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Price of Equipment"
                fullWidth
              />
            </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={11} sm={12}>
            <Box mb={2}>
              <TextField
                type="text"
                label="Description of Equipment"
                multiline
                minRows={4}
                fullWidth
              />
            </Box>
            </Grid>
            </Grid>
           
        </Box>
  );
}
