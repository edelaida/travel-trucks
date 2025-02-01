//import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFilter = (state) => state.filters.name;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectFilter],
//   (campers, filter) => {
//     return campers.filter((camper) =>
//       camper.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );