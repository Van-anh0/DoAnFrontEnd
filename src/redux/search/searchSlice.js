import { createSlice } from "@reduxjs/toolkit";
import { movieApi } from "actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentSearch: null,
};

export const selectCurrentSearch = (state) => {
  return state.search.currentSearch;
};

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng createAsyncThunk đi kèm với extraReducers
// path order/orderSlice la duong dan toi chinh no
export const getListMovie = createAsyncThunk(
  "search/searchSlice",
  async (data) => {
    // check search text is more than 3 characters
    if (data.length < 3) {
      return;
    }
    let params = {
      search: data,
    };
    const request = movieApi.getListMovie(params);
    return request;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearCurrentSearch: (state) => {
      state.currentSearch = null;
    },
    updateSearch: (state, action) => {
      const search = action.payload;
    },
  },
  // Bất đồng bộ
  extraReducers: (builder) => {
    builder.addCase(getListMovie.fulfilled, (state, action) => {
      const data = action.payload;
      console.log(data);
      state.currentSearch = data;
    });
  },
});

export const { updateSearch, clearCurrentSearch } = searchSlice.actions;
export default searchSlice.reducer;
