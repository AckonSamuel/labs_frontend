import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { counter, equipment } from "../../redux/slices/add-equipment-slice";
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Typography, Button } from '@mui/material';

const UploadBox = () => {
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

    return <><Box sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 4,
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 53px 86px #004C741A',
        borderRadius: '40px',
        width: 440,
        height: 300,
        opacity: '1',

        margin: 'auto',
    }}>
        <Box
            sx={{
                background: '#F4F8FB 0% 0% no-repeat padding-box',
                border: '2px dashed #C5D1E2',
                borderRadius: '24px',
                opacity: '1',
                width: '85%',
                height: '89%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <UploadFileIcon sx={{
                color: '#4C5FF9',
                fontSize: 50,
            }} />
            <Typography variant="body2" sx={{
                textWrap: 'wrap',
                textAlign: 'center',
            }} color="#636C80"> Drag the equipment image here <br /> to start uploading</Typography>
            <Box sx={{
                display: 'flex',
                gap: 2,
                color: '#93A9C3',
            }}> <Box sx={{
                width: 60,
                marginBottom: 1.5,
                borderBottom: '0.1px solid #93A9C3',
            }}>
                </Box>OR<Box sx={{
                    width: 60,
                    marginBottom: 1.5,
                    borderBottom: '0.1px solid #93A9C3',
                }}></Box></Box>
            <Button variant='outlined' sx={{
                width: 150,
                height: 40,
                background: '#4C5FF9 0% 0% no-repeat padding-box',
                opacity: '1',
                color: '#fff',
                borderRadius: '12px',
                fontSize: 13,
                '&:hover': {
                    color: '#4C5FF9',
                    borderColor: '#4C5FF9',
                }
            }}>Browse files</Button>
        </Box>
    </Box><Button variant="contained" onClick={() => {
        onSubmit();
    } }>Next</Button><Button variant="contained" onClick={() => {
        onPrevious();
    } }>Previous</Button></>
}

export default UploadBox;