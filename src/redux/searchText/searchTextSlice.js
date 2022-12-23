import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieSearch } from "../../actions/ApiCall/index";
import { trimDate, trimTime } from "../../utils/common";

// khởi tạo giá trị trong redux
const initialState = {
  currentSearch: null,
  //   isAuthenticated: false,
};

export const selectCurrentSearch = (state) => {
  return state.currentSearch;
};

// Khởi tạo một slice trong redux
export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  // đồng bộ
  reducers: {
    // Lưu ý luôn là ở đây cần cặp ngoặc nhọn cho function trong reducer cho dù code bên trong chỉ có 1 dòng, đây là rule của Redux
    // https://redux-toolkit.js.org/usage/immer-reducers#mutating-and-returning-state
    clearCurrentSearch: (state) => {
      state.currentSearch = 'dau cat moi';
    },
    updateSearchTextOfRedux: (state, action) => {
      console.log("tau dang o redux:",action.payload);
      const data = action.payload;
      state.currentSearch = data;
    },

  },
 
});

// Actions: dành cho các components bên dưới gọi tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.
export const { updateSearchTextOfRedux } =
  searchTextSlice.actions;

// Selectors: mục đích là dành cho các components bên dưới gọi tới nó để lấy dữ liệu từ trong redux store ra sử dụng
export const selectCurrentUser = (state) => {
  return state.searchText.currentSearch;
};
// export const selectIsAuthenticated = (state) => {
//   return state.order.isAuthenticated;
// };

// Export default thằng Active Board Reducer
export default searchTextSlice.reducer;
