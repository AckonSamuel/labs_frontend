import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function EquipmentForm() {

  return (
        <Box component="form">
            <Grid container sx={{
                background: '#fff',
                borderRadius: '32px',
                outline: 'solid blue',
                display: 'flex',
                padding: 10,
                margin: 'auto',
                width: '80%',
                justifyContent: 'space-around',
            }}>
            <Grid item xs={12} sm={12} md={12} lg={5} gap={2}
            sx={{
              outline: 'solid blue',
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
            <Box mb={2}>
              <TextField
                type="text"
                label="Description of Equipment"
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
