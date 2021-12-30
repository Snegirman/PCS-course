import { createSlice } from "@reduxjs/toolkit";

export const addDancerSlice = createSlice({
    name: 'addDancer',
    initialState: {
        value: (!localStorage.getItem('dancerNotes')) ? [] : JSON.parse(localStorage.getItem('dancerNotes')),
    },
    reducers: {
        addDancer: (state, item) => {
            state.value.push(item.payload);
            return state;
        },
        pushToLocal: (state) => {
            localStorage.setItem('dancerNotes', JSON.stringify(state.value))
            return state;
        }
    }
})

export const { addDancer, pushToLocal } = addDancerSlice.actions;

export default addDancerSlice.reducer;