import { configureStore } from "@reduxjs/toolkit";
import addDancerReducer from "./createSlice";
import addEventReducer from "./createSliceEvent";




export default configureStore ({
    reducer: {
        addDancer: addDancerReducer,
        addEvent: addEventReducer
    },
})