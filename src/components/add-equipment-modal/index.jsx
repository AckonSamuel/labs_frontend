import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { counter, clear } from './../../redux/slices/add-equipment-slice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import SelectCategoryAndLab from './../select-category-and-lab';
import EquipmentForm from './../equipment-form';
import EquipmentSpecs from './../equipment-specs';
import UploadEquipmentImages from './../upload-equipment-images';

const AddEquipmentModal = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const selectCounter = useSelector((state) => state.addEquipmentReducer.counter, shallowEqual);

    const handleClickOpen = (scrollType) => () => {
        dispatch(counter(0));
        dispatch(clear());
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const modalContent = [<EquipmentForm />, <EquipmentSpecs />, <UploadEquipmentImages />, <SelectCategoryAndLab />];

    return (
        <><Box>
            <Button onClick={handleClickOpen('paper')}>
                Add Equipment
            </Button>
        </Box>
        <Dialog
        open={open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth>
            <Box component="form" fullWidth>
                <DialogTitle id="scroll-dialog-title">
                    Add Equipment
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"} ref={descriptionElementRef}>
                    {modalContent[selectCounter]}
                </DialogContent>
            </Box>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog></>
    );
};

export default AddEquipmentModal;