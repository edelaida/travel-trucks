import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "../redux/campers/slice.js";
import { filtersReducer } from "../redux/filter/slice.js";

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,        
    },
});