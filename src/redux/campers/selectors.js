import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectCampersById = (state) => state.campers.items.id;
export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFilter = (state) => state.filter.filter;

export const selectFilteredData = createSelector([selectCampers, selectFilter], (campers, filter) => {
    switch (filter) {
      case 'kitchen':
        return campers.filter(items => items.kitchen);
      case 'AC':
        return campers.filter(items => items.AC);
      default:
        return campers;
    }
  });
     