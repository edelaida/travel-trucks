import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "../redux/campers/slice.js";
import {filterReducer} from './campers/sliceFilter.js'

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filter: filterReducer,        
    },
});