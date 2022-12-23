import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSearch: null,
};

export const selectCurrentSearch = (state) => {
  return state.search.currentSearch;
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearCurrentSearch: (state) => {
      state.currentSearch = null;
    },
    updateSearch: (state, action) => {
      const data = action.payload;
      state.currentSearch = data;
    },
  },
});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
