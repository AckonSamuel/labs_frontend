import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import MultipleSelectChip from "./select-component";

export default function SelectCategoryAndLab() {

    const sampleCategory = ['power', 'measurement', 'protection', 'soldering'];
    const sampleLabs = ['mechanical', 'electrical', 'computer', 'electronics'];
  return (
        <Box component="form">
            <Grid container sx={{
                background: '#fff',
                borderRadius: '32px',
                display: 'flex',
                padding: 5,
                margin: 'auto',
                width: '80%',
                justifyContent: 'space-around',
            }}>
             <Grid item xs={12} sm={12} md={12} lg={12} mb={4}>
             <Typography variant="title" component="h3" align="center">Enter vendor details</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} gap={2}
            sx={{
              
            }}>
            <Box mb={2}>
                <MultipleSelectChip label="Category" options={sampleCategory} />
            </Box>
            <Box mb={2}>
            <MultipleSelectChip label="Labs" options={sampleLabs} />
            </Box>
            <Box mb={2}>
            <MultipleSelectChip label="Vendor" options={sampleLabs} />
            </Box>
            </Grid>
            </Grid>
           
        </Box>
  );
}
