import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  campers: {
    items: [],
  },
  filters: {
    ac: true,
    bathroom: true,
    kitchen: true,
    tv: true,
    radio: true,
  },
};

const searchSlice = createSlice({
  name: "filters",
  initialState: INITAL_STATE.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = searchSlice.actions;
export const filtersReducer = searchSlice.reducer;