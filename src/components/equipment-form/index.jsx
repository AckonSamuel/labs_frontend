import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { counter, equipment } from "../../redux/slices/add-equipment-slice";
import { useForm } from 'react-hook-form';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

export default function EquipmentForm() {
  const dispatch = useDispatch();
  const { register, getValues, handleSubmit }  = useForm();
  const selectCounter = useSelector((state) => state.addEquipmentReducer.counter, shallowEqual);
  const nextValue = selectCounter + 1;
  const [ submitted, setSubmitted ] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  };

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
                required
                {...register('equipment_name')}
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Manufacturing Year"
                fullWidth
                required
                {...register('manufacturing_year')}
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
                required
                {...register('equipment_model')}
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                type="text"
                label="Price of Equipment"
                required
                {...register('price')}
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
                required
                {...register('description')}
                fullWidth
              />
            </Box>
            <Button variant="contained" onClick={() => {
              onSubmit();
            }}>Next</Button>
            </Grid>
            </Grid>
        </Box>
  );
}
