import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    equipment: {},
};

const addEquipmentSlice = createSlice({
    name: 'addEquipment',
    initialState,
    reducers: {
        counter: (state, action) => {
            state.counter = action.payload;
        },
        equipment: (state, action) => {
            state.equipment = { ...state.equipment, ...action.payload };
        },
        clear: (state, action) => {
            state.equipment = {};
        },
    },
});

const { actions, reducer } = addEquipmentSlice;

export const {
    counter,
    equipment,
    clear
} = actions;

export default reducer;
