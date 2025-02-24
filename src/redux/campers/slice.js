import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations.js";

const INITAL_STATE = {
  campers: {
    items: [],
    loading: false,
    error: null,
  },
  // filters: {
  //   name: "",
  // },
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITAL_STATE.campers,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;   
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })      
      .addCase(fetchCampersById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampersById.fulfilled, (state, action) => {
        state.items = action.payload.id
        //state.items = state.items.filter(item => item.id === action.payload);
        // state.items[itemIndex]
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCampersById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;