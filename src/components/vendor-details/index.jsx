import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

export default function VendorDetails() {

  return (
        <Box component="form">
            <Grid container sx={{
                background: '#fff',
                borderRadius: '32px',
                outline: 'solid blue',
                display: 'flex',
                padding: 5,
                margin: 'auto',
                width: '80%',
                justifyContent: 'space-around',
            }}>
             <Grid item xs={12} sm={12} md={12} lg={12} mb={4}>
             <Typography variant="title" component="h3" align="center">Enter vendor details</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} gap={2}
            sx={{
              outline: 'solid blue',
            }}>
            <Box mb={2}>
              <TextField
                type="text"
                label="Name of Vendor"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Vendor Location"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="e-mail"
                label="Vendor E-mail"
                fullWidth
              />
            </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5}
            sx={{
              outline: 'solid blue',
            }}>
            <Box mb={2}>
              <TextField
                type="text"
                label="Website"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Description"
                multiline
                minRows={4}
                fullWidth
              />
            </Box>
            </Grid>
            </Grid>
            <Button color="warning">
              Cancel
            </Button>
            <Button color="success" type="submit">
              Save
            </Button>
        </Box>
  );
}
