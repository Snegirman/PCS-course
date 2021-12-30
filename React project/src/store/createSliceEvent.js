import { createSlice } from "@reduxjs/toolkit";

export const addEventSlice = createSlice({
    name: 'addEvent',
    initialState: {
        value: (!localStorage.getItem('events')) ? [] : JSON.parse(localStorage.getItem('events')),
    },
    reducers: {
        addEvent: (state, item) => {
            state.value.push(item.payload);
            return state;
        },
        pushToLocal: (state) => {
            localStorage.setItem('events', JSON.stringify(state.value))
            return state;
        }
    }
})

export const { addEvent, pushToLocal } = addEventSlice.actions;

export default addEventSlice.reducer;