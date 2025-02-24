import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: 'AC',
};

const searchSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload;
      console.log(action.payload);
      
    },
  }
});

export const filterReducer = searchSlice.reducer;
export const { setFilterValue } = searchSlice.actions;

//export const selectFilter = state => state.filter.filter;