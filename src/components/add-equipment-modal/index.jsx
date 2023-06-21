import React, { useEffect, useRef, useState } from 'react';
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
import VendorDetails from './../vendor-details';

const AddEquipmentModal = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const [counter, setCounter] = useState(0);

    const handleClickOpen = (scrollType) => () => {
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
    const next = () => {
        setCounter(counter + 1);
    };
    const previous = () => {
        setCounter(counter - 1);
    };
    const modalContent = [<EquipmentForm />, <EquipmentSpecs />, <UploadEquipmentImages />, <VendorDetails />, <SelectCategoryAndLab />];

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
                    {modalContent[counter]}
                </DialogContent>
            </Box>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                {
                    counter > 0 && 
                    <Button onClick={previous}>
                    Previous
                </Button> 
                }
                {
                    counter !== modalContent.length - 1 &&
                    <Button onClick={next}>
                    Next
                </Button>
}
{ counter === modalContent.length -1 &&
                <Button>
                Submit
            </Button>
                }

            </DialogActions>
        </Dialog></>
    );
};

export default AddEquipmentModal;