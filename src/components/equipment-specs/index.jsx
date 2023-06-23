import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { counter, equipment } from "../../redux/slices/add-equipment-slice";
import { useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

export default function EquipmentSpecs() {
  const dispatch = useDispatch();
  const { register, getValues, handleSubmit }  = useForm();
  const selectCounter = useSelector((state) => state.addEquipmentReducer.counter, shallowEqual);
  const nextValue = selectCounter + 1;
  const previousValue = selectCounter - 1;
  const [ submitted, setSubmitted ] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  };

  const onPrevious = () => {
    dispatch(counter(previousValue));
  }

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      const data = getValues();
      dispatch(equipment(data));
      dispatch(counter(nextValue));
  }}, [submitted]);
  
  return (
        <Box component="form">
            <Grid container sx={{
                background: '#fff',
                display: 'flex',
                justifyContent: 'space-around',
            }}>
             <Grid item xs={12} sm={12} md={12} lg={12} mb={4}>
             <Typography variant="title" component="h3" align="center">Equipment details</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} gap={2}
            sx={{
              
            }}>
            <Box mb={2}>
              <TextField
                type="number"
                label="Resolution"
                fullWidth
                required
                {...register('resolution')}
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Range"
                fullWidth
                {...register('range')}
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="number"
                label="Accuracy"
                fullWidth
                {...register('accuracy')}
              />
            </Box>
            <Button variant="contained" onClick={() => {
              onSubmit();
            }}>Next</Button>
            <Button variant="contained" onClick={() => {
              onPrevious();
            }}>Previous</Button>
            </Grid>
            </Grid>
           
        </Box>
  );
}
