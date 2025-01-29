export const selectCampers = (state) => state.campers.items;
export const selectFilter = (state) => state.filter.name;
export const selectIsLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;